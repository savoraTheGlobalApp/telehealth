import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  MessageCircle, 
  Video, 
  ArrowRight,
  CheckCircle
  // Star
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      description: "Connect with specialists from around the world without leaving your home"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA & GDPR Compliant",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No Wait Times",
      description: "Skip months-long waiting periods and get expert opinions quickly"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Specialists",
      description: "Access to world-renowned doctors and medical professionals"
    }
  ];

  const services = [
    {
      title: "Online Consultation",
      description: "Get expert medical opinions and second opinions from specialists worldwide",
      features: ["No prescriptions", "Expert opinions", "Preventive guidance", "Treatment reviews"],
      icon: <MessageCircle className="w-12 h-12" />,
      link: "/online-consultation"
    },
    {
      title: "Medical Tourism",
      description: "Connect with top hospitals and surgeons for medical procedures abroad",
      features: ["Hospital coordination", "Travel assistance", "Cost savings", "Quality care"],
      icon: <Globe className="w-12 h-12" />,
      link: "/medical-tourism"
    }
  ];

  // const stats = [
  //   { number: "500+", label: "Expert Doctors" },
  //   { number: "50+", label: "Countries" },
  //   { number: "10,000+", label: "Patients Served" },
  //   { number: "24/7", label: "Support" }
  // ];

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     location: "New York, USA",
  //     text: "Got a second opinion that saved me from unnecessary surgery. The doctor was incredibly thorough and caring.",
  //     rating: 5
  //   },
  //   {
  //     name: "Ahmed Al-Rashid",
  //     location: "Dubai, UAE",
  //     text: "The medical tourism service helped me find the perfect surgeon in India. Everything was perfectly coordinated.",
  //     rating: 5
  //   },
  //   {
  //     name: "Emma Thompson",
  //     location: "London, UK",
  //     text: "Instead of waiting 6 months for a specialist, I got an expert opinion in 48 hours. Highly recommended!",
  //     rating: 5
  //   }
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Global Healthcare
                <span className="block text-primary-200">Without Borders</span>
              </h1>
              <p className="text-xl text-primary-100">
                Connect with world-class specialists, get second opinions, and access medical tourism services. 
                Your health journey starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/online-consultation" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Get Consultation
                </Link>
                <Link to="/medical-tourism" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Medical Tourism
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Video Consultation</h3>
                      <p className="text-sm text-primary-100">HD quality calls</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Chat Support</h3>
                      <p className="text-sm text-primary-100">24/7 assistance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Secure Platform</h3>
                      <p className="text-sm text-primary-100">HIPAA compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Sapiens Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing healthcare access by connecting patients with world-class specialists 
              across borders, ensuring you get the care you need when you need it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to meet your needs, 
              whether you're seeking expert opinions or medical procedures abroad.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="text-primary-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="btn-primary inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from patients who have transformed their healthcare journey with Sapiens Health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of patients who have already discovered the benefits of global healthcare access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/online-consultation" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Start Consultation
              </Link>
              <Link to="/doctors" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Browse Doctors
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 