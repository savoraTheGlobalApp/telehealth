import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Video, 
  Phone, 
  Clock, 
  Shield, 
  Globe, 
  CheckCircle, 
  Star,
  User,
  Calendar,
  FileText
} from 'lucide-react';

const OnlineConsultation: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No Wait Times",
      description: "Skip months-long waiting periods for specialist appointments"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      description: "Connect with specialists from around the world"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Second Opinions",
      description: "Get expert second opinions on treatment plans"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Preventive Guidance",
      description: "Receive preventive care recommendations while waiting"
    }
  ];

  const consultationTypes = [
    {
      title: "Chat Consultation",
      description: "Text-based consultation for non-urgent medical questions",
      // duration: "15-30 minutes",
      // price: "$50-100",
      icon: <MessageCircle className="w-12 h-12" />,
      features: ["Written responses", "File sharing", "24/7 availability", "Follow-up support"]
    },
    {
      title: "Audio Call",
      description: "Voice consultation for detailed medical discussions",
      // duration: "30-45 minutes",
      // price: "$100-150",
      icon: <Phone className="w-12 h-12" />,
      features: ["Voice conversation", "Real-time interaction", "Recording available", "Detailed notes"]
    },
    {
      title: "Video Consultation",
      description: "Face-to-face consultation with visual examination",
      // duration: "45-60 minutes",
      // price: "$150-250",
      icon: <Video className="w-12 h-12" />,
      features: ["Visual examination", "Screen sharing", "HD quality", "Complete consultation"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Book Appointment",
      description: "Choose your specialist and preferred consultation type",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Share Information",
      description: "Upload medical records and describe your concerns",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Consultation",
      description: "Connect with your specialist via chat, audio, or video",
      icon: <User className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Get Report",
      description: "Receive detailed consultation report and recommendations",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const specialists = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Cardiology",
      experience: "15+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Neurology",
      experience: "20+ years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      specialty: "Oncology",
      experience: "18+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Cross-Border
                <span className="block text-primary-200">Online Consultation</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Get expert medical opinions and second opinions from world-class specialists worldwide. 
                No prescriptions, just expert guidance to help you make informed healthcare decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/doctors" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Find Specialists
                </Link>
                <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Online Consultation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cross-border consultation service is designed to bridge the gap between 
              long wait times and immediate healthcare needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs and comfort level.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="text-primary-600 mb-6 mx-auto">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="flex justify-center space-x-6 mb-6">
                  {/* <div className="text-center">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{type.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Price</div>
                    <div className="font-semibold text-gray-900">{type.price}</div>
                  </div> */}
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <Link to="/doctors" className="btn-primary w-full">
                  Book Now
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and straightforward process to connect you with expert specialists.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto text-primary-600 mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Specialists */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our world-class specialists available for consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialist.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{specialist.specialty}</p>
                <p className="text-gray-600 text-sm mb-3">{specialist.experience} experience</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(specialist.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{specialist.rating}</span>
                </div>
                <Link to="/doctors" className="btn-primary w-full">
                  Book Consultation
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-yellow-50 border-t border-yellow-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                Important Notice
              </h3>
              <div className="text-yellow-700 space-y-4">
                <p>
                  <strong>No Prescriptions:</strong> Our consultation service provides medical opinions and guidance only. 
                  We do not issue prescriptions or replace in-person medical care.
                </p>
                <p>
                  <strong>Emergency Care:</strong> For medical emergencies, please contact your local emergency services immediately.
                </p>
                <p>
                  <strong>Compliance:</strong> All consultations comply with international healthcare regulations including HIPAA and GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Expert Medical Opinions?
            </h2>
            <p className="text-xl text-primary-100">
              Connect with world-class specialists and get the guidance you need to make informed healthcare decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/doctors" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Browse Specialists
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-primary-600">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsultation; 