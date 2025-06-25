import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Contact Form Section */}
        <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;