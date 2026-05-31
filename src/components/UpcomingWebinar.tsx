"use client"

import { useEffect, useRef } from "react"
import { Check, Calendar, Clock, Monitor, Award, Dna, BarChart3, Atom, Workflow } from "lucide-react"

const learnItems = [
  "What is Bioinformatics?",
  "Applications in Modern Biology",
  "Genomics & Proteomics Overview",
  "Structural Bioinformatics",
  "Bioinformatics Databases",
  "Live BLAST Demonstration",
  "Research Applications",
  "Career Opportunities",
  "Interactive Q&A",
]

const attendItems = [
  "Undergraduate Students",
  "Postgraduate Students",
  "PhD Scholars",
  "Researchers",
  "Biotechnology Professionals",
  "Life Science Enthusiasts",
]

export default function UpcomingWebinar() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-8")
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 md:py-16 bg-surface border-y border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={sectionRef}
          className="bg-white rounded-xl p-8 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-block bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4">
                Upcoming Webinar
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Introduction to Bioinformatics for Life Sciences
              </h2>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                Join the first-ever webinar organized by Bioinfo_Shivani and discover how computational approaches are transforming modern biological research.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar className="w-4 h-4 text-accent shrink-0" /> Date: 6 June
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Clock className="w-4 h-4 text-accent shrink-0" /> Time: 7 pm IST
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Monitor className="w-4 h-4 text-accent shrink-0" /> Mode: Online
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Award className="w-4 h-4 text-accent shrink-0" /> Fee: Free
                </div>

              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">What You Will Learn</h3>
              <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4 mb-6 text-foreground/70">
                {learnItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-foreground mb-2">About the Webinar</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                This beginner-friendly webinar is designed for students, researchers, and professionals interested in understanding the fundamentals of bioinformatics and its role in life science research.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-3">Who Should Attend</h3>
              <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4 mb-8 text-foreground/70">
                {attendItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqIZ3hOh9t6MkJw3OezFswYeC_LcdsPSKhWKH5NZP-n63xIg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Register Now
              </a>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <Dna className="w-14 h-14 text-accent mb-5" />
              <Workflow className="w-12 h-12 text-primary mb-5" />
              <Monitor className="w-12 h-12 text-accent mb-5" />
              <BarChart3 className="w-12 h-12 text-primary mb-5" />
              <Atom className="w-12 h-12 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
