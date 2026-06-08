import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product._id}`}
      className="group border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 transition"
    >
      <div className="h-40 bg-gradient-to-b from-brand-50 to-white flex items-center justify-center">
        <div className="text-brand-600 font-bold">{product.title?.slice(0, 12) || 'Product'}</div>
      </div>
      <div className="p-4">
        <div className="font-semibold text-gray-900">{product.title}</div>
        <div className="text-brand-700 font-bold mt-2">${product.price}</div>
        <div className="text-xs text-gray-500 mt-1">{product.rating?.toFixed?.(1) || '4.5'} ⭐</div>
      </div>
    </Link>
  );
}

