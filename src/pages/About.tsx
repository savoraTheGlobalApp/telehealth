import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Heart, 
  Shield, 
  Users, 
  Award, 
  CheckCircle, 
  Clock
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "Every decision we make is focused on improving patient outcomes and experiences"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accessibility",
      description: "Breaking down geographical barriers to provide healthcare access worldwide"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Maintaining the highest standards of data protection and medical ethics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Network",
      description: "Connecting patients with world-class healthcare professionals"
    }
  ];

  const stats = [
    { number: "500+", label: "Expert Doctors", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "10,000+", label: "Patients Served", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  // const team = [
  //   {
  //     name: "Dr. Sarah Johnson",
  //     role: "Chief Medical Officer",
  //     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  //     bio: "Board-certified cardiologist with 15+ years of experience in international healthcare delivery."
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Chief Executive Officer",
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  //     bio: "Healthcare technology entrepreneur with a passion for making quality healthcare accessible globally."
  //   },
  //   {
  //     name: "Dr. Emily Rodriguez",
  //     role: "Head of Medical Affairs",
  //     image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
  //     bio: "Experienced medical administrator specializing in international healthcare coordination."
  //   }
  // ];

  // const milestones = [
  //   {
  //     year: "2020",
  //     title: "Company Founded",
  //     description: "Qurelink AI was established with a mission to bridge healthcare gaps globally"
  //   },
  //   {
  //     year: "2021",
  //     title: "First 1000 Patients",
  //     description: "Reached our first milestone of serving 1000 patients across 20 countries"
  //   },
  //   {
  //     year: "2022",
  //     title: "HIPAA & GDPR Compliance",
  //     description: "Achieved full compliance with international healthcare data protection standards"
  //   },
  //   {
  //     year: "2023",
  //     title: "500+ Doctor Network",
  //     description: "Expanded our network to include 500+ verified healthcare professionals"
  //   },
  //   {
  //     year: "2024",
  //     title: "Global Expansion",
  //     description: "Launched services in 50+ countries with comprehensive medical tourism support"
  //   }
  // ];

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
                About Qurelink AI
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                We're revolutionizing healthcare access by connecting patients with world-class specialists 
                across borders, ensuring quality care is available to everyone, everywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                To democratize access to world-class healthcare by leveraging technology to connect patients 
                with expert medical professionals globally, regardless of geographical boundaries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Eliminate Wait Times</h3>
                    <p className="text-gray-600">Provide immediate access to specialist consultations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduce Healthcare Costs</h3>
                    <p className="text-gray-600">Make quality healthcare affordable through medical tourism</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ensure Quality Care</h3>
                    <p className="text-gray-600">Partner only with accredited hospitals and verified specialists</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact</h3>
                    <p className="text-gray-600">Transforming healthcare access globally</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-primary-600 mb-2 flex justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving our mission to transform global healthcare access.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Milestones Section */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform global healthcare access.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Compliance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Compliance & Security
              </h2>
              <p className="text-lg text-gray-600">
                We maintain the highest standards of data protection and medical ethics to ensure 
                your privacy and security are never compromised.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-green-500" />
                  <span className="font-medium">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-green-500" />
                  <span className="font-medium">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium">End-to-End Encryption</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8"
            >
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Security First</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Data Encryption</span>
                    <span className="text-green-600 font-semibold">✓ 256-bit AES</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Secure Storage</span>
                    <span className="text-green-600 font-semibold">✓ HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Regular Audits</span>
                    <span className="text-green-600 font-semibold">✓ Quarterly</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Privacy Protection</span>
                    <span className="text-green-600 font-semibold">✓ GDPR Compliant</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl text-primary-100">
              Whether you're a patient seeking care or a healthcare professional looking to expand your reach, 
              we're here to help you achieve better health outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started
              </button>
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 