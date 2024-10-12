import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#181C25]">
      <div className="relative">
        {/* Hero Section */}
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/background.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-extrabold text-white">
              Abhay Prajapati
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              I enjoy solving complex problems and building efficient, scalable
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto py-8 px-4 text-gray-100">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}