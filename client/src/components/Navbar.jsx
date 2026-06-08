import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // cart count is stored client-side for now, server cart is handled in CartPage.
    const raw = localStorage.getItem('cartCount');
    setCartCount(raw ? Number(raw) : 0);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-extrabold">
            C
          </div>
          <div>
            <div className="text-sm leading-4 text-gray-900 font-bold">Click &amp; Buy</div>
            <div className="text-xs text-gray-500 -mt-0.5">Fast delivery</div>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 items-center">
          <div className="w-full max-w-2xl relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-blue-100 rounded-xl pl-10 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Search products..."
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm rounded-lg bg-brand-600 text-white hover:bg-brand-700"
              onClick={() => {
                toast.info('Search is implemented in product listing endpoints.');
              }}
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/cart"
            className="relative inline-flex items-center px-3 py-2 rounded-xl border border-blue-100 hover:border-blue-300"
          >
            <ShoppingCartIcon className="w-5 h-5 text-brand-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="hidden sm:inline-flex px-3 py-2 rounded-xl border border-blue-100 hover:border-blue-300 text-sm font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

