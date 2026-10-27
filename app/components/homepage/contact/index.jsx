"use client";

import { useState } from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { toast } from "react-toastify";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck, FiArrowUpRight } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopiedEmail(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      toast.info(`Email: ${personalData.email}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message. Please email directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Network issue. Please email simon.dev.me@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-4 shadow-sm dark:shadow-none">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Have an interesting problem to solve?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
              I&apos;m open to connecting with thoughtful teams, founders, and people building useful products. Whether you&apos;re looking for a full-stack engineer, AI tooling expertise, or want to collaborate on high-impact software, let&apos;s talk.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 mb-8">
              {/* Email with Copy Action */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 flex items-center justify-between shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-surface-base border border-slate-200 dark:border-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <FiMail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-surface-base hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <FiCheck size={14} className="text-emerald-600 dark:text-emerald-400" /> : <FiCopy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 flex items-center gap-3 shadow-sm dark:shadow-none">
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-surface-base border border-slate-200 dark:border-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FiPhone size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 flex items-center gap-3 shadow-sm dark:shadow-none">
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-surface-base border border-slate-200 dark:border-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Location &amp; Availability
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    Kano, Nigeria · Open to Global Remote &amp; Relocation
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-white dark:bg-surface-card hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
              >
                <BsGithub size={16} />
                <span>GitHub Profile</span>
                <FiArrowUpRight size={12} className="text-slate-400 dark:text-slate-500" />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-white dark:bg-surface-card hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
              >
                <BsLinkedin size={16} />
                <span>LinkedIn Profile</span>
                <FiArrowUpRight size={12} className="text-slate-400 dark:text-slate-500" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the form below or email me directly at{" "}
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {personalData.email}
                </a>
                .
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Name <span className="text-indigo-600 dark:text-indigo-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ada Lovelace"
                    className="w-full rounded-xl bg-slate-50 dark:bg-surface-base border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-surface-base transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Email <span className="text-indigo-600 dark:text-indigo-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="ada@example.com"
                    className="w-full rounded-xl bg-slate-50 dark:bg-surface-base border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-surface-base transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Message <span className="text-indigo-600 dark:text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    className="w-full rounded-xl bg-slate-50 dark:bg-surface-base border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-surface-base transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/25"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}