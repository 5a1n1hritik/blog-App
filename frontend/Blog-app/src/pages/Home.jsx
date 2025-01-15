import React from "react";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EnhancedProjectShowcase from "../components/EnhancedProjectShowcase";

const Home = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform for social media",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to My World.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join me on a journey of creativity, innovation, and meaningful connections in the digital space.
              </p>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-gray-800 transition-colors"
                >
                  See My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
          <main className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center py-12 md:py-20">
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8">
                  Innovating Connections in the Digital World.
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                  From transforming ideas into impactful solutions to connecting people through technology, I focus on delivering results that matter.
                  </p>
                  {/* <div className="flex items-center gap-4">
                    <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-gray-900 transition-colors"
                    >
                      Get started
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center text-gray-900 hover:text-gray-600"
                    >
                      Experience It Live <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div> */}
                </motion.div>

                <div className="mt-12 lg:mt-0 relative">
                  <div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      className="relative"
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <img
                        src="https://etimg.etb2bimg.com/photo/99975100.cms"
                        alt="Presentation"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg"
                      />
                    </motion.div>
                    <motion.div
                      className="relative mt-20"
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <img
                        src="https://miro.medium.com/v2/resize:fit:1024/1*CvcM2chQox1VGJnWQO3acg.png"
                        alt="Working"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg"
                      />
                    </motion.div>
                    <motion.div
                      className="relative -mt-16"
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <img
                        src="https://tsh.io/wp-content/uploads/2020/09/typescript-vs-javascript-comparison_.jpg"
                        alt="Office"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg"
                      />
                    </motion.div>
                    <motion.div
                      className="relative mt-4"
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <img
                        src="https://5.imimg.com/data5/SELLER/Default/2023/7/322900116/XE/OI/SN/107827373/react-js-development-service.jpg"
                        alt="Collaboration"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg"
                      />
                    </motion.div>
                    <motion.div
                      className="relative mt-8"
                      animate={{ y: [0, -30, 0] }}
                      transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s"
                        alt="Team"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Explore My Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-gray-900 hover:text-gray-600"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects2"
          className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Explore my future projects
            </motion.h2>
            <motion.div className="relative h-[600px] md:h-[800px]">
              {projects.map((project, index) => (
                <EnhancedProjectShowcase
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Me
                </motion.h2>
                <p className="text-gray-600 mb-6">
                Welcome to my SainiCodex! I’m Hritik Saini, a Bachelor of Technology student specializing in Computer Science and Engineering, with a passion for solving real-world problems through innovative solutions. Whether it’s building scalable web applications, analyzing complex datasets, or exploring new technologies, I specialize in transforming ideas into impactful projects. Explore my work, and let’s collaborate to create something extraordinary.
                </p>
                <motion.div className="flex space-x-4">
                  <Link
                    href="https://github.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px]"
              >
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-gray-800 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
