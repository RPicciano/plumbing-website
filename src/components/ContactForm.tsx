import React, { useState } from 'react';
import { Phone, Mail, Calendar, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { sendContactEmail, sendAutoReply, type EmailData } from '../services/emailService';

interface FormData extends EmailData {
  // EmailData already includes all the fields we need
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please describe your plumbing or heating issue');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send the main contact email
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        // Optionally send auto-reply to customer
        await sendAutoReply(formData.email, formData.name);
        
        setSubmitStatus('success');
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            urgency: 'normal'
          });
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send your message. Please try calling us directly at (973) 331-9236.');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for contacting us! We've received your request and will respond within 30 minutes during business hours.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          You should also receive a confirmation email shortly.
        </p>
        <p className="text-sm text-gray-500">
          For immediate assistance, please call <a href="tel:9733319236" className="text-blue-600 font-semibold">(973) 331-9236</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Your Free Estimate</h2>
        <p className="text-gray-600">Fill out the form below and we'll email you back within 30 minutes</p>
      </div>

      {/* Emergency Call Button */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="font-semibold text-red-800">Emergency?</span>
        </div>
        <p className="text-red-700 text-sm mb-3">
          If you have a plumbing emergency, don't wait - call us now!
        </p>
        <a 
          href="tel:9733319236" 
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-bold text-center hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span>Emergency Hotline: (973) 331-9236</span>
        </a>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-800">Error</span>
          </div>
          <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      {/* Validation Error */}
      {errorMessage && submitStatus === 'idle' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <span className="font-semibold text-yellow-800">Please check your information</span>
          </div>
          <p className="text-yellow-700 text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Phone and Service Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(973) 555-0123"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="plumbing-repair">Plumbing Repair</option>
              <option value="drain-cleaning">Drain Cleaning</option>
              <option value="water-heater">Water Heater Service</option>
              <option value="boiler-service">Boiler Service</option>
              <option value="hvac-service">HVAC Service</option>
              <option value="installation">New Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How urgent is this?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="urgency"
                value="emergency"
                checked={formData.urgency === 'emergency'}
                onChange={handleChange}
                className="text-red-600 focus:ring-red-500"
              />
              <span className="text-red-600 font-medium">Emergency (Today)</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="urgency"
                value="urgent"
                checked={formData.urgency === 'urgent'}
                onChange={handleChange}
                className="text-yellow-600 focus:ring-yellow-500"
              />
              <span className="text-yellow-600 font-medium">Urgent (This Week)</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="urgency"
                value="normal"
                checked={formData.urgency === 'normal'}
                onChange={handleChange}
                className="text-green-600 focus:ring-green-500"
              />
              <span className="text-green-600 font-medium">Normal (Flexible)</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Describe Your Issue *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Please describe the problem or service you need..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending Email...</span>
            </>
          ) : (
            <>
              <Mail className="h-5 w-5" />
              <span>Send Email Request</span>
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          We typically respond to emails within 30 minutes during business hours. 
          For immediate assistance, call <a href="tel:9733319236" className="text-blue-600 font-semibold">(973) 331-9236</a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;