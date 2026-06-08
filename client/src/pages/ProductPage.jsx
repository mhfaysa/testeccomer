import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data.data);
      } catch (e) {
        toast.error('Failed to load product');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const addToCart = () => {
    const raw = localStorage.getItem('cartCount');
    const curr = raw ? Number(raw) : 0;
    localStorage.setItem('cartCount', String(curr + 1));
    toast.success('Added to cart');
  };

  if (loading) return <div className="max-w-7xl mx-auto px-4 py-10">Loading...</div>;
  if (!product) return <div className="max-w-7xl mx-auto px-4 py-10">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-b from-brand-50 to-white h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-500">Image placeholder</div>
            <div className="font-bold text-brand-600 mt-2">{product.title}</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="text-yellow-500">{'★'.repeat(5)}</div>
            <div className="text-sm text-gray-600">{product.rating?.toFixed?.(1) || 4.5}</div>
          </div>
          <h1 className="text-3xl font-extrabold mt-3">{product.title}</h1>
          <div className="text-2xl font-bold text-brand-700 mt-4">${product.price}</div>

          <div className="mt-6 text-gray-600">
            {product.description || 'No description available.'}
          </div>

          <button
            onClick={addToCart}
            className="mt-8 w-full md:w-auto px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

