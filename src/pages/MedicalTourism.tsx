import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Plane, 
  Building, 
  DollarSign, 
  Star, 
  CheckCircle, 
  MapPin,
  Calendar,
  Users,
  Shield,
  Heart
} from 'lucide-react';

const MedicalTourism: React.FC = () => {
  const destinations = [
    {
      country: "India",
      city: "Mumbai",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      specialties: ["Cardiac Surgery", "Orthopedics", "Oncology", "Dental"],
      costSavings: "60-80%",
      hospitals: "50+ JCI Accredited",
      rating: 4.8
    },
    {
      country: "Thailand",
      city: "Bangkok",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      specialties: ["Plastic Surgery", "Fertility", "Dental", "Wellness"],
      costSavings: "50-70%",
      hospitals: "30+ International",
      rating: 4.7
    },
    {
      country: "Turkey",
      city: "Istanbul",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
      specialties: ["Hair Transplant", "Dental", "Eye Surgery", "Cardiology"],
      costSavings: "40-60%",
      hospitals: "25+ Modern",
      rating: 4.6
    }
  ];

  const services = [
    {
      title: "Hospital Coordination",
      description: "Direct connection with top-tier hospitals and medical facilities",
      icon: <Building className="w-12 h-12" />,
      features: ["JCI accredited hospitals", "Modern facilities", "English-speaking staff", "International standards"]
    },
    {
      title: "Travel Assistance",
      description: "Complete travel planning and accommodation support",
      icon: <Plane className="w-12 h-12" />,
      features: ["Flight booking", "Hotel arrangements", "Airport transfers", "Local transportation"]
    },
    {
      title: "Cost Optimization",
      description: "Transparent pricing and significant cost savings",
      icon: <DollarSign className="w-12 h-12" />,
      features: ["Up to 80% savings", "Transparent pricing", "No hidden costs", "Payment plans"]
    }
  ];

  const procedures = [
    {
      category: "Cardiac Surgery",
      procedures: ["Heart Bypass", "Valve Replacement", "Angioplasty", "Heart Transplant"],
      costRange: "$8,000 - $25,000",
      recoveryTime: "2-4 weeks"
    },
    {
      category: "Orthopedics",
      procedures: ["Hip Replacement", "Knee Replacement", "Spine Surgery", "Joint Surgery"],
      costRange: "$6,000 - $15,000",
      recoveryTime: "3-6 weeks"
    },
    {
      category: "Dental",
      procedures: ["Dental Implants", "Veneers", "Root Canal", "Full Mouth Reconstruction"],
      costRange: "$1,500 - $8,000",
      recoveryTime: "1-2 weeks"
    },
    {
      category: "Plastic Surgery",
      procedures: ["Rhinoplasty", "Breast Augmentation", "Liposuction", "Face Lift"],
      costRange: "$3,000 - $12,000",
      recoveryTime: "2-4 weeks"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Savings",
      description: "Save 40-80% compared to US/UK healthcare costs"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "No Wait Times",
      description: "Skip months-long waiting periods for procedures"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Care",
      description: "World-class facilities with international accreditations"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Comprehensive travel and medical insurance coverage"
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
                Medical Tourism
                <span className="block text-primary-200">Made Simple</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Connect with world-class hospitals and surgeons abroad. Save up to 80% on medical procedures 
                while receiving top-quality care in accredited facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Get Started
                </Link>
                <Link to="/doctors" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Find Surgeons
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
              Why Choose Medical Tourism?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access world-class healthcare at a fraction of the cost, with no waiting periods.
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

      {/* Popular Destinations */}
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
              Popular Medical Tourism Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class healthcare destinations with accredited hospitals and experienced surgeons.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {destination.city}, {destination.country}
                    </h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Specialties</div>
                      <div className="text-sm text-gray-900">{destination.specialties.join(", ")}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Cost Savings</div>
                      <div className="text-green-600 font-semibold">{destination.costSavings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Hospitals</div>
                      <div className="text-sm text-gray-900">{destination.hospitals}</div>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary w-full">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
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
              Our Medical Tourism Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support throughout your medical tourism journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="text-primary-600 mb-6 mx-auto">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full">
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures & Costs */}
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
              Popular Procedures & Costs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare costs and find the right procedure for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {procedures.map((procedure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{procedure.category}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Common Procedures</div>
                    <div className="flex flex-wrap gap-2">
                      {procedure.procedures.map((proc, procIndex) => (
                        <span
                          key={procIndex}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {proc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Cost Range</div>
                      <div className="font-semibold text-green-600">{procedure.costRange}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Recovery Time</div>
                      <div className="font-semibold text-gray-900">{procedure.recoveryTime}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How Medical Tourism Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to access world-class healthcare abroad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your medical needs and get recommendations"
              },
              {
                step: "02",
                title: "Hospital Selection",
                description: "Choose from accredited hospitals and surgeons"
              },
              {
                step: "03",
                title: "Travel Planning",
                description: "We handle all travel and accommodation arrangements"
              },
              {
                step: "04",
                title: "Treatment & Recovery",
                description: "Receive treatment and post-operative care"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto text-primary-600 font-bold text-xl">
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

      {/* Safety & Quality */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Safety & Quality Assurance
              </h2>
              <p className="text-xl text-primary-100">
                Your safety and the quality of care are our top priorities. We partner only with 
                internationally accredited hospitals and experienced surgeons.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary-200" />
                  <span>JCI Accredited Hospitals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary-200" />
                  <span>Experienced Surgeons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-primary-200" />
                  <span>Patient-Centered Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-primary-200" />
                  <span>International Standards</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Quality Standards</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Hospital Accreditation</span>
                  <span className="text-green-400">✓ JCI Certified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Surgeon Experience</span>
                  <span className="text-green-400">✓ 10+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Success Rate</span>
                  <span className="text-green-400">✓ 95%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Patient Satisfaction</span>
                  <span className="text-green-400">✓ 4.8/5</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Medical Tourism Journey?
            </h2>
            <p className="text-xl text-gray-300">
              Get personalized assistance and connect with world-class healthcare facilities abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                Get Free Consultation
              </Link>
              <Link to="/doctors" className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900">
                Browse Surgeons
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MedicalTourism; 