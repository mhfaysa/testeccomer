import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data.data || []);
      } catch (e) {
        // keep UI stable
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-brand-50 to-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-sm text-brand-700">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              Shop smart. Save more.
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
              Click &amp; Buy — clean deals in one place
            </h1>
            <p className="text-gray-600 mt-4">
              Explore trending products, fast checkout, and modern cart flow.
            </p>
            <div className="flex gap-3 mt-7">
              <Link
                to="#"
                className="px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700"
              >
                Shop Now
              </Link>
              <Link
                to="#"
                className="px-5 py-3 rounded-xl border border-blue-200 text-gray-800 font-semibold hover:border-blue-300"
              >
                View Categories
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-100 rounded-3xl blur-2xl" />
            <div className="relative bg-white border border-blue-100 rounded-3xl p-6">
              <div className="grid grid-cols-3 gap-3">
                {['Mobiles', 'Fashion', 'Electronics'].map((t) => (
                  <div key={t} className="border border-blue-100 rounded-2xl p-3">
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="text-xs text-gray-500 mt-1">Top picks</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-sm text-gray-600">
                Responsive layout, search, filters, cart and checkout.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <p className="text-sm text-gray-600 mt-1">Popular picks updated frequently.</p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {loading ? (
            <div className="sm:col-span-2 lg:col-span-4 text-center text-gray-500">Loading...</div>
          ) : (
            products.map((p) => (
              <Link
                key={p._id}
                to={`/products/${p._id}`}
                className="group border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 transition"
              >
                <div className="h-40 bg-gradient-to-b from-brand-50 to-white flex items-center justify-center">
                  <div className="text-brand-600 font-bold">{p.title?.slice(0, 12) || 'Product'}</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-gray-900">{p.title}</div>
                  <div className="text-brand-700 font-bold mt-2">${p.price}</div>
                  <div className="text-xs text-gray-500 mt-1">{p.rating?.toFixed?.(1) || '4.5'} ⭐</div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

