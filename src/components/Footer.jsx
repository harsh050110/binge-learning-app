import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20">
      <div className="max-w-[1470px] mx-auto px-6">

        <div className="flex justify-center -mt-28 mb-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-[#c88a2c] text-white flex items-center justify-center text-xl shadow-lg"
          >
            ↑
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Binge Learning
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Strategic learning and career-focused training helping students
              build real-world skills and professional confidence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-500 mb-4">
              Our Courses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Graphic Design</li>
              <li>3D Design & Animation</li>
              <li>CAE Training</li>
              <li>CAD Course</li>
              <li>Canva & AI Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-500 mb-4">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm">
              <li>📧 bingelearning@gmail.com</li>
              <li>📞 +91 9XXXXXXXXX</li>
            </ul>

<div className="flex gap-4 mt-6">
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-purple-950"
  >
    🐦
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-purple-950"
  >
    📘
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-purple-950"
  >
    📸
  </a>
</div>

          </div>

        </div>


        <div className="border-t border-gray-600 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Binge Learning. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ by Harsh
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
