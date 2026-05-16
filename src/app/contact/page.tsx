import Link from "next/link"
import { Mail, Phone, ExternalLink, BookOpen, Users, MessageSquare } from "lucide-react"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeVvNUBPUKBuEtuun52c6Uiq-9FwxXkDg9-S3X3KjrrkXI1lw/viewform?usp=dialog"

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/courses/contact-bio.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-accent font-medium text-sm mb-2">Get in Touch</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Connect</h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Have questions about courses, mentorship, or consulting? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Image + Info */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Logo + Contact Info */}
          <div className="text-center mb-12">
            <img
              src="/logo.png"
              alt="bioinfo//shivani"
              className="h-40 w-auto mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
            <p className="text-text-muted max-w-md mx-auto">Reach out via email, phone, or fill out the inquiry form below.</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:shivani.binf@gmail.com"
              className="flex items-center gap-4 bg-white rounded-lg p-5 border border-border-light hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wider">Email</div>
                <div className="text-sm font-medium text-foreground">shivani.binf@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+918625873713"
              className="flex items-center gap-4 bg-white rounded-lg p-5 border border-border-light hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wider">Phone</div>
                <div className="text-sm font-medium text-foreground">+91 8625873713</div>
              </div>
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-lg p-5 border border-border-light hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wider">Quick Inquiry</div>
                <div className="text-sm font-medium text-foreground">Fill the Form</div>
              </div>
            </a>
          </div>

          {/* Google Form Link */}
          <div className="bg-white rounded-lg border border-border-light p-8 text-center mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-3">Send an Inquiry</h2>
            <p className="text-sm text-text-muted mb-6">Fill out our quick inquiry form and I&apos;ll get back to you within 24-48 hours.</p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-light transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Open Inquiry Form
            </a>
          </div>

          {/* I Can Help With */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 border border-border-light">
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Courses & Training</h3>
              <p className="text-sm text-text-muted">Course enrollment, learning paths, and workshop registration.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-border-light">
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mentorship & Consulting</h3>
              <p className="text-sm text-text-muted">1-on-1 sessions, career guidance, and computational biology consulting.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-border-light">
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Research Collaboration</h3>
              <p className="text-sm text-text-muted">Project partnerships, manuscript support, and institutional training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prefer a Direct Message?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            You can also reach me directly via email or phone for quick questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shivani.binf@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-colors"
            >
              <Mail className="w-4 h-4" /> shivani.binf@gmail.com
            </a>
            <a
              href="tel:+918625873713"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-border-light text-foreground font-semibold rounded-md hover:bg-surface-dark transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 8625873713
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
