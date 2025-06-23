import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_azo61yf'; // You'll need to replace this
const EMAILJS_TEMPLATE_ID = 'template'; // You'll need to replace this
const EMAILJS_PUBLIC_KEY = 'tG__mh3v49PD5Lb4U'; // You'll need to replace this

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: string;
}

export const sendContactEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const formatUrgency = (urgency: string) =>
      urgency === 'emergency'
        ? 'EMERGENCY'
        : urgency.charAt(0).toUpperCase() + urgency.slice(1).toLowerCase();

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service || 'General Inquiry',
      message: formData.message,
      urgency: formatUrgency(formData.urgency),
      to_email: 'procrastonator7@gmail.com', // Updated email address
      reply_to: formData.email,
      // Add current date/time
      submission_date: new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    console.log('Sending to EmailJS:', JSON.stringify(templateParams, null, 2));

    // Send the email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Optional: Send auto-reply to customer
export const sendAutoReply = async (customerEmail: string, customerName: string): Promise<boolean> => {
  try {
    const autoReplyParams = {
      to_email: customerEmail,
      to_name: customerName,
      from_name: 'Matt Barron Plumbing & Heating',
      message: `Thank you for contacting Matt Barron Plumbing & Heating! We've received your request and will respond within 30 minutes during business hours (7 AM - 8 PM, Monday-Saturday).

For immediate emergency service, please call us at (973) 331-9236.

Best regards,
Matt Barron Plumbing & Heating Team`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_auto_reply', // You'll need a separate template for auto-replies
      autoReplyParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return false;
  }
};