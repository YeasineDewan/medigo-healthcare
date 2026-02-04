import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, Home, FileText, Truck, Search, Star, Clock, MapPin, Shield, CheckCircle, TrendingUp, Award, Heart, Activity, Droplet, Brain, Stethoscope, Thermometer, Pill, Syringe, Microscope, TestTube, AlertCircle, Heart as HeartIcon, Sun } from 'lucide-react';
import { Button } from '../components/core/Button';

const testCategories = [
  { 
    id: 'complete-blood-count',
    name: 'Complete Blood Count', 
    price: 500,
    originalPrice: 800,
    discount: 38,
    category: 'Hematology',
    description: 'Comprehensive analysis of blood cells',
    preparation: 'No special preparation required',
    duration: '15-20 minutes',
    sampleType: 'Blood',
    fasting: 'Not required',
    homeCollection: true,
    reportTime: 'Same day',
    popular: true,
    icon: Droplet,
    color: 'from-red-500 to-red-600',
    parameters: ['Hemoglobin (Hb)', 'Red Blood Cell Count (RBC)', 'White Blood Cell Count (WBC)', 'Platelet Count'],
    includes: ['Sample collection at home', 'Digital report within 24 hours', 'Doctor consultation available'],
    whyTest: ['To detect infections', 'Check for anemia', 'Monitor overall health', 'Diagnose blood disorders']
  },
  { 
    id: 'lipid-profile',
    name: 'Lipid Profile', 
    price: 800,
    originalPrice: 1200,
    discount: 33,
    category: 'Cardiology',
    description: 'Measures cholesterol and triglycerides',
    preparation: '10-12 hours fasting required',
    duration: '15-20 minutes',
    sampleType: 'Blood',
    fasting: 'Required (10-12 hours)',
    homeCollection: true,
    reportTime: 'Same day',
    popular: true,
    icon: HeartIcon,
    color: 'from-pink-500 to-pink-600',
    parameters: ['Total Cholesterol', 'HDL Cholesterol', 'LDL Cholesterol', 'Triglycerides'],
    includes: ['Sample collection at home', 'Digital report within 24 hours', 'Cardiologist consultation'],
    whyTest: ['Assess heart disease risk', 'Monitor cholesterol levels', 'Evaluate cardiovascular health']
  },
  { 
    id: 'thyroid-function',
    name: 'Thyroid Function', 
    price: 900,
    originalPrice: 1400,
    discount: 36,
    category: 'Endocrinology',
    description: 'Comprehensive thyroid panel',
    preparation: 'No special preparation required',
    duration: '15-20 minutes',
    sampleType: 'Blood',
    fasting: 'Not required',
    homeCollection: true,
    reportTime: '1-2 days',
    popular: true,
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    parameters: ['T3 (Triiodothyronine)', 'T4 (Thyroxine)', 'TSH (Thyroid Stimulating Hormone)'],
    includes: ['Sample collection at home', 'Digital report within 48 hours', 'Endocrinologist consultation'],
    whyTest: ['Diagnose thyroid disorders', 'Monitor thyroid treatment', 'Check for hyper/hypothyroidism']
  },
  { 
    id: 'liver-function',
    name: 'Liver Function', 
    price: 1200,
    originalPrice: 1800,
    discount: 33,
    category: 'Gastroenterology',
    description: 'Assess liver health and function',
    preparation: '10-12 hours fasting recommended',
    duration: '15-20 minutes',
    sampleType: 'Blood',
    fasting: 'Recommended',
    homeCollection: true,
    reportTime: '1-2 days',
    popular: true,
    icon: Activity,
    color: 'from-amber-500 to-amber-600',
    parameters: ['SGOT (AST)', 'SGPT (ALT)', 'Alkaline Phosphatase (ALP)', 'Bilirubin'],
    includes: ['Sample collection at home', 'Digital report within 48 hours', 'Gastroenterologist consultation'],
    whyTest: ['Detect liver diseases', 'Monitor liver function', 'Check for hepatitis']
  },
  { 
    id: 'kidney-function',
    name: 'Kidney Function', 
    price: 1000,
    originalPrice: 1500,
    discount: 33,
    category: 'Nephrology',
    description: 'Evaluate kidney function and health',
    preparation: 'No special preparation required',
    duration: '15-20 minutes',
    sampleType: 'Blood & Urine',
    fasting: 'Not required',
    homeCollection: true,
    reportTime: '1-2 days',
    popular: true,
    icon: Activity,
    color: 'from-purple-500 to-purple-600',
    parameters: ['Blood Urea Nitrogen (BUN)', 'Serum Creatinine', 'Uric Acid', 'eGFR'],
    includes: ['Sample collection at home', 'Digital report within 48 hours', 'Nephrologist consultation'],
    whyTest: ['Assess kidney function', 'Detect kidney diseases', 'Monitor treatment effectiveness']
  },
  { 
    id: 'diabetes-screening',
    name: 'Diabetes Screening', 
    price: 600,
    originalPrice: 900,
    discount: 33,
    category: 'Endocrinology',
    description: 'Comprehensive diabetes screening',
    preparation: '10-12 hours fasting required',
    duration: '15-20 minutes',
    sampleType: 'Blood',
    fasting: 'Required (10-12 hours)',
    homeCollection: true,
    reportTime: 'Same day',
    popular: true,
    icon: Activity,
    color: 'from-green-500 to-green-600',
    parameters: ['Fasting Blood Sugar (FBS)', 'Post Prandial Blood Sugar (PPBS)', 'HbA1c'],
    includes: ['Sample collection at home', 'Digital report within 24 hours', 'Diabetologist consultation'],
    whyTest: ['Screen for diabetes', 'Monitor blood sugar control', 'Assess diabetes complications']
  },
  { 
    id: 'vitamin-d',
    name: 'Vitamin D', 
    price: 1100,
    originalPrice: 1600,
    discount: 31,
    category: 'Nutrition',
    description: 'Measures vitamin D levels',
    preparation: 'No special preparation required',
    duration: '15-20 minutes',
    sampleType: 'Blood',
    fasting: 'Not required',
    homeCollection: true,
    reportTime: '2-3 days',
    popular: true,
    icon: Sun,
    color: 'from-yellow-500 to-yellow-600',
    parameters: ['25-Hydroxy Vitamin D (Total)', '25-Hydroxy Vitamin D2', '25-Hydroxy Vitamin D3'],
    includes: ['Sample collection at home', 'Digital report within 72 hours', 'Nutritionist consultation'],
    whyTest: ['Check vitamin D deficiency', 'Assess bone health', 'Evaluate immune function']
  },
  { 
    id: 'covid-19-pcr',
    name: 'COVID-19 RT-PCR', 
    price: 1500,
    originalPrice: 2000,
    discount: 25,
    category: 'Infectious Diseases',
    description: 'Gold standard test for COVID-19 detection',
    preparation: 'No special preparation required',
    duration: '5-10 minutes',
    sampleType: 'Nasal/Throat Swab',
    fasting: 'Not required',
    homeCollection: false,
    reportTime: '24-48 hours',
    popular: true,
    icon: AlertCircle,
    color: 'from-indigo-500 to-indigo-600',
    parameters: ['SARS-CoV-2 RNA detection', 'Viral load assessment'],
    includes: ['Sample collection at center', 'Digital report within 48 hours', 'Travel certificate'],
    whyTest: ['Confirm COVID-19 infection', 'Travel requirements', 'Pre-surgery screening']
  },
];

