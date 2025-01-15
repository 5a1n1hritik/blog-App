import React from "react";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <>
      <div className="bg-gray-50">
        <header className="bg-white shadow-sm sticky top-20 z-10">
          <motion.div
            className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800">
              Hritik Saini 👨‍💻
            </h1>
          </motion.div>
        </header>

        <main className="container mx-auto px-6 lg:px-20 py-28">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <section className="mb-10">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Introduction 🚀
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Welcome to my personal project that I'm working on in my spare
                time, with plans to turn it into something more significant. I'm
                <strong> Hritik Saini</strong>, an experienced{" "}
                <strong>Full Stack Developer</strong> passionate about building
                high-performance apps and exploring new technologies. Currently,
                I'm pursuing a <strong>Bachelor's</strong> in Technology with a
                focus on <strong>Computer Science and Technology</strong> .
              </motion.p>
            </section>

            <section className="mb-10">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Personal Interests 🌟
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                I'm a big fan of Linux-based environments and primarily use
                Manjaro (Arch Linux-based). 🐧 However, I also enjoy exploring
                other distributions, such as Ubuntu, Kali Linux,🐉 and Red Hat,
                as well as working with Windows operating systems. 🪟
              </motion.p>
              <motion.blockquote
                className="bg-gray-100 text-gray-700 border-l-4 border-blue-500 pl-4 py-2 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                "I love what I do, I only do what I love." 💖
              </motion.blockquote>
            </section>

            <section className="mb-10">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Technology Stack 🛠️
              </motion.h2>
              <motion.ul
                className="space-y-3 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <li>
                  <strong>Python:</strong> Known for its versatility in web
                  development, data analysis, and machine learning. 🐍
                </li>
                <li>
                  <strong>JavaScript:</strong> This highlights the key advantage
                  of TypeScript's static typing, leading to more robust and
                  easier-to-maintain codebases. 📝
                </li>
                <li>
                  <strong>TypeScript:</strong> Adds static typing to JavaScript,
                  making the code more maintainable and error-free. 📝
                </li>
              </motion.ul>
            </section>

            <section className="mb-10">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                Web Development Tools 🌐
              </motion.h2>
              <motion.ul
                className="space-y-3 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <li>
                  <strong>React.js:</strong> A JavaScript library for building
                  user interfaces. ⚛️
                </li>
                <li>
                  <strong>Next.js:</strong> A React framework used for
                  server-rendered applications. ⚛️
                </li>
                <li>
                  <strong>Express.js:</strong> Node.js framework for building
                  robust APIs and web applications. 🚀
                </li>
                <li>
                  <strong>Django:</strong> A Python framework used for
                  developing secure and robust web applications. 🎸
                </li>
                <li>
                  <strong>Angular:</strong> A powerful JavaScript framework for
                  building complex and scalable web applications. 📝
                </li>
              </motion.ul>
            </section>

            <section className="mb-10">
              <motion.h2
                className="text-3xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                Other Tools 🧰
              </motion.h2>
              <motion.ul
                className="space-y-3 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <li>
                  <strong>PostgreSQL/MySQL:</strong> Powerful and versatile
                  open-source relational database. 🛢️
                </li>
                <li>
                  <strong>MongoDB:</strong> NoSQL database popular for its
                  flexibility and scalability. 🛢️
                </li>
              </motion.ul>
            </section>

            <section className="mb-10">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                Contact Information 📬
              </motion.h2>
              <div className="flex flex-col space-y-2">
                <motion.a
                  href="mailto:kushagra@example.com"
                  className="flex items-center text-blue-600 hover:underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  <Mail className="w-5 h-5 mr-2" /> sainihritik033@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center text-blue-600 hover:underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                >
                  <Phone className="w-5 h-5 mr-2" /> +91 9024386459
                </motion.a>
                <motion.a
                  href="https://github.com/5a1n1hritik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                >
                  <Github className="w-5 h-5 mr-2" /> GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/hritik-saini-559a7b252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                >
                  <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/hritik-saini-559a7b252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2, duration: 0.5 }}
                >
                  <Instagram className="w-5 h-5 mr-2" /> Instagram
                </motion.a>
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Info;
