import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ambulance, PhoneCall, Droplet, AlertCircle, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/core/Button';

const emergencyServices = [
  { icon: Ambulance, title: 'Ambulance Request', desc: 'Live tracking available', color: 'bg-red-100 text-red-600' },
  { icon: PhoneCall, title: 'Emergency Doctor', desc: '24/7 on-call support', color: 'bg-red-100 text-red-600' },
  { icon: Droplet, title: 'Blood Bank', desc: 'Find donors near you', color: 'bg-red-100 text-red-600' },
];

export default function Emergency() {
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-red-50 to-white py-16 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-[#111827]">Emergency Services</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            24/7 emergency support. Get immediate help when you need it most.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 rounded-2xl bg-red-500 p-8 text-white text-center"
        >
          <Phone className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">Emergency Helpline</h2>
          <p className="text-white/90 mb-4">Call now for immediate assistance</p>
          <a href="tel:999">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-xl px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 999
            </Button>
          </a>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {emergencyServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-red-100 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-[#111827] text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
              <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50 w-full">
                Request
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Ambulance Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 max-w-2xl"
        >
          <h3 className="font-semibold text-[#111827] text-xl mb-6 flex items-center gap-2">
            <Ambulance className="w-6 h-6 text-red-600" />
            Request Ambulance
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter address or enable GPS"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#5DBB63] focus:ring-2 focus:ring-[#5DBB63]/20 outline-none"
                />
              </div>
            </div>
            <Button className="w-full">Send Ambulance Request</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
