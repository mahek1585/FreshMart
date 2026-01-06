import React from "react";

const Contact = () => {
  return (
    <section id="contact-section" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get in touch
            </h3>

            <div className="space-y-6">
              <ContactItem icon="📍" title="Address">
                123 Market Street, Mumbai, Maharashtra 400001, India
              </ContactItem>

              <ContactItem icon="📞" title="Phone">
                +91 1234567890 <br /> +91 0987654321
              </ContactItem>

              <ContactItem icon="📧" title="Email">
                support@freshmart.com <br /> info@freshmart.com
              </ContactItem>

              <ContactItem icon="⏰" title="Working Hours">
                Monday - Saturday: 8AM - 10PM <br />
                Sunday: 9AM - 9PM
              </ContactItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Small reusable component */
const ContactItem = ({ icon, title, children }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
};

export default Contact;
