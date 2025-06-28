import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  MessageCircle, 
  Video, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const specialties = [
    'All Specialties',
    'Cardiology',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'Dermatology',
    'Gastroenterology',
    'Endocrinology',
    'Psychiatry',
    'Pediatrics',
    'Gynecology',
    'Urology',
    'Ophthalmology',
    'ENT',
    'Pulmonology'
  ];

  const countries = [
    'All Countries',
    'United States',
    'United Kingdom',
    'India',
    'Germany',
    'Canada',
    'Australia',
    'Singapore',
    'Thailand',
    'Turkey',
    'UAE'
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialty: "Cardiology",
      country: "United States",
      city: "New York",
      experience: "15+ years",
      rating: 4.9,
      reviews: 127,
      languages: ["English", "Mandarin"],
      education: "Harvard Medical School",
      hospital: "Mount Sinai Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      consultationTypes: ["Video", "Audio", "Chat"],
      price: "$150-250",
      availability: "Next: 2 days",
      description: "Board-certified cardiologist specializing in interventional cardiology and heart failure management.",
      expertise: ["Interventional Cardiology", "Heart Failure", "Preventive Cardiology", "Cardiac Imaging"]
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      specialty: "Neurology",
      country: "United Kingdom",
      city: "London",
      experience: "20+ years",
      rating: 4.8,
      reviews: 89,
      languages: ["English", "Spanish"],
      education: "Oxford University",
      hospital: "King's College Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
      consultationTypes: ["Video", "Audio"],
      price: "$120-200",
      availability: "Next: 1 day",
      description: "Leading neurologist with expertise in movement disorders and neurodegenerative diseases.",
      expertise: ["Movement Disorders", "Parkinson's Disease", "Multiple Sclerosis", "Epilepsy"]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      specialty: "Oncology",
      country: "Canada",
      city: "Toronto",
      experience: "18+ years",
      rating: 4.9,
      reviews: 156,
      languages: ["English", "French"],
      education: "University of Toronto",
      hospital: "Princess Margaret Cancer Centre",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
      consultationTypes: ["Video", "Audio", "Chat"],
      price: "$180-300",
      availability: "Next: 3 days",
      description: "Medical oncologist specializing in breast cancer and precision medicine approaches.",
      expertise: ["Breast Cancer", "Precision Medicine", "Clinical Trials", "Palliative Care"]
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      specialty: "Orthopedics",
      country: "India",
      city: "Mumbai",
      experience: "22+ years",
      rating: 4.7,
      reviews: 203,
      languages: ["English", "Hindi", "Marathi"],
      education: "AIIMS Delhi",
      hospital: "Kokilaben Dhirubhai Ambani Hospital",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face",
      consultationTypes: ["Video", "Audio", "Chat"],
      price: "$80-150",
      availability: "Next: 1 day",
      description: "Senior orthopedic surgeon with expertise in joint replacement and sports medicine.",
      expertise: ["Joint Replacement", "Sports Medicine", "Arthroscopy", "Trauma Surgery"]
    },
    {
      id: 5,
      name: "Dr. Hans Mueller",
      specialty: "Dermatology",
      country: "Germany",
      city: "Berlin",
      experience: "16+ years",
      rating: 4.8,
      reviews: 94,
      languages: ["English", "German"],
      education: "Charité University",
      hospital: "Charité University Hospital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      consultationTypes: ["Video", "Chat"],
      price: "$100-180",
      availability: "Next: 2 days",
      description: "Dermatologist specializing in skin cancer detection and cosmetic dermatology.",
      expertise: ["Skin Cancer", "Cosmetic Dermatology", "Acne Treatment", "Psoriasis"]
    },
    {
      id: 6,
      name: "Dr. Aisha Al-Rashid",
      specialty: "Gynecology",
      country: "UAE",
      city: "Dubai",
      experience: "14+ years",
      rating: 4.6,
      reviews: 78,
      languages: ["English", "Arabic"],
      education: "American University of Beirut",
      hospital: "American Hospital Dubai",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
      consultationTypes: ["Video", "Audio"],
      price: "$90-160",
      availability: "Next: 1 day",
      description: "Gynecologist with expertise in fertility treatments and high-risk pregnancies.",
      expertise: ["Fertility Treatment", "High-Risk Pregnancy", "Gynecological Surgery", "Menopause"]
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    const matchesCountry = selectedCountry === 'all' || doctor.country === selectedCountry;
    
    return matchesSearch && matchesSpecialty && matchesCountry;
  });

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
              Find Your Specialist
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with world-class doctors and specialists from around the globe. 
              Get expert opinions and second opinions for your healthcare needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty === 'All Specialties' ? 'all' : specialty}>
                  {specialty}
                </option>
              ))}
            </select>

            {/* Country Filter */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {countries.map((country) => (
                <option key={country} value={country === 'All Countries' ? 'all' : country}>
                  {country}
                </option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center px-4 py-3 bg-gray-100 rounded-lg">
              <span className="text-gray-600">
                {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredDoctors.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Users className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex space-x-6">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(doctor.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-gray-600 ml-1">({doctor.reviews})</span>
                            </div>
                            <div className="text-sm text-gray-500">{doctor.experience} experience</div>
                          </div>
                        </div>
                      </div>

                      {/* Location & Education */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{doctor.city}, {doctor.country}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Education:</span> {doctor.education}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Hospital:</span> {doctor.hospital}
                        </div>
                      </div>

                      {/* Consultation Types */}
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Consultation Types:</div>
                        <div className="flex space-x-2">
                          {doctor.consultationTypes.map((type) => (
                            <span
                              key={type}
                              className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Price & Availability */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-500">Starting from</div>
                          <div className="text-lg font-bold text-green-600">{doctor.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Next available</div>
                          <div className="text-sm font-medium text-gray-900">{doctor.availability}</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4 border-t border-gray-200">
                        <button className="btn-primary flex-1">
                          Book Consultation
                        </button>
                        <button className="btn-secondary flex-1">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700 mb-2">Areas of Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((expertise) => (
                        <span
                          key={expertise}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                        >
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              Why Choose Our Doctors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our doctors are carefully vetted and meet international standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Verified Credentials",
                description: "All doctors are board-certified and verified"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Access",
                description: "Get appointments within 1-3 days"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Quality Care",
                description: "International standards and best practices"
              }
            ].map((feature, index) => (
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
              Can't Find the Right Specialist?
            </h2>
            <p className="text-xl text-primary-100">
              Contact our team and we'll help you find the perfect doctor for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Contact Support
              </button>
              <button className="btn-secondary text-white border-white hover:bg-white hover:text-primary-600">
                Request Specialist
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Doctors; 