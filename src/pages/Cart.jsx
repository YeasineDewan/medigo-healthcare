import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/core/Button';

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
        <div className="w-24 h-24 rounded-full bg-[#f0fdf2] flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-[#5DBB63]" />
        </div>
        <h2 className="text-2xl font-bold text-[#111827] mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add some medicines from our pharmacy</p>
        <Link to="/pharmacy">
          <Button>Browse Pharmacy</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#165028] mb-8">Shopping Cart</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-[#f0fdf2] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💊</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[#111827] truncate">{item.name}</h3>
                <p className="text-[#165028] font-semibold">৳{(item.price || 0).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="font-semibold text-[#165028] w-24 text-right">
                ৳{((item.price || 0) * item.quantity).toLocaleString()}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                aria-label="Remove"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-[#f0fdf2] border border-[#5DBB63]/20">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold text-xl text-[#165028]">৳{total.toLocaleString()}</span>
          </div>
          <Link to="/checkout">
            <Button className="w-full">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
