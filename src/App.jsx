import DataImage from "./data";
import {listTools, listProyek} from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="mx-6 animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight font-bold mb-6">Nicholas Matthew Gunawan</h1>
          <span className="text-5xl/tight font-bold mb-6"></span>
          <p className="text-base/loose mb-6 opacity-50"> Passionate in Interactive Multimedia and creating a User Interface 
          design with a focus on enhancing user experience through thoughtful design. Eager to enhance both technical and soft 
          skills through internship opportunities, with the goal of pursuing a successful career.
          </p>
            <div className="flex items-center sm:gap-4 gap-2">
            <a href="./public/assets/CV-NicholasMatthew.pdf" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">
              View CV <i className="ri-download-2-line ri-lg"></i>
            </a>
            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              View Project <i className="ri-arrow-down-fill ri-lg"></i>
            </a>
            </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" loading="lazy" className="w-[500px] mx-6 animate__animated animate__fadeInUp animate__delay-4s
        md:ml-auto mr-6 rounded-lg hover:scale-105 transition-all duration-300" />
      </div>
      
      {/* About */}
      <div className="mt-32 text-4xl font-bold text-center mx-auto" id="about">
        <h1 className="animate-pulse duration-1000" data-aos="fade-up" data-aos-duration="1000">About Me</h1>
      </div>
      <div className="tentang mt-5 py-10 items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* About box */}
            <div className="flex-1 p-7 bg-zinc-800 rounded-lg hover:scale-105 transition-all duration-300" 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <p className="text-base/loose mb-6 text-justify">
                I am a third-year Computer Science undergraduate at Binus University with a strong interest in web development. 
                My main focus is frontend development, where I enjoy creating clean, responsive, and user-friendly interfaces. 
                At the same time, I am also capable of handling backend tasks, which allows me to contribute as a full-stack developer when needed.

                Beyond coding, I value collaboration, clear communication, and continuous learning. I approach every project with humility 
                and curiosity, seeing challenges as opportunities to grow while contributing meaningfully to the team.
              </p>
              <p className="text-base/loose mb-6 text-justify">
                Beyond coding, I value collaboration, clear communication, and continuous learning. I approach every project with humility 
                and curiosity, seeing challenges as opportunities to grow while contributing meaningfully to the team.
              </p>
            </div>

            {/* Picture outside the box (to the right on md+) */}
            <div className="w-full md:w-80 flex-shrink-0 hover:scale-105 transition-all duration-300" data-aos="fade-up" 
            data-aos-duration="1000" data-aos-delay="300">
              <img src={DataImage.AboutImage} alt="About picture" className="w-full rounded-lg shadow-md " />
            </div>  
          </div>
        </div>

        <div className="tools mt-32">
            <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000">Skills & Technologies Used</h1>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">

            {listTools.map(tool => (
              <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md
              hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" 
              data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" loading="lazy" className="w-14 bg-zinc-800 p-1
              group-hover:bg-zinc-900" />
              <h4 className="font-bold">{tool.nama}</h4>
            </div>
            ))}
            </div>
        </div>
      </div>
          
      {/* Project */}
      <div className="proyek mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Featured Project</h1>
        <div className=" opacity-50">
        <p className="text-base/loose text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        These projects highlight my experience in creating functional, responsive, and impactful digital solutions.
        </p>
        </div>


        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 :grid-cols-1 gap-4" >
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md hover:scale-105" data-aos="fade-up" 
              data-aos-duration="1000" data-aos-delay={proyek.dad}>
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" 
                      key={index}>
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"> Visit Website</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/*Certificate*/}
      
      {/* Contact (compact) */}
      <div id="contact" className="kontak mt-32 mb-22" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl mb-4 font-bold text-center">Get In Touch</h1>
        <p className="text-base/loose opacity-50 mb-6 text-center">I'm always open to discussing new projects, creative ideas, or opportunities. Please reach out through any channel below.</p>
        <div className="max-w-xl mx-auto bg-zinc-800 backdrop-blur-md rounded-3xl p-8 text-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div className="flex items-center justify-center gap-6">
            <a href="http://www.linkedin.com/in/nicholas-matthew-gunawan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition">
              <i className="ri-linkedin-box-fill text-2xl text-white"></i>
              <span className="text-sm opacity-70">LinkedIn</span>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicholasmatthew013@gmail.com&su=Let's+Connect!&body=Hi,+I'd+love+to+get+in+touch." className="flex flex-col items-center gap-2 p-4 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition">
              <i className="ri-mail-line text-2xl text-white"></i>
              <span className="text-sm opacity-70">Email</span>
            </a>
            <a href="https://github.com/Oreoo13" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition">
              <i className="ri-github-fill text-2xl text-white"></i>
              <span className="text-sm opacity-70">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mb-42  ">
        <h1><i class="ri-copyright-line"></i> 2025 Nicholas Matthew Gunawan. All rights reserved. </h1>
      </div>

    </>
  )
}

export default App
