import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    console.log('Form Submitted:', form);
  };

  // Contact Information with 4 identical entries
  const contactInfo = [
    {
      name: 'Lhoksemawe, Aceh',
      phone: '+62 6943 6956',
      email: 'contact@domain.com',
      location: 'Jl. Darussalam Hagu selatan',
    },
    {
      name: 'Lhoksemawe, Aceh',
      phone: '+62 6943 6956',
      email: 'contact@domain.com',
      location: 'Jl. Darussalam Hagu selatan',
    },
    {
      name: 'Lhoksemawe, Aceh',
      phone: '+62 6943 6956',
      email: 'contact@domain.com',
      location: 'Jl. Darussalam Hagu selatan',
    },
    {
      name: 'Lhoksemawe, Aceh',
      phone: '+62 6943 6956',
      email: 'contact@domain.com',
      location: 'Jl. Darussalam Hagu selatan',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-8">
      {/* Main container for Get in Touch and Form */}
      <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl mx-auto space-x-8">
        {/* Contact Form on the Left */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 max-w-md mx-auto p-6 bg-white rounded-md shadow-md mr-15 space-y-4"
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

        {/* Get in Touch Section on the Right */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold font-poppins mb-8 mt-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto amet iure optio magnam, illo eius error
            tenetur, voluptates facilis necessitatibus architecto quasi beatae. Praesentium qui quaerat vitae modi earum
            harum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Loop over contactInfo array */}
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col p-6 space-y-4">
                <div> <span className="text-xl  text-gray-800 font-sans">{item.name}</span></div>
                <div className="flex items-center space-x-3">
                 
                  <FaPhoneAlt className=" text-black-500 text-2xl" />
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