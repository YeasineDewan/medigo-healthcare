import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Video,
  Pill,
  FlaskConical,
  Ambulance,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  Plus,
} from 'lucide-react';
import DoctorCard from '../components/features/DoctorCard';
import ProductCard from '../components/features/ProductCard';
import { Button } from '../components/core/Button';

const services = [
  { icon: Stethoscope, title: 'Specialist Doctors', desc: 'Book appointments with certified specialists', href: '/doctors', color: 'from-[#5DBB63] to-[#165028]' },
  { icon: Video, title: 'Video Consultation', desc: 'Consult doctors online 24/7', href: '/consult', color: 'from-[#165028] to-[#0f3d1c]' },
  { icon: Pill, title: 'Pharmacy', desc: 'Order medicines with home delivery', href: '/pharmacy', color: 'from-[#5DBB63] to-[#4a9a4f]' },
  { icon: FlaskConical, title: 'Lab Tests', desc: 'Home collection & digital reports', href: '/lab-tests', color: 'from-[#165028] to-[#5DBB63]' },
];

const features = [
  { icon: Shield, title: 'Trusted', desc: 'Verified doctors & pharmacies' },
  { icon: Clock, title: '24/7', desc: 'Emergency support anytime' },
  { icon: Users, title: '2M+', desc: 'Patients served' },
];

const featuredDoctors = [
  { 
    id: 1, 
    name: 'Dr. Ahmed Hassan', 
    specialty: 'Cardiology', 
    rating: 4.9, 
    reviewCount: 234, 
    location: 'Dhaka Medical College Hospital', 
    available: true,
    consultationFee: 1500
  },
  { 
    id: 2, 
    name: 'Dr. Fatima Khan', 
    specialty: 'Pediatrics', 
    rating: 4.8, 
    reviewCount: 189, 
    location: 'Square Hospital', 
    available: true,
    consultationFee: 1200
  },
  { 
    id: 3, 
    name: 'Dr. Rahman Ali', 
    specialty: 'General Medicine', 
    rating: 4.7, 
    reviewCount: 312, 
    location: 'Apollo Hospital', 
    available: false,
    consultationFee: 800
  },
];

const featuredProducts = [
  { 
    id: 1, 
    name: 'Paracetamol 500mg', 
    genericName: 'Acetaminophen', 
    brand: 'Square Pharmaceutical', 
    price: 120, 
    category: 'Pain Relief',
    inStock: true,
    prescriptionRequired: false,
    rating: 4.5,
    description: 'Effective pain and fever relief'
  },
  { 
    id: 2, 
    name: 'Vitamin D3 2000IU', 
    genericName: 'Cholecalciferol', 
    brand: 'Incepta Pharmaceuticals', 
    price: 350, 
    category: 'Vitamins',
    inStock: true,
    prescriptionRequired: false,
    rating: 4.7,
    description: 'Essential for bone health and immunity'
  },
  { 
    id: 3, 
    name: 'Omeprazole 20mg', 
    genericName: 'Omeprazole', 
    brand: 'Beximco Pharma', 
    price: 280, 
    category: 'Digestive Health',
    inStock: true,
    prescriptionRequired: true,
    rating: 4.3,
    description: 'Relieves heartburn and acid reflux'
  },
  { 
    id: 4, 
    name: 'Metformin 500mg', 
    genericName: 'Metformin HCl', 
    brand: 'Square Pharmaceutical', 
    price: 95, 
    category: 'Diabetes',
    inStock: true,
    prescriptionRequired: true,
    rating: 4.6,
    description: 'Manages blood sugar levels'
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf2] via-white to-[#dcfce7]" />
        <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-[#5DBB63]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#165028]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5DBB63]/10 text-[#165028] text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 2M+ patients
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#165028] leading-tight mb-6">
                Your Health,{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5DBB63] to-[#165028]">
                  Our Priority
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Book doctors, order medicines, and access emergency services—all in one place. 
                Medigo brings healthcare to your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/doctors">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Book a Doctor
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/emergency">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-red-500 text-red-600 hover:bg-red-50">
                    <Ambulance className="w-5 h-5 mr-2 inline" />
                    Emergency
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#5DBB63]/20 to-[#165028]/20 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-white/80 shadow-xl flex items-center justify-center">
                  <Stethoscope className="w-32 h-32 text-[#5DBB63]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-[#165028] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored for you
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={service.href}>
                  <div className="group p-6 rounded-2xl border border-gray-100 hover:border-[#5DBB63]/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#111827] text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-[#5DBB63] font-medium mt-3 text-sm group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#165028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl mb-1">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#165028] mb-2">Featured Doctors</h2>
              <p className="text-gray-600">Book appointments with our top specialists</p>
            </div>
            <Link to="/doctors">
              <Button variant="outline">View All</Button>
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDoctors.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <DoctorCard doctor={doc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#165028] mb-2">Featured Products</h2>
              <p className="text-gray-600">Essential medicines and health products delivered to your door</p>
            </div>
            <Link to="/pharmacy">
              <Button variant="outline">View All Products</Button>
            </Link>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group bg-white rounded-2xl border border-gray-100 hover:border-[#5DBB63]/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-square bg-gradient-to-br from-[#f0fdf2] to-[#dcfce7] flex items-center justify-center p-4 relative overflow-hidden">
                    <div className="w-20 h-20 rounded-2xl bg-white/80 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">💊</span>
                    </div>
                    {product.prescriptionRequired && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                        Rx
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-medium">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#111827] text-sm line-clamp-2">{product.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{product.genericName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.rating})</span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#165028] text-lg">
                          ৳{product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500">{product.brand}</span>
                      </div>
                      
                      <button
                        className={`w-full py-2 px-3 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 ${
                          !product.inStock
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : product.prescriptionRequired
                            ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                            : 'bg-[#5DBB63] text-white hover:bg-[#4a9a4f]'
                        }`}
                        disabled={!product.inStock}
                      >
                        <Plus className="w-4 h-4" />
                        {product.prescriptionRequired ? 'Upload Rx' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-gradient-to-r from-[#f0fdf2] to-[#dcfce7] rounded-2xl border border-[#5DBB63]/20"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-[#165028] mb-2">Need a prescription?</h3>
                <p className="text-sm text-gray-600">
                  Consult with our doctors online and get valid prescriptions delivered to your doorstep.
                </p>
              </div>
              <Link to="/consult">
                <Button size="sm">Consult Doctor</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[#5DBB63] to-[#165028] p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Join millions of patients who trust Medigo for their healthcare needs.
            </p>
            <Link to="/doctors">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Book Your First Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
