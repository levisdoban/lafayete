import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import lafayetteLogo from "@/assets/lafayette-logo.png";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp number (format: country code + number without +)
  const whatsappNumber = "254722709005";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    {
      title: "General Inquiry",
      message: "Hello! I'm interested in learning more about Lafayette Resources' HR consulting services. Could you please provide more information?"
    },
    {
      title: "Assessment Tools",
      message: "Hi! I'd like to know more about your PDA assessment tools and how they can help my organization."
    },
    {
      title: "Training Programs",
      message: "Hello! I'm interested in your training and capacity development programs. Can we schedule a consultation?"
    },
    {
      title: "Career Coaching",
      message: "Hi! I'd like to learn more about your career coaching and transformation programs."
    },
    {
      title: "Executive Search",
      message: "Hello! We're looking for executive search services. Could you tell me more about your process?"
    }
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
          data-testid="whatsapp-button"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img 
                  src={lafayetteLogo} 
                  alt="Lafayette Resources" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">Lafayette Resources</h3>
                <p className="text-sm text-green-100">Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-50 border-b">
            <p className="text-sm text-gray-600 mb-3">
              👋 Hi there! How can we help you today? Choose a topic below or send us a custom message.
            </p>
          </div>

          {/* Quick Message Options */}
          <div className="max-h-64 overflow-y-auto">
            {quickMessages.map((item, index) => (
              <button
                key={index}
                onClick={() => openWhatsApp(item.message)}
                className="w-full p-3 text-left hover:bg-gray-50 border-b border-gray-100 transition-colors"
                data-testid={`whatsapp-quick-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-2">{item.message}</div>
              </button>
            ))}
          </div>

          {/* Custom Message Button */}
          <div className="p-4 bg-white">
            <Button
              onClick={() => openWhatsApp("Hello! I have a question about your services.")}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              data-testid="whatsapp-custom-message"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Custom Chat
            </Button>
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50 text-center">
            <p className="text-xs text-gray-500">
              Powered by WhatsApp • Available Mon-Fri 8AM-6PM EAT
            </p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}