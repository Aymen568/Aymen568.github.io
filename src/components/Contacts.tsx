import { useState } from "react";
import { Mail, MapPin, Phone, FileDown } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import emailjs from "emailjs-com";

export default function Contact() {
  const sectionRef = useScrollReveal();

  // State for form inputs and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset error on change
  };

  // Validate form inputs
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    emailjs
      .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Access Service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Access Template ID
          e.target as HTMLFormElement,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Access Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-4"></div>
            <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1LuAJ6u_k10uHa7DqxIiUMun6aMjxJI1M/view?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 mt-6 bg-indigo-600 dark:bg-dark-100 border-2 border-indigo-600 dark:border-accent-primary text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-accent-primary/10 transition-all duration-300 group font-medium"
            >
              <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Download My CV
            </a>
            </div>
        </div>

        {/* Contact Form and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-dark-100 p-8 rounded-xl border border-gray-100 dark:border-accent-primary/20">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg bg-white dark:bg-dark-300 text-gray-900 dark:text-white border px-3 py-2 text-sm ${
                    errors.name ? "border-red-400" : "border-gray-200 dark:border-accent-primary/20"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-accent-primary/50`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg bg-white dark:bg-dark-300 text-gray-900 dark:text-white border px-3 py-2 text-sm ${
                    errors.email ? "border-red-400" : "border-gray-200 dark:border-accent-primary/20"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-accent-primary/50`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mt-1 ml-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`mt-1 block w-full rounded-lg bg-white dark:bg-dark-300 text-gray-900 dark:text-white border px-3 py-2 text-sm ${
                    errors.message ? "border-red-400" : "border-gray-200 dark:border-accent-primary/20"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-accent-primary/50`}
                  placeholder="Your message"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-accent-primary text-white dark:text-dark-300 py-2.5 px-4 rounded-lg font-medium hover:bg-indigo-700 dark:hover:opacity-90 transition-all duration-200 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-indigo-500 dark:text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <a
                  href="mailto:aymen.labidi@supcom.tn"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors text-sm"
                >
                  aymen.labidi@supcom.tn
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-500 dark:text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-500 dark:text-gray-400">+216 99909203</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-500 dark:text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">WhatsApp</h3>
                <a
                  href="https://wa.me/21699909203"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors text-sm"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-indigo-500 dark:text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-500 dark:text-gray-400">Tunis, Tunisia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}