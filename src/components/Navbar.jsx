import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const courses = [
  { name: "Graphic Design", path: "/courses/graphics" },
  { name: "3D Design & Modelling", path: "/courses/3d" },
  { name: "CAD Course", path: "/courses/cad" },
  { name: "CAE Course", path: "/courses/cae" },
  { name: "Physics of Design", path: "/courses/physics" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const linkClass =
    "block text-white/80 hover:text-yellow-500 transition font-medium";

  return (
    <nav className="w-full bg-[#3b0a5f] sticky top-0 z-50">
      {/* Navbar Bar */}
      <div className="max-w-[1470px] w-full h-[80px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Binge Learning Logo"
            className="h-20 w-20 object-contain"
          />
          <span className="text-xl font-bold text-yellow-500">Binge</span>
          <span className="text-xl font-bold text-white">Learning</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* Courses Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-white/80 hover:text-yellow-500 font-medium">
              Courses
            </span>

            <div className="absolute left-0 top-full mt-3 w-56 bg-[#2a073f] rounded-xl shadow-xl
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-200">
              <ul className="py-3">
                {courses.map((course) => (
                  <li key={course.path}>
                    <NavLink
                      to={course.path}
                      className={({ isActive }) =>
                        `block px-5 py-2 text-sm transition ${
                          isActive
                            ? "text-yellow-500"
                            : "text-white/80 hover:text-yellow-400"
                        }`
                      }
                    >
                      {course.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink to="/bl-studio" className={linkClass}>
            BL Studio
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#2a073f] border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4">

            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
              Home
            </NavLink>

            {/* Mobile Courses */}
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex justify-between items-center text-white/80 font-medium"
            >
              Courses
              <span>{coursesOpen ? "−" : "+"}</span>
            </button>

            {coursesOpen && (
              <div className="ml-4 space-y-2">
                {courses.map((course) => (
                  <NavLink
                    key={course.path}
                    to={course.path}
                    onClick={() => {
                      setOpen(false);
                      setCoursesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-sm ${
                        isActive
                          ? "text-yellow-500"
                          : "text-white/70 hover:text-yellow-400"
                      }`
                    }
                  >
                    {course.name}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink to="/bl-studio" onClick={() => setOpen(false)} className={linkClass}>
              BL Studio
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
