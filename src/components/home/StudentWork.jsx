import work1 from "../../assets/work/Asset1.jpg";
import work2 from "../../assets/work/Asset2.jpg";
import work3 from "../../assets/work/Asset3.jpg";
import work4 from "../../assets/work/Asset4.jpg";
import work5 from "../../assets/work/Asset5.jpg";

const worksRow1 = [work1, work2, work3];
const worksRow2 = [work4, work5, work1];

const StudentWork = () => {
  return (
    <section className="py-24 overflow-hidden bg-[#4b136f]">
      <div className="max-w-[1470px] mx-auto px-6">
        
        <h2 className="text-center text-yellow-500 text-3xl font-bold mb-16">
          Student Work
        </h2>

        {/* Row 1 */}
        <div className="relative w-full overflow-hidden mb-10">
          <div className="flex gap-10 animate-marquee">
            {[...worksRow1, ...worksRow1].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 min-w-[220px] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="Student Work"
                  className="h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-marquee-reverse">
            {[...worksRow2, ...worksRow2].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 min-w-[220px] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="Student Work"
                  className="h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentWork;
