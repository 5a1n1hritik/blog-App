import React, { useState } from "react";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Welcome to My Personal Blog
          </h1>
          <p className="text-lg text-center mb-6">
            Exploring ideas, sharing experiences, and learning together.
          </p>
          <div className="flex justify-center">
            <a
              href="/blog"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              Read Latest Posts
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <header className="bg-white shadow-sm sticky top-16 z-10">
          <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              Hritik Saini 👨‍💻
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-6 lg:px-20 py-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Introduction 🚀</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to my personal project that I'm working on in my spare time, with plans to turn it into something more significant. I'm<strong> Hritik Saini</strong>, an experienced <strong>Full Stack Developer</strong> passionate about building high-performance apps and exploring new technologies. Currently, I'm pursuing a <strong>Bachelor's</strong> in Technology with a focus on <strong>Computer Science and Technology</strong> .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Personal Interests 🌟</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a big fan of Linux-based environments and primarily use Manjaro (Arch
                Linux-based). 🐧 However, I also enjoy exploring other distributions,
                such as Ubuntu, Kali Linux,🐉 and Red Hat, as well as working with
                Windows operating systems. 🪟
              </p>
              <blockquote className="bg-gray-100 text-gray-700 border-l-4 border-blue-500 pl-4 py-2 italic">
                "I love what I do, I only do what I love." 💖
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Technology Stack 🛠️</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Python:</strong> Known for its versatility in web
                  development, data analysis, and machine learning. 🐍
                </li>
                <li>
                  <strong>JavaScript:</strong> This highlights the key advantage of TypeScript's static typing, leading to more robust and easier-to-maintain codebases. 📝
                </li>
                <li>
                  <strong>TypeScript:</strong> Adds static typing to JavaScript,
                  making the code more maintainable and error-free. 📝
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Web Development Tools 🌐
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>React.js:</strong> A JavaScript library for building user interfaces. ⚛️
                </li>
                <li>
                  <strong>Next.js:</strong> A React framework used for
                  server-rendered applications. ⚛️
                </li>
                <li>
                  <strong>Express.js:</strong> Node.js framework for building robust APIs and web applications. 🚀
                </li>
                <li>
                  <strong>Django:</strong> A Python framework used for
                  developing secure and robust web applications. 🎸
                </li>
                <li>
                  <strong>Angular:</strong> A powerful JavaScript framework for building complex and scalable web applications. 📝
                </li>
              </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-4">Other Tools 🧰</h2>
                <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>PostgreSQL/MySQL:</strong> Powerful and versatile open-source relational database. 🛢️
                </li>
                <li>
                  <strong>MongoDB:</strong> NoSQL database popular for its flexibility and scalability. 🛢️
                </li>
                </ul>
              </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Contact Information 📬
              </h2>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:kushagra@example.com"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Mail className="w-5 h-5 mr-2" /> sainihritik033@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Phone className="w-5 h-5 mr-2" /> +91 9024386459
                </a>
                <a
                  href="https://github.com/5a1n1hritik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Github className="w-5 h-5 mr-2" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/hritik-saini-559a7b252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                </a>
                <a
                  href="https://linkedin.com/in/hritik-saini-559a7b252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Instagram className="w-5 h-5 mr-2" /> Instagram
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
