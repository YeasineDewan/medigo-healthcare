import { useState } from 'react';
import { Search, Upload, Filter } from 'lucide-react';
import ProductCard from '../components/features/ProductCard';
import FileUpload from '../components/core/FileUpload';

const categories = ['All', 'Vitamins', 'Pain Relief', 'Digestive', 'Cold & Flu', 'Diabetes', 'Prescription'];
const mockProducts = [
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
    category: 'Digestive',
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
  { 
    id: 5, 
    name: 'Amoxicillin 500mg', 
    genericName: 'Amoxicillin', 
    brand: 'Incepta Pharmaceuticals', 
    price: 180,
    category: 'Prescription',
    inStock: true,
    prescriptionRequired: true,
    rating: 4.4,
    description: 'Antibiotic for bacterial infections'
  },
  { 
    id: 6, 
    name: 'Cetirizine 10mg', 
    genericName: 'Cetirizine HCl', 
    brand: 'Beximco Pharma', 
    price: 65,
    category: 'Cold & Flu',
    inStock: true,
    prescriptionRequired: false,
    rating: 4.2,
    description: 'Relieves allergy symptoms'
  },
  { 
    id: 7, 
    name: 'Ibuprofen 400mg', 
    genericName: 'Ibuprofen', 
    brand: 'Square Pharmaceutical', 
    price: 140,
    category: 'Pain Relief',
    inStock: false,
    prescriptionRequired: false,
    rating: 4.5,
    description: 'Anti-inflammatory pain relief'
  },
  { 
    id: 8, 
    name: 'Calcium + Vitamin D', 
    genericName: 'Calcium Carbonate', 
    brand: 'Incepta Pharmaceuticals', 
    price: 420,
    category: 'Vitamins',
    inStock: true,
    prescriptionRequired: false,
    rating: 4.6,
    description: 'Bone health supplement'
  },
];

export default function Pharmacy() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [bulkPrescriptions, setBulkPrescriptions] = useState([]);

  const filtered = mockProducts.filter((p) => {
    const matchSearch = !search || 
      p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.genericName?.toLowerCase().includes(search.toLowerCase()) ||
      p.brand?.toLowerCase().includes(search.toLowerCase());
    
    const matchCategory = category === 'All' || p.category === category;
    
    return matchSearch && matchCategory;
  });

  const handleBulkPrescriptionSubmit = () => {
    // Handle bulk prescription upload
    console.log('Bulk prescriptions:', bulkPrescriptions);
    setShowBulkUpload(false);
    setBulkPrescriptions([]);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#f0fdf2] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#165028] mb-4">Pharmacy</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Order medicines online with doorstep delivery. Prescription required for certain items.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBulkUpload(true)}
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-xl hover:bg-orange-200 transition-colors flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload Prescriptions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search medicines, brands, or generic names..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#5DBB63] focus:ring-2 focus:ring-[#5DBB63]/20 outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                  category === c ? 'bg-[#165028] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            {filtered.length > 0 
              ? `Found ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`
              : 'No products found'
            }
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>Filtered by: {category === 'All' ? 'All Categories' : category}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearch('');
                setCategory('All');
              }}
              className="px-4 py-2 bg-[#5DBB63] text-white rounded-xl hover:bg-[#4a9a4f] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Bulk Prescription Upload Modal */}
      {showBulkUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
            <h3 className="text-xl font-semibold text-[#111827] mb-2">Upload Multiple Prescriptions</h3>
            <p className="text-gray-600 mb-6">
              Upload multiple prescription images or PDFs for faster processing. We'll review them and contact you for confirmation.
            </p>
            
            <FileUpload
              value={bulkPrescriptions}
              onChange={setBulkPrescriptions}
              accept="image/*,.pdf"
              maxSize={10 * 1024 * 1024}
              multiple={true}
              placeholder="Drop prescription files here or click to browse"
              className="mb-6"
            />
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <h4 className="font-medium text-blue-900 mb-2">How it works:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Upload clear images or PDFs of your prescriptions</li>
                <li>• Our pharmacists will review and verify each prescription</li>
                <li>• We'll contact you for confirmation and payment</li>
                <li>• Free home delivery within 24-48 hours</li>
              </ul>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowBulkUpload(false);
                  setBulkPrescriptions([]);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkPrescriptionSubmit}
                disabled={bulkPrescriptions.length === 0}
                className="flex-1 px-4 py-2 bg-[#5DBB63] text-white rounded-xl hover:bg-[#4a9a4f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Prescriptions ({bulkPrescriptions.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
