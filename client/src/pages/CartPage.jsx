import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Minimal cart placeholder. Server-side cart API will be integrated next.
    setCart([]);
  }, []);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-extrabold">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="mt-6 text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="mt-6">
          {/* full cart UI will be added when server cart exists */}
        </div>
      )}
      <div className="mt-8 border-t border-blue-100 pt-6 flex items-center justify-between">
        <div className="text-gray-600">Total</div>
        <div className="text-2xl font-bold">${total}</div>
      </div>

      <div className="mt-6">
        <button
          disabled={cart.length === 0}
          className="w-full md:w-auto px-8 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 disabled:opacity-50"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

