export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-bold text-gray-900">Click &amp; Buy</div>
          <p className="text-sm text-gray-600 mt-2">
            Blue &amp; white clean UI e-commerce demo.
          </p>
        </div>
        <div>
          <div className="font-semibold">Explore</div>
          <ul className="text-sm text-gray-600 mt-2 space-y-2">
            <li>Home</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Support</div>
          <ul className="text-sm text-gray-600 mt-2 space-y-2">
            <li>Contact</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Click &amp; Buy
      </div>
    </footer>
  );
}

