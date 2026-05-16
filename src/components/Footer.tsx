import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="bioinfo//shivani" className="h-10 w-auto" />
              <span className="font-bold text-lg">bioinfo//shivani</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Affordable, accessible mentorship and courses in computational biology and research skills.
              Built by someone who knows what it means to navigate STEM without a roadmap.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 hover:text-accent transition-colors text-sm">Meet Shivani</Link></li>
              <li><Link href="/courses" className="text-white/60 hover:text-accent transition-colors text-sm">Courses</Link></li>
              <li><Link href="/mentorship" className="text-white/60 hover:text-accent transition-colors text-sm">Meet Your Mentors</Link></li>
              <li><Link href="/resources" className="text-white/60 hover:text-accent transition-colors text-sm">Resources</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:shivani.binf@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4" /> shivani.binf@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918625873713" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4" /> +91 8625873713
                </a>
              </li>
              <li>
                <a href="https://github.com/ShivMC" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} bioinfo by shivani. All rights reserved.</p>
          <p className="text-white/40 text-xs">Made with purpose for the research community.</p>
        </div>
      </div>
    </footer>
  )
}
