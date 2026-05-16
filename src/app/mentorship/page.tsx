import Link from "next/link"
import { Mail, ArrowRight, Check } from "lucide-react"

const mentors = [
  {
    id: "1",
    name: "Shivani Pawar",
    title: "Bioinformatician | Research Mentor & Freelancer | Published Researcher",
    bio: "I work at the intersection of bioinformatics, structural biology, and AI-driven research, helping students confidently learn modern computational biology while assisting researchers with complex scientific analyses and research workflows. My work includes molecular docking, molecular dynamics simulations, omics analysis, protein modeling, and computational drug discovery through practical, research-focused guidance.",
    image: "/about/shivani-image.jpg",
    linkedin: "https://www.linkedin.com/in/shivani-pawar-68248621b",
    email: "shivani.binf@gmail.com",
    expertise: ["Structural Biology", "Molecular Docking", "MD Simulations", "AI in Bioinformatics", "Drug Discovery", "Protein Modeling", "Omics Analysis"],
  },
  {
    id: "2",
    name: "Sagar Tanwar",
    title: "AI & ML Engineer | Technical Consultant | Simulation & Systems Specialist",
    bio: "I help students, researchers, and early-stage teams solve technical problems across simulation workflows, computational tools, and applied software systems. My background spans AI/ML, software engineering, technical infrastructure, and high-performance computing workflows, including simulation environments such as GROMACS. Whether you need mentorship, project guidance, debugging support, workflow optimization, or technical learning support, I focus on practical solutions that actually work.",
    image: "/about/sagar.png",
    linkedin: "https://linkedin.com/in/sagar-tan",
    email: "33.sagartanwar@gmail.com",
    expertise: ["AI/ML", "Software Engineering", "GROMACS", "HPC Workflows", "Technical Infrastructure", "Debugging Support", "Workflow Optimization"],
  },
]

export default function MentorshipPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-accent font-medium text-sm mb-2">Meet Your Mentors</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Guidance for Your Research Journey</h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Learn from experienced professionals who combine academic expertise with hands-on industry experience. Get personalized mentorship tailored to your goals.
          </p>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg border border-border-light overflow-hidden">
                <div className="grid md:grid-cols-3">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  {/* Content */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{mentor.name}</h2>
                    <p className="text-accent font-medium text-sm mb-4">{mentor.title}</p>
                    <p className="text-foreground/70 leading-relaxed mb-6">{mentor.bio}</p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-surface rounded text-sm text-text-muted">{skill}</span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
                      </a>
                      {mentor.email && (
                        <a
                          href={`mailto:${mentor.email}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-foreground text-sm font-medium rounded-md hover:bg-surface-dark transition-colors"
                        >
                          <Mail className="w-4 h-4" /> {mentor.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Whether you need guidance on a research project, technical debugging, or career mentorship — reach out and let&apos;s figure it out together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
