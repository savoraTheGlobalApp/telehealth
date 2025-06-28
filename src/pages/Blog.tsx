import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Heart,
  Brain,
  Shield,
  Activity,
  Eye,
  Baby,
  Stethoscope
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'cardiology', name: 'Cardiology', icon: <Heart className="w-4 h-4" /> },
    { id: 'neurology', name: 'Neurology', icon: <Brain className="w-4 h-4" /> },
    { id: 'preventive', name: 'Preventive Care', icon: <Shield className="w-4 h-4" /> },
    { id: 'fitness', name: 'Fitness & Wellness', icon: <Activity className="w-4 h-4" /> },
    { id: 'vision', name: 'Eye Health', icon: <Eye className="w-4 h-4" /> },
    { id: 'pediatrics', name: 'Pediatrics', icon: <Baby className="w-4 h-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Heart Disease: Prevention and Early Detection",
      excerpt: "Learn about the most common types of heart disease, risk factors, and how early detection can save lives. Discover preventive measures and lifestyle changes that can significantly reduce your risk.",
      category: "cardiology",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      featured: true,
      tags: ["Heart Health", "Prevention", "Cardiology"]
    },
    {
      id: 2,
      title: "The Impact of Sleep on Brain Health and Cognitive Function",
      excerpt: "Explore the crucial relationship between sleep quality and brain health. Understand how proper sleep patterns can improve memory, concentration, and overall cognitive performance.",
      category: "neurology",
      author: "Dr. Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Brain Health", "Sleep", "Neurology"]
    },
    {
      id: 3,
      title: "Preventive Healthcare: Your Guide to Regular Check-ups",
      excerpt: "A comprehensive guide to preventive healthcare screenings and check-ups by age group. Learn what tests you need and when to schedule them for optimal health maintenance.",
      category: "preventive",
      author: "Dr. Emily Watson",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Preventive Care", "Check-ups", "Health Screening"]
    },
    {
      id: 4,
      title: "Exercise and Mental Health: The Science Behind the Connection",
      excerpt: "Discover how regular physical activity can improve mental health, reduce stress, and help manage conditions like anxiety and depression. Learn practical tips for incorporating exercise into your routine.",
      category: "fitness",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Mental Health", "Exercise", "Wellness"]
    },
    {
      id: 5,
      title: "Digital Eye Strain: Protecting Your Vision in the Digital Age",
      excerpt: "Learn about digital eye strain, its symptoms, and effective strategies to protect your vision while using computers and mobile devices. Practical tips for eye health in the modern world.",
      category: "vision",
      author: "Dr. Hans Mueller",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Eye Health", "Digital Health", "Vision Care"]
    },
    {
      id: 6,
      title: "Childhood Nutrition: Building Healthy Eating Habits Early",
      excerpt: "Essential guide for parents on establishing healthy eating habits in children. Learn about proper nutrition, meal planning, and strategies to encourage healthy food choices.",
      category: "pediatrics",
      author: "Dr. Aisha Al-Rashid",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Child Nutrition", "Parenting", "Healthy Eating"]
    },
    {
      id: 7,
      title: "Managing Stress: Evidence-Based Techniques for Better Mental Health",
      excerpt: "Explore proven stress management techniques including mindfulness, meditation, and lifestyle changes. Learn how to identify stress triggers and develop healthy coping mechanisms.",
      category: "preventive",
      author: "Dr. Sarah Chen",
      date: "2024-01-01",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Stress Management", "Mental Health", "Wellness"]
    },
    {
      id: 8,
      title: "The Future of Telemedicine: Trends and Innovations",
      excerpt: "Discover how telemedicine is revolutionizing healthcare delivery. Learn about the latest innovations, benefits, and what the future holds for remote healthcare services.",
      category: "preventive",
      author: "Dr. Michael Rodriguez",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      featured: false,
      tags: ["Telemedicine", "Healthcare Innovation", "Digital Health"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, health tips, and medical knowledge to help you make informed decisions about your health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">By {featuredPost.author}</span>
                    </div>
                    <button className="btn-primary">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          </motion.div>

          {regularPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Stethoscope className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find articles on topics that interest you most.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.slice(1).map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-primary-600">{category.icon}</div>
                  <span className="font-medium">{category.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold">Stay Updated with Health Insights</h2>
            <p className="text-xl text-primary-100">
              Subscribe to our newsletter for the latest health articles, medical insights, and wellness tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-primary-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 