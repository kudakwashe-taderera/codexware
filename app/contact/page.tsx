"use client";

import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiSend, FiMail, FiClock, FiGlobe, FiMapPin, FiPhone, FiCheck, FiCode, FiShield, FiTrendingUp, FiMessageSquare, FiUsers, FiChevronRight, FiInstagram, FiGithub, FiCalendar } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    work_email: "",
    company: "",
    phone_number: "",
    project_type: "",
    estimated_budget: "",
    project_timeline: "",
    project_details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init("bzzLdOM7EefMj-IRb");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_acl6hl4',
        'template_0ip5ik9',
        formRef.current!,
        'bzzLdOM7EefMj-IRb'
      );

      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          full_name: "",
          work_email: "",
          company: "",
          phone_number: "",
          project_type: "",
          estimated_budget: "",
          project_timeline: "",
          project_details: "",
        });
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Address",
      content: "hello@codexware.com",
      subtitle: "For general inquiries",
      color: "from-blue-500 to-cyan-500",
      action: "mailto:hello@codexware.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone Support",
      content: "+1 (447) 902-5849",
      subtitle: "Mon-Fri, 9AM-6PM EST",
      color: "from-purple-500 to-pink-500",
      action: "tel:+14479025849"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Response Time",
      content: "< 2 Hours",
      subtitle: "Priority client response",
      color: "from-green-500 to-emerald-500",
      action: null
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Reach",
      content: "24/7 Available",
      subtitle: "Worldwide remote support",
      color: "from-orange-500 to-red-500",
      action: null
    }
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App Development",
    "Enterprise Software",
    "E-commerce Platform",
    "UI/UX Design",
    "DevOps & Infrastructure",
    "Cybersecurity Solution",
    "AI/ML Implementation",
    "Digital Transformation",
    "Custom Software Solution"
  ];


  const timelineOptions = [
    "1-3 Months",
    "3-6 Months",
    "6-9 Months",
    "9-12 Months",
    "12+ Months"
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61586527260424" },
    { icon: <FiInstagram className="w-5 h-5" />, label: "Instagram", url: "https://www.instagram.com/codexware_technologies/" },
    { icon: <FiGithub className="w-5 h-5" />, label: "GitHub", url: "#" },
    { icon: <FiMessageSquare className="w-5 h-5" />, label: "Discord", url: "#" }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {/* Floating elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 100 + i * 40,
              height: 100 + i * 40,
              left: `${(i * 12) % 100}%`,
              top: `${(i * 15) % 100}%`,
              background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '59,130,246' : '139,92,246'}, 0.1), transparent)`,
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              y: [0, (i % 3 === 0 ? 30 : -30), 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Hero Section */}
      <Section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/10 mb-8 shadow-lg"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Elite Technical Partnership
              </span>
              <FiCode className="w-3 h-3 text-cyan-500 animate-pulse" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Let&apos;s Build </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            >
              Partner with the world&apos;s premier development team. Share your vision, and let us engineer 
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-semibold"> exceptional digital solutions</span> that drive real business impact.
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <a
                  href={info.action || undefined}
                  target={info.action ? "_blank" : undefined}
                  rel={info.action ? "noopener noreferrer" : undefined}
                  className={`block h-full p-6 rounded-2xl bg-gradient-to-b ${info.color}/10 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 ${
                    info.action ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default'
                  }`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color}/20 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-xl font-semibold text-white mb-1">{info.content}</p>
                  <p className="text-sm text-white/60">{info.subtitle}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Main Contact Form */}
      <Section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why Partner With Us?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <FiShield className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Enterprise-Grade Security</h4>
                      <p className="text-white/60 text-sm">Bank-level security protocols for all projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <FiTrendingUp className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Proven ROI</h4>
                      <p className="text-white/60 text-sm">Average 3x ROI on technology investments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <FiUsers className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Dedicated Team</h4>
                      <p className="text-white/60 text-sm">Senior developers assigned to every project</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group"
                    >
                      {social.icon}
                      <span className="text-sm text-white/80 group-hover:text-white">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/60 text-sm">Client Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Form Container */}
                <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30" />
                  
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Start Your Project
                  </h2>
                  <p className="text-white/60 mb-8">
                    Provide details about your project and we&apos;ll schedule a technical consultation within 24 hours.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            onFocus={() => setActiveField('full_name')}
                            onBlur={() => setActiveField(null)}
                            required
                            className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'full_name' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all`}
                            placeholder="John Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="work_email"
                          value={formData.work_email}
                          onChange={handleChange}
                          onFocus={() => setActiveField('work_email')}
                          onBlur={() => setActiveField(null)}
                          required
                          className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'work_email' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all`}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setActiveField('company')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'company' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all`}
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          onFocus={() => setActiveField('phone_number')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'phone_number' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Project Type *
                        </label>
                        <select
                          name="project_type"
                          value={formData.project_type}
                          onChange={handleChange}
                          onFocus={() => setActiveField('project_type')}
                          onBlur={() => setActiveField(null)}
                          required
                          className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'project_type' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all appearance-none`}
                        >
                          <option value="" disabled className="bg-gray-900">Select project type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type} className="bg-gray-900">{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Estimated Budget (USD) *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                          <input
                            type="number"
                            name="estimated_budget"
                            value={formData.estimated_budget}
                            onChange={handleChange}
                            onFocus={() => setActiveField('estimated_budget')}
                            onBlur={() => setActiveField(null)}
                            onWheel={(e) => {
                              e.currentTarget.blur();
                            }}
                            required
                            min="0"
                            step="10"
                            className={`w-full pl-8 pr-4 py-3 bg-white/5 border ${activeField === 'estimated_budget' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all`}
                            placeholder="50000"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Project Timeline *
                      </label>
                      <select
                        name="project_timeline"
                        value={formData.project_timeline}
                        onChange={handleChange}
                        onFocus={() => setActiveField('project_timeline')}
                        onBlur={() => setActiveField(null)}
                        required
                        className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'project_timeline' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all appearance-none`}
                      >
                        <option value="" disabled className="bg-gray-900">Select timeline</option>
                        {timelineOptions.map(option => (
                          <option key={option} value={option} className="bg-gray-900">{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="project_details"
                        value={formData.project_details}
                        onChange={handleChange}
                        onFocus={() => setActiveField('project_details')}
                        onBlur={() => setActiveField(null)}
                        required
                        rows={6}
                        className={`w-full px-4 py-3 bg-white/5 border ${activeField === 'project_details' ? 'border-blue-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all resize-none`}
                        placeholder="Describe your project requirements, goals, and any specific technologies you're interested in..."
                      />
                    </div>

                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                        >
                          <div className="flex items-center gap-3">
                            <FiCheck className="w-5 h-5 text-green-500" />
                            <div>
                              <div className="font-semibold text-white">Message Sent Successfully!</div>
                              <div className="text-sm text-white/60">Our technical team will contact you within 2 hours.</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30"
                        >
                          <div className="text-white">
                            There was an error sending your message. Please try again or email us directly.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative w-full px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-500 ${
                        isSubmitting 
                          ? 'bg-gray-700 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25'
                      }`}
                    >
                      <div className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Schedule Technical Consultation</span>
                            <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </button>

                    <p className="text-xs text-white/40 text-center">
                      By submitting this form, you agree to our privacy policy. We respect your data and never share it with third parties.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Schedule Section */}
      <Section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm rounded-3xl p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready for a Technical Deep Dive?
              </h3>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Book a 60-minute strategy session with our lead architect to explore your project&apos;s technical feasibility.
              </p>
              <a
                href="https://calendly.com/codexware/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
              >
                <FiCalendar className="w-5 h-5" />
                Book Discovery Call
                <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}