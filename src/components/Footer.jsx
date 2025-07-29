export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-200 py-5 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Name or Logo */}
        <div className="text-xl font-semibold text-gray-500">
          Omozojie Lawrence
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-600">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-gray-500"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-gray-500"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-gray-500"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        {/* Back to top button */}
        <div>
          <a
            href="#top"
            className="text-white font-medium hover:underline hover:text-gray-500 text-sm"
          >
            Back to top ↑
          </a>
        </div>
        {/* Copyright */}
      </div>
      <div className="text-sm text-gray-500 text-center mt-10">
        © {year} Omozojie Lawrence. All rights reserved.
      </div>
    </footer>
  );
}
