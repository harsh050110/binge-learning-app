import { useRef } from "react";
import { Link } from "react-router-dom";

const courses = [
  { title: "Graphics Design", img: "/course1.jpg", path: "/courses/graphics" },
  { title: "3D Design & Character Modelling", img: "/course2.jpg", path: "/courses/3d" },
  { title: "CAE Course", img: "/course3.jpg", path: "/courses/cae" },
  { title: "Physics of Design", img: "/course4.jpg", path: "/courses/physics" },
  { title: "CAD Course", img: "/course5.jpg", path: "/courses/cad" },
];

const CoursesPreview = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#4b136f]">
      <div className="max-w-[1470px] mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-gray-400">
            COURSES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Building <span className="text-yellow-500">careers together</span>
          </h2>
        </div>

        <div className="relative">

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full bg-black shadow flex items-center justify-center
              text-xl hover:bg-black-100"
          >
            ‹
          </button>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth px-16 no-scrollbar"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="min-w-[320px] bg-white rounded-xl shadow-lg
                  hover:shadow-xl transition"
              >
               
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />

                <div className="p-6">
                  <h3 className="font-semibold text-lg  text-black mb-4">
                    {course.title}
                  </h3>

                  <Link
                    to={course.path}
                    className="text-yellow-500 font-medium inline-flex items-center gap-2"
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full bg-black shadow flex items-center justify-center
              text-xl hover:bg-black-100"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
};

export default CoursesPreview;
