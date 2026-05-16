import Link from "next/link"
import { ArrowRight, GraduationCap, FlaskConical, FolderGit, FileText, Check } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/courses/md-simulation.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            bioinfo//shivani
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Bioinformatics & Computational Biology Consulting — mentorship, research support, and training for students and professionals.
          </p>
        </div>
      </section>

      {/* Consulting Overview */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="text-accent font-medium text-sm mb-2">Consulting Services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expert Bioinformatics Support</h2>
            <p className="text-foreground/70 leading-relaxed max-w-3xl">
              Personalized consulting, mentorship, and computational biology assistance for life science students, researchers, and biotech professionals. From molecular docking to machine learning, I provide hands-on guidance to help you succeed.
            </p>
            <Link href="/contact" className="inline-block mt-6 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Student Mentorship */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Student Mentorship & Bioinformatics Guidance</h3>
                  <p className="text-sm text-text-muted leading-relaxed">Personalized one-on-one consulting for UG and PG students in bioinformatics, computational biology, molecular docking, MD simulations, Linux, Python, and AI in biology.</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-foreground">₹500</span>
                <span className="text-text-muted text-sm">per session</span>
                <span className="text-sm text-text-muted ml-2">($10 USD)</span>
              </div>
              <ul className="space-y-1.5 mb-5">
                {["Bioinformatics guidance", "Molecular docking assistance", "Protein structure modelling", "Linux and Python support", "Research project mentoring"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
                Book a Session
              </Link>
            </div>

            {/* Researcher Consulting */}
            <div className="bg-white rounded-lg p-6 border border-primary/30 ring-2 ring-primary/10 hover:shadow-md transition-all">
              <div className="bg-accent text-white text-center text-xs font-medium py-1 -mx-6 -mt-6 mb-4 rounded-t-lg">Most Popular</div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Researcher & Industry Consulting</h3>
                  <p className="text-sm text-text-muted leading-relaxed">Advanced consulting for researchers, PhD scholars, biotech startups, and industry professionals in computational biology and bioinformatics.</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-foreground">₹1,000</span>
                <span className="text-text-muted text-sm">per session</span>
                <span className="text-sm text-text-muted ml-2">($20 USD)</span>
              </div>
              <ul className="space-y-1.5 mb-5">
                {["Molecular docking studies", "MD simulation analysis", "Protein-ligand interaction", "Structural bioinformatics", "Manuscript assistance"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
                Book a Session
              </Link>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                  <FolderGit className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Computational Biology Projects</h3>
                  <p className="text-sm text-text-muted leading-relaxed">Long-term project assistance with continuous mentorship and project development support for students and researchers.</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-foreground">₹5,000</span>
                <span className="text-text-muted text-sm">per month</span>
              </div>
              <ul className="space-y-1.5 mb-5">
                {["Monthly project mentoring", "Workflow development", "Bioinformatics data analysis", "Weekly progress discussions", "Project documentation support"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
                Get Started
              </Link>
            </div>

            {/* Thesis */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Thesis & Publication Assistance</h3>
                  <p className="text-sm text-text-muted leading-relaxed">Professional assistance for thesis preparation, manuscript writing, scientific editing, formatting, and publication guidance.</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-foreground">₹4,000</span>
                <span className="text-text-muted text-sm">per project</span>
              </div>
              <ul className="space-y-1.5 mb-5">
                {["Thesis structuring", "Scientific writing assistance", "Result interpretation", "Figure and data presentation", "Publication guidance"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> APC (Article Processing Charges) / publication charges are not included in any service and must be covered separately by the author.
            </p>
          </div>
        </div>
      </section>

      {/* Research Gallery */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-accent font-medium text-sm mb-2">Research</div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Exploring Life at Every Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/courses/molecular-docking.jpg" alt="Molecular Docking" className="w-full h-48 object-cover rounded-lg" />
            <img src="/research/cell-microscopy.jpg" alt="Cell Microscopy" className="w-full h-48 object-cover rounded-lg" />
            <img src="/research/petri-dish.jpg" alt="Petri Dish Culture" className="w-full h-48 object-cover rounded-lg" />
            <img src="/courses/md-simulation.jpg" alt="MD Simulation" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-accent font-medium text-sm mb-2">Research Services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Computational Biology &amp; Bioinformatics Services</h2>
            <p className="text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              End-to-end computational research support — from analysis and simulation to documentation and publication-ready reports. I handle the computational work so you can focus on your research goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Molecular Docking */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <img src="/courses/molecular-docking.jpg" alt="Molecular Docking" className="w-full h-28 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Molecular Docking</h3>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Protein–ligand docking studies</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Virtual screening of compound libraries</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Binding affinity prediction</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Interaction analysis (H-bonds, hydrophobic, π–π)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />2D &amp; 3D interaction visualization</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Publication-ready docking reports</li>
              </ul>
              <p className="text-xs text-text-muted mt-3">Tools: AutoDock Vina, PyRx, ChimeraX, Discovery Studio</p>
            </div>

            {/* MD Simulation */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <img src="/courses/md-simulation.jpg" alt="MD Simulation" className="w-full h-28 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Molecular Dynamics Simulation</h3>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />System building &amp; topology generation</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Energy minimization &amp; equilibration</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Production MD runs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Trajectory analysis (RMSD, RMSF, Rg, SASA)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Hydrogen bond &amp; MM-PBSA analysis</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Visualization &amp; plotting</li>
              </ul>
              <p className="text-xs text-text-muted mt-3">Tools: GROMACS, VMD, PyMOL</p>
            </div>

            {/* Vaccine Design */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <img src="/courses/reverse-vaccinology.jpg" alt="Vaccine Design" className="w-full h-28 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Immunoinformatics &amp; Vaccine Design</h3>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Multi-epitope vaccine construct design</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />CTL, HTL &amp; B-cell epitope prediction</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Population coverage analysis</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Allergenicity &amp; toxicity prediction</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Immune simulation studies</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />3D structure modeling &amp; validation</li>
              </ul>
            </div>

            {/* Sequence Analysis */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <img src="/courses/bioinformatics-beginners.jpg" alt="Sequence Analysis" className="w-full h-28 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Sequence Analysis &amp; Annotation</h3>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Raw sequence quality check (FastQC)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Adapter trimming &amp; filtering</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />BLAST &amp; homology searches</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Multiple sequence alignment</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Phylogenetic tree construction</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Functional annotation &amp; domain analysis</li>
              </ul>
            </div>

            {/* Protein Modelling */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <img src="/courses/protein-modelling.jpg" alt="Protein Modelling" className="w-full h-28 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Protein Structure Modelling</h3>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Homology modeling (SWISS-MODEL)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />AI-based prediction (AlphaFold, ESMFold)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Model validation (Ramachandran, QMEAN)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Protein–protein docking</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Antibody humanization &amp; design</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Codon optimization</li>
              </ul>
            </div>

            {/* Analysis & Documentation */}
            <div className="bg-white rounded-lg p-6 border border-border-light hover:shadow-md transition-all">
              <img src="/courses/ai-bioinformatics.jpg" alt="Analysis & Documentation" className="w-full h-28 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Analysis &amp; Documentation</h3>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Complete result analysis &amp; interpretation</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Publication-ready figures &amp; tables</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Manuscript writing assistance</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Thesis &amp; report documentation</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Statistical analysis &amp; data visualization</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />Reproducible workflow setup</li>
              </ul>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-foreground mb-2">Custom Pricing</h3>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-2xl mx-auto">
              Fees are customized based on the scope and complexity of your project. Typical range: <strong className="text-foreground">₹3,000 – ₹5,000 INR</strong> for standard analyses. Larger projects such as full MD simulations, multi-epitope vaccine design, or complete docking studies are quoted individually. Contact me with your project details for a personalized quote.
            </p>
            <Link href="/contact" className="inline-block mt-4 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Shivani Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/about/shivani4.jpg"
                alt="Shivani Pawar"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <div className="text-accent font-medium text-sm mb-2">Meet Your Instructor</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shivani V. Pawar</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Research Team Lead, Computational Bioinformatics Researcher, and Founder of Prostruct.
                University Rank 1 in both B.Sc. and M.Sc. Bioinformatics (BAMU). Published in Frontiers in Chemistry and INSPIRE Fellowship awardee (DST, Govt. of India).
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Trained over 5,000 researchers globally across 6 countries. Built Prostruct — an open-source 3D structure prediction tool. Called for Ph.D. interviews at IISc Bangalore, IISER Pune, IIT Bombay, and more.
              </p>
              <Link href="/about" className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you need guidance on a research project, want to learn a new skill, or are looking for mentorship — I&apos;m here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors">
              Contact Me <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mentorship" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors">
              Meet Your Mentors
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
