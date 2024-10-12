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


export function BlurImage() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative max-w-[min(100%,_1200px)]">
        <img
          alt="Majestic picture of a human using Cursor."
          fetchPriority="high"
          width="1800"
          height="900"
          decoding="async"
          className="transition-opacity duration-500 ease-in-out opacity-100 max-w-[min(100%,_1200px)]"
          src="https://anysphere.inc/_next/image?url=%2Fbg1.png&w=1920&q=75"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[hsl(222,21%,12%)] to-transparent z-10"></div>
      </div>
    </div>
  );
}