export default function LabTests() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['all', 'Hematology', 'Cardiology', 'Endocrinology', 'Gastroenterology', 'Nephrology', 'Nutrition', 'Infectious Diseases'];

  const filtered = testCategories.filter((test) => {
    const matchesSearch = !search || test.name.toLowerCase().includes(search.toLowerCase()) || 
                         test.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'discount') return b.discount - a.discount;
    if (sortBy === 'popular') return b.popular - a.popular;
    return 0;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#f0fdf2] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#5DBB63]/20 flex items-center justify-center">
              <FlaskConical className="w-7 h-7 text-[#165028]" />
            </div>
            <h1 className="text-4xl font-bold text-[#165028]">Lab Tests</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Book lab tests with home collection. Get reports delivered digitally within 24-48 hours.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#f0fdf2] flex items-center justify-center">
                <Home className="w-6 h-6 text-[#5DBB63]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827]">Home Collection</h3>
                <p className="text-sm text-gray-500">Sample collection at your doorstep</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-white flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#f0fdf2] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#5DBB63]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827]">Digital Reports</h3>
                <p className="text-sm text-gray-500">Receive reports online</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-white flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#f0fdf2] flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#5DBB63]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827]">24-48 Hrs</h3>
                <p className="text-sm text-gray-500">Quick turnaround time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search lab tests..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#5DBB63] focus:ring-2 focus:ring-[#5DBB63]/20 outline-none"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#5DBB63] focus:ring-2 focus:ring-[#5DBB63]/20 outline-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#5DBB63] focus:ring-2 focus:ring-[#5DBB63]/20 outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Best Discount</option>
            </select>
          </div>

          {/* Active Filters */}
          {(search || selectedCategory !== 'all') && (
            <div className="flex items-center gap-2 flex-wrap">
              {search && (
                <span className="px-3 py-1 bg-[#5DBB63]/10 text-[#165028] rounded-full text-sm">
                  Search: {search}
                  <button
                    onClick={() => setSearch('')}
                    className="ml-2 text-[#165028] hover:text-[#5DBB63]"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-[#5DBB63]/10 text-[#165028] rounded-full text-sm">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 text-[#165028] hover:text-[#5DBB63]"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Test Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sorted.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-[#5DBB63]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Test Header */}
              <div className={`p-4 bg-gradient-to-br ${test.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <test.icon className="w-8 h-8" />
                    {test.popular && (
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{test.name}</h3>
                  <p className="text-white/80 text-sm">{test.category}</p>
                </div>
              </div>

              {/* Test Body */}
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{test.description}</p>

                {/* Test Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <TestTube className="w-4 h-4" />
                    <span>{test.sampleType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{test.reportTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Home className="w-4 h-4" />
                    <span>{test.homeCollection ? 'Home Collection' : 'Center Visit'}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-[#111827]">৳{test.price.toLocaleString()}</span>
                    {test.discount > 0 && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        {test.discount}% OFF
                      </span>
                    )}
                  </div>
                  {test.originalPrice > test.price && (
                    <span className="text-sm text-gray-400 line-through">৳{test.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link to={`/lab-tests/${test.id}/book`}>
                    <Button size="sm" className="w-full bg-[#5DBB63] hover:bg-[#4a9a4f] text-white">
                      Book Test
                    </Button>
                  </Link>
                  <button className="w-full py-2 text-[#5DBB63] text-sm font-medium hover:text-[#165028] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sorted.length === 0 && (
          <div className="text-center py-12">
            <FlaskConical className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No tests found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
                setSortBy('popular');
              }}
              className="px-6 py-2 bg-[#5DBB63] text-white rounded-lg hover:bg-[#4a9a4f]"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Popular Tests Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Popular Tests</h2>
              <p className="text-gray-600">Most frequently booked lab tests</p>
            </div>
            <Link to="/lab-tests" className="text-[#5DBB63] font-medium hover:text-[#165028]">
              View All Tests
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testCategories.filter(test => test.popular).slice(0, 4).map((test) => (
              <div
                key={test.id}
                className="bg-gradient-to-br from-[#5DBB63]/10 to-[#165028]/10 rounded-2xl p-6 border border-[#5DBB63]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${test.color} flex items-center justify-center`}>
                    <test.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827]">{test.name}</h4>
                    <p className="text-sm text-gray-600">{test.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#111827]">৳{test.price.toLocaleString()}</span>
                  <Link to={`/lab-tests/${test.id}/book`}>
                    <Button size="sm" variant="outline" className="border-[#5DBB63] text-[#5DBB63] hover:bg-[#5DBB63] hover:text-white">
                      Book
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
