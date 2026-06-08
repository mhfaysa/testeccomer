import { useState } from 'react';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-extrabold">Checkout</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <form className="border border-blue-100 rounded-2xl p-5 bg-white">
          <div className="grid gap-4">
            <input
              className="border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              className="border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Delivery address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>

          <div className="mt-5">
            <div className="font-semibold">Payment Method</div>
            <label className="mt-2 flex items-center gap-2">
              <input
                type="radio"
                checked={form.paymentMethod === 'cod'}
                onChange={() => setForm({ ...form, paymentMethod: 'cod' })}
              />
              Cash on Delivery (COD)
            </label>
          </div>

          <button
            type="button"
            className="mt-6 w-full px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700"
          >
            Place Order
          </button>
        </form>

        <div className="border border-blue-100 rounded-2xl p-5 bg-gradient-to-b from-brand-50 to-white">
          <div className="font-semibold">Order Summary</div>
          <div className="text-sm text-gray-600 mt-2">Cart items will appear here once server cart is wired.</div>
        </div>
      </div>
    </div>
  );
}

