import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Unable to send the message. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <main>
          <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                  <form onSubmit={onSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="given-name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                  {result && <p className="mt-4 text-green-600">{result}</p>}
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-blue-500 mr-2" />
                      <span>sainihritik033@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-blue-500 mr-2" />
                      <span>+91 9024386459</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-blue-500 mr-2" />
                      <span>Alwer, Rajasthan, 301001</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-500 hover:text-blue-600">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-blue-500 hover:text-blue-600">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-blue-500 hover:text-blue-600">
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
