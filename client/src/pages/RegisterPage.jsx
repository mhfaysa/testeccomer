import { useState } from 'react';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    toast.info('Register API will be wired next.');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-extrabold">Register</h1>
      <form onSubmit={onSubmit} className="mt-6 border border-blue-100 rounded-2xl p-5">
        <div className="space-y-4">
          <input
            className="w-full border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            className="w-full border border-blue-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button className="mt-5 w-full px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700">
          Create account
        </button>
      </form>
    </div>
  );
}

