import React from 'react';
import { Mail, Settings, Key, CheckCircle } from 'lucide-react';

const EmailSetupInstructions: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 m-4">
      <div className="flex items-center space-x-2 mb-4">
        <Settings className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-blue-900">Email Setup Required</h3>
      </div>
      
      <p className="text-blue-800 mb-4">
        To enable email functionality, you need to set up EmailJS. Follow these steps:
      </p>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <h4 className="font-semibold text-blue-900">Create EmailJS Account</h4>
            <p className="text-blue-700 text-sm">
              Go to <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a> and create a free account
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <h4 className="font-semibold text-blue-900">Add Email Service</h4>
            <p className="text-blue-700 text-sm">
              Connect your email provider (Gmail, Outlook, etc.) and note the Service ID
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <h4 className="font-semibold text-blue-900">Create Email Template</h4>
            <p className="text-blue-700 text-sm">
              Create a template with variables: from_name, from_email, phone, service, message, urgency
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
          <div>
            <h4 className="font-semibold text-blue-900">Update Configuration</h4>
            <p className="text-blue-700 text-sm">
              Replace the placeholder values in <code className="bg-blue-100 px-1 rounded">src/services/emailService.ts</code>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded border">
        <h4 className="font-semibold text-gray-900 mb-2">Configuration Values Needed:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• <strong>Service ID:</strong> From your EmailJS dashboard</li>
          <li>• <strong>Template ID:</strong> From your email template</li>
          <li>• <strong>Public Key:</strong> From Account → API Keys</li>
        </ul>
      </div>

      <div className="mt-4 flex items-center space-x-2 text-green-700">
        <CheckCircle className="h-5 w-5" />
        <span className="text-sm font-medium">Once configured, the form will automatically send emails!</span>
      </div>
    </div>
  );
};

export default EmailSetupInstructions;