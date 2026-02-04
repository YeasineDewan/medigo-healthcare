import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Specialist Doctors', href: '/doctors' },
    { label: 'Video Consultation', href: '/consult' },
    { label: 'Pharmacy', href: '/pharmacy' },
    { label: 'Lab Tests', href: '/lab-tests' },
    { label: 'Health Records', href: '/records' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[#165028] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-[#5DBB63]" />
              </div>
              <span className="font-bold text-2xl text-white">Medigo</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted digital health ecosystem. Connecting patients with doctors, 
              pharmacies, and emergency services for comprehensive care.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@medigo.com" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@medigo.com
              </a>
              <a href="tel:+8801999999999" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +880 1999 999 999
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Medigo Healthcare. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5DBB63] hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
