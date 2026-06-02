import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/thavvagnaneswar675@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Thank you for your message! I will get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.01]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Feel free to reach out for opportunities, collaboration, or questions.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-[280px] space-y-6">
            <ToastContainer />
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Get In Touch</h3>
              <p className="text-muted-foreground mt-2">I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            </div>

            <div className="grid gap-4">
              <a 
                href="mailto:thavvagnaneswar675@gmail.com" 
                className="flex items-center gap-4 rounded-xl border border-border/50 hover:border-primary/30 bg-card/40 backdrop-blur-sm p-4 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email Me</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">thavvagnaneswar675@gmail.com</p>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/gnaneswarthavva675/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 rounded-xl border border-border/50 hover:border-primary/30 bg-card/40 backdrop-blur-sm p-4 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <FaLinkedin />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">linkedin.com/in/gnaneswarthavva675</p>
                </div>
              </a>
              <a 
                href="https://github.com/gnaneswar675" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 rounded-xl border border-border/50 hover:border-primary/30 bg-card/40 backdrop-blur-sm p-4 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <FaGithub />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">GitHub</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">github.com/gnaneswar675</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[280px]">
            <form className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-500" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-border/80 bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-border/80 bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded-lg border border-border/80 bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-purple-500 hover:from-primary/95 hover:to-purple-500/95 px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
