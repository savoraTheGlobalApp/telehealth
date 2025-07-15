import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle,
  // Add the following import if you have lucide-react v0.263.0+:
  // If not, you can use an inline SVG as shown below.
  // Whatsapp
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      details: ["savora5billion@gmail.com"],
      description: "Get in touch via email for general inquiries and support"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      details: ["+9197176 11679"],
      description: "Call us for immediate assistance and urgent matters"
    },
    {
      // WhatsApp icon (improved, green circle)
      icon: (
        <span className="inline-flex items-center justify-center w-6 h-6">
          <svg
            viewBox="0 0 32 32"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M23.472 19.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="#fff"
            />
            <path
              d="M16.004 6.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.464 3.484 1.345 4.997l-1.41 5.155a1 1 0 0 0 1.225 1.225l5.155-1.41a9.963 9.963 0 0 0 4.997 1.345c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.181a8.17 8.17 0 0 1-4.163-1.144l-.297-.174-3.06.837.819-2.987-.193-.307A8.18 8.18 0 1 1 24.184 16c0 4.514-3.67 8.184-8.18 8.184z"
              fill="#fff"
            />
          </svg>
        </span>
      ),
      title: "WhatsApp Support",
      details: [
        // Button below the number
        <a
          key="whatsapp-btn"
          href="https://wa.me/919717611679"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
          style={{ width: "fit-content" }}
        >
          {/* WhatsApp icon inside button */}
          <svg
            viewBox="0 0 32 32"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M23.472 19.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="#fff"
            />
            <path
              d="M16.004 6.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.464 3.484 1.345 4.997l-1.41 5.155a1 1 0 0 0 1.225 1.225l5.155-1.41a9.963 9.963 0 0 0 4.997 1.345c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.181a8.17 8.17 0 0 1-4.163-1.144l-.297-.174-3.06.837.819-2.987-.193-.307A8.18 8.18 0 1 1 24.184 16c0 4.514-3.67 8.184-8.18 8.184z"
              fill="#fff"
            />
          </svg>
          Chat on WhatsApp
        </a>
      ],
      description: "Message us on WhatsApp for quick support and queries"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Global Headquarters",
      details: ["Delhi, India"],
      description: "Visit our main office for in-person consultations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      details: ["24/7 Support"],
      description: "We're here when you need us, with 24/7 emergency support"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get a consultation?",
      answer: "Most consultations can be scheduled within 1-3 days, depending on the specialist's availability and your preferred consultation type."
    },
    {
      question: "What languages do your doctors speak?",
      answer: "Our network includes doctors who speak multiple languages including English, Spanish, French, German, Arabic, Hindi, and many others."
    },
    {
      question: "Is my medical information secure?",
      answer: "Yes, we use enterprise-grade encryption and comply with HIPAA and GDPR regulations to ensure your data is completely secure."
    },
    {
      question: "Can I get a prescription through your platform?",
      answer: "No, we provide medical opinions and consultations only. We do not issue prescriptions as part of our cross-border consultation service."
    },
    {
      question: "How much do consultations cost?",
      answer: "Consultation costs vary by specialist and type, ranging from $50 for chat consultations to $250 for comprehensive video consultations."
    },
    {
      question: "What if I need emergency medical care?",
      answer: "For medical emergencies, please contact your local emergency services immediately. Our platform is not intended for emergency care."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you with any questions about our services, 
              support, or how to get started with your healthcare journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700">Sorry, there was an error sending your message. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="consultation">Online Consultation</option>
                      <option value="tourism">Medical Tourism</option>
                      <option value="doctors">Find Doctors</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you with any questions about our services, support, 
                  or how to get started with your healthcare journey.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Medical Emergency?</h3>
                    <p className="text-yellow-700 text-sm">
                      If you're experiencing a medical emergency, please contact your local emergency services immediately. 
                      Our platform is not intended for emergency care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and platform.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-primary-100">
              Start a live chat with our support team for instant assistance with your questions.
            </p>
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Live Chat
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 