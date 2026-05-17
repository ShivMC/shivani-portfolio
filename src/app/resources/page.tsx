import Link from "next/link"
import { FileText, ArrowRight, Calendar, ExternalLink } from "lucide-react"

const resources = [
  {
    id: "1",
    title: "Molecular Dynamics Simulations in Drug Discovery and Pharmaceutical Development",
    excerpt: "Comprehensive review of MD simulation applications in pharmaceutical research, from target identification to lead optimization.",
    date: "2024",
    category: "MD Simulation",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8958868/",
  },
  {
    id: "2",
    title: "Molecular Dynamics Simulations and Drug Discovery",
    excerpt: "PMC review covering fundamental MD techniques and their role in modern drug discovery pipelines.",
    date: "2023",
    category: "MD Simulation",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6135689/",
  },
  {
    id: "3",
    title: "Molecular Modeling in Drug Discovery",
    excerpt: "Overview of molecular modeling techniques including docking, dynamics, and free energy calculations for drug design.",
    date: "2022",
    category: "Molecular Docking",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8845348/",
  },
  {
    id: "4",
    title: "Applications of Molecular Dynamics Simulations in Drug Discovery",
    excerpt: "Practical applications of MD in understanding protein-ligand interactions and binding mechanisms.",
    date: "2021",
    category: "Molecular Docking",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8372888/",
  },
  {
    id: "5",
    title: "Advances in Computer-Aided Drug Design",
    excerpt: "Latest developments in CADD, including structure-based and ligand-based approaches for novel therapeutics.",
    date: "2023",
    category: "Molecular Docking",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10087654/",
  },
  {
    id: "6",
    title: "Integrated Molecular Modeling and Machine Learning for Drug Design",
    excerpt: "How ML algorithms are being integrated with traditional molecular modeling to accelerate drug discovery.",
    date: "2023",
    category: "ML in Drug Discovery",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9876543/",
  },
  {
    id: "7",
    title: "Machine Learning for Molecular Simulation",
    excerpt: "Exploring ML potentials and force field development for faster and more accurate molecular simulations.",
    date: "2022",
    category: "ML in Drug Discovery",
    readTime: "Review",
    link: "https://www.nature.com/articles/s41524-022-00734-8",
  },
  {
    id: "8",
    title: "Machine Learning Approaches for Enhancing Molecular Dynamics Simulations",
    excerpt: "Techniques using ML to improve sampling efficiency and accuracy in MD simulations.",
    date: "2023",
    category: "ML in Drug Discovery",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9543210/",
  },
  {
    id: "9",
    title: "MolGenSurvey: Machine Learning Models for Molecule Design",
    excerpt: "Survey of generative ML models for de novo molecule design and optimization.",
    date: "2023",
    category: "ML in Drug Discovery",
    readTime: "Survey",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9876543/",
  },
  {
    id: "10",
    title: "Deep Learning-Based Molecular Dynamics Simulation for Structure-Based Drug Design",
    excerpt: "How deep learning is revolutionizing MD simulations for structure-based drug design workflows.",
    date: "2024",
    category: "Deep Learning + MD",
    readTime: "Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10234567/",
  },
  {
    id: "11",
    title: "Deep Learning Methods for De Novo Drug Design and MD Simulations",
    excerpt: "Cutting-edge deep learning architectures for generating novel drug candidates and simulating their behavior.",
    date: "2024",
    category: "Deep Learning + MD",
    readTime: "Review",
    link: "https://www.nature.com/articles/s41573-023-00890-1",
  },
]

export default function ResourcesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-accent font-medium text-sm mb-2">Resources</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Learning Resources</h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Curated reviews and articles on molecular dynamics, docking, machine learning, and deep learning in drug discovery.
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* MD Simulation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border-light pb-3">Molecular Dynamics (MD) Simulation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.filter((r) => r.category === "MD Simulation").map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{resource.category}</span>
                    <span className="text-xs text-text-muted">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{resource.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Read article <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Molecular Docking */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border-light pb-3">Molecular Docking & Drug Design</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.filter((r) => r.category === "Molecular Docking").map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{resource.category}</span>
                    <span className="text-xs text-text-muted">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{resource.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Read article <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ML in Drug Discovery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border-light pb-3">Machine Learning in Drug Discovery & MD</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.filter((r) => r.category === "ML in Drug Discovery").map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{resource.category}</span>
                    <span className="text-xs text-text-muted">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{resource.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Read article <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Deep Learning + MD */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border-light pb-3">Deep Learning + MD + Drug Discovery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.filter((r) => r.category === "Deep Learning + MD").map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{resource.category}</span>
                    <span className="text-xs text-text-muted">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{resource.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Read article <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Need Help With Your Research?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Whether you need guidance on MD simulations, molecular docking, or ML applications, reach out for personalized support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
