import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  AlertCircle,
  // Add the following import if you have lucide-react v0.263.0+:
  // If not, you can use an inline SVG as shown below.
  // Whatsapp
} from 'lucide-react';

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   subject: '',
  //   message: '',
  //   service: 'general'
  // });
  // const [setIsSubmitting] = useState(false);
  // const [setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitStatus('success');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       subject: '',
  //       message: '',
  //       service: 'general'
  //     });
      
  //     // Reset success message after 5 seconds
  //     setTimeout(() => {
  //       setSubmitStatus('idle');
  //     }, 5000);
  //   }, 2000);
  // };

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
            {/* Google Form Section - Replacing the old contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Query</h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Query Form
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Have questions about our medical tourism services? Fill out our comprehensive form 
                    to get personalized assistance from our team.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <h4 className="font-semibold text-gray-900">What you can expect:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized medical tourism guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Detailed information about procedures and costs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Direct contact with our medical tourism specialists</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc6FdqRe37KObeIA4stA4kBm_r75kuEoI8l-3amZb_mj7m9lQ/viewform?usp=sharing&ouid=112725874533396808077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Fill the form with your queries</span>
                </a>

                <p className="text-xs text-gray-500 text-center">
                  This form will open in a new tab. Your information is secure and will only be used to assist with your medical tourism inquiry.
                </p>
              </div>
            </motion.div>

            {/* Contact Information - Keep this section as is */}
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