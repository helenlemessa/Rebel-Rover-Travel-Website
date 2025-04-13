import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use environment variables for EmailJS configuration
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use Service ID from .env
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use Template ID from .env
      e.target, // Send the form as target
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use Public Key from .env
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      Swal.fire({
        title: 'Message Sent!',
        text: 'Your message has been successfully sent.',
        icon: 'success',
        confirmButtonColor: '#000',
        confirmButtonText: 'Awesome!',
      });
    })
    .catch((error) => {
      console.log('Error sending email:', error.text);
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#000',
        confirmButtonText: 'Retry',
      });
    });
    

    // Reset the form after submission
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      name: 'Lhoksemawe, Aceh',
      phone: '+62 6943 6956',
      email: 'contact@domain.com',
      location: 'Jl. Darussalam Hagu selatan',
    },
    // Add more contacts if needed
  ];

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 max-w-full md:max-w-md mx-auto p-6 bg-white rounded-md shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Get in Touch Section */}
        <div className="flex-1 md:ml-10 md:mx-0 mx-auto">
          <h2 className="text-3xl font-extrabold font-poppins mb-4 md:mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-6 md:mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto amet iure optio magnam, illo eius error
            tenetur, voluptates facilis necessitatibus architecto quasi beatae. Praesentium qui quaerat vitae modi earum
            harum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col p-4 md:p-6 space-y-4 bg-gray-100 rounded-md">
                <div>
                  <span className="text-xl text-gray-800 font-sans">{item.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-black-500 text-2xl" />
                  <span className="text-lg text-gray-800">{item.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-black-500 text-2xl" />
                  <span className="text-lg text-gray-800">{item.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-black-500 text-2xl" />
                  <span className="text-lg text-gray-800">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
