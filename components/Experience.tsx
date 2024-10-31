export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer 1",
      company: "Deskera",
      link: "https://www.deskera.com/",
    },
    {
      role: "Frontend Developer",
      company: "Salad",
      link: "https://www.linkedin.com/search/results/all/?keywords=Salad%20(A%20femtech%20startup)&sid=TJb",
    },
    {
      role: "Software Engineer Intern",
      company: "Aimage (AR/VR)",
      link: "https://www.linkedin.com/company/aimage/about",
    },
  ];

  return (
    <section id="experience" className="my-12">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1E2230] p-4 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div className="flex justify-between items-center flex-row w-full">
              <h3 className="text-lg font-semibold text-gray-200">{exp.role}</h3>
              <h3>
              <a
                href={exp.link}
                className="text-blue-400 hover:text-blue-300 transition duration-200"
              >
                {exp.company}
              </a>
              </h3>
            </div>
            <i className="text-blue-500">{/* Optional icon here */}</i>
          </div>
        ))}
      </div>
    </section>
  );
}
