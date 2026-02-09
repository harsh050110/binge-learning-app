import Hero from "../../components/home/Hero";
import WhyBinge from "../../components/home/WhyBinge";
import CoursesPreview from "../Courses/Courses";
import StudentWork from "../../components/home/StudentWork";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-[#2a073f] to-[#3b0a5f] text-white">
      <Hero />
      <WhyBinge />
      <CoursesPreview />
      <StudentWork />
      <Testimonials />
    </main>
  );
};

export default Home;
