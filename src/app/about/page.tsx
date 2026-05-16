import Link from "next/link"
import { Mail, Award, BookOpen, Globe, Code, FlaskConical, ArrowRight, GraduationCap, Users, FileText, Phone, Briefcase, Trophy, MapPin, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-accent font-medium text-sm mb-2">Meet Your Instructor</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shivani V. Pawar</h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Research Team Lead, Computational Bioinformatics Researcher, and Founder of Prostruct.
            University Rank 1 in both B.Sc. and M.Sc. Bioinformatics.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo & Quick Info */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden border border-border-light mb-6">
                  <img
                    src="/about/shivani-image.jpg"
                    alt="Shivani V. Pawar"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg p-5 border border-border-light space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Shivani V. Pawar</h3>
                    <p className="text-sm text-text-muted">Research Team Lead</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <a href="mailto:shivani.binf@gmail.com" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 shrink-0" /> shivani.binf@gmail.com
                    </a>
                    <a href="tel:+918625873713" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 shrink-0" /> +91 8625873713
                    </a>
                    <div className="flex items-center gap-2 text-text-muted">
                      <MapPin className="w-4 h-4 shrink-0" /> India | Open to Remote
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors"
                  >
                    Get in Touch <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bio & Details */}
            <div className="md:col-span-2 space-y-10">
              {/* About */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">About Me</div>
                <h2 className="text-3xl font-bold text-foreground mb-4">My Story</h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    I come from a background where access to STEM opportunities and mentorship was very limited.
                    Much of my journey has involved figuring things out on my own — spending extra time understanding
                    concepts, finding opportunities, and navigating research pathways that could have been much
                    smoother with proper guidance.
                  </p>
                  <p>
                    I&apos;m currently a <strong className="text-foreground">Research Team Lead</strong> in a global collaboration,
                    investigating the functional and regulatory roles of non-coding genomic regions in cancer.
                    I previously worked as a Bioinformatics Analyst at Progenome Life Science Pvt. Ltd. and led
                    multiple collaborative projects through ASBCB involving researchers from the US, Nigeria, Ghana,
                    Kenya, Morocco, and India.
                  </p>
                  <p>
                    I&apos;ve had the privilege of training <strong className="text-foreground">over 5,000 researchers globally</strong>,
                    publishing in Frontiers in Chemistry, and receiving the INSPIRE Fellowship from DST, Govt. of India.
                    I was also called for Ph.D. interviews at IISc Bangalore, IISER Pune, IIT Bombay, IIT Madras, and more.
                  </p>
                  <p>
                    Because of my own experience navigating STEM without a roadmap, it has always been important
                    to me to support others on a similar path. That&apos;s why I&apos;m building this platform — to provide
                    structured, affordable mentorship and courses that I wish I had when I started.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-text-muted mt-1">Researchers Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">6</div>
                    <div className="text-sm text-text-muted mt-1">Countries Collaborated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">4</div>
                    <div className="text-sm text-text-muted mt-1">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2×</div>
                    <div className="text-sm text-text-muted mt-1">University Rank 1</div>
                  </div>
                </div>
              </div>

              {/* Second Photo */}
              <div className="rounded-lg overflow-hidden border border-border-light">
                <img
                  src="/about/shivani4.jpg"
                  alt="Shivani Pawar"
                  className="w-full"
                />
              </div>

              {/* Research Gallery */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Research</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Exploring Life at Every Scale</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img src="/courses/molecular-docking.jpg" alt="Molecular Docking" className="w-full h-40 object-cover rounded-lg" />
                  <img src="/research/cell-microscopy.jpg" alt="Cell Microscopy" className="w-full h-40 object-cover rounded-lg" />
                  <img src="/research/petri-dish.jpg" alt="Petri Dish Culture" className="w-full h-40 object-cover rounded-lg" />
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Education</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Academic Background</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">M.Sc. Bioinformatics</h3>
                        <p className="text-sm text-text-muted">Dr. Babasaheb Ambedkar Marathwada University (BAMU), Deogiri College</p>
                        <p className="text-sm text-text-muted">CGPA: 8.89 | 2021–2023</p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 mt-1">
                          <Trophy className="w-3 h-3" /> University Rank 1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">B.Sc. Bioinformatics</h3>
                        <p className="text-sm text-text-muted">Dr. Babasaheb Ambedkar Marathwada University (BAMU), Deogiri College</p>
                        <p className="text-sm text-text-muted">82.15% | 2019–2021</p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 mt-1">
                          <Trophy className="w-3 h-3" /> University Rank 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Recognition</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Awards & Honours</h2>
                <div className="bg-white rounded-lg border border-border-light divide-y divide-border-light">
                  {[
                    { year: "2025", award: "2nd Place Winner – FAIR Forward Hackathon/Workshop Series (BioDataSage & Partners)" },
                    { year: "2024", award: "2nd Prize in Omics Codeathon April 2024 (research category, NIH & ASBCB)" },
                    { year: "2024", award: "Offer Letter from IISER Bhopal for Integrated Ph.D. program" },
                    { year: "2024", award: "Ph.D. interviews called at: IISc Bangalore, IISER Pune, IIT Bombay, IIT Guwahati, IIT Madras, CSIR IGIB, CSIR IIIM, IIT Indore" },
                    { year: "2024", award: "Provisional INSPIRE Fellowship – Dept. of Science & Technology, Govt. of India" },
                    { year: "2024", award: "Best Paper Award – 7th ICRIMST-2024, KPR Institute of Engineering and Technology, Coimbatore" },
                    { year: "2023", award: "3rd Prize in Omics Codeathon October 2023 (research category, NIH & ASBCB)" },
                    { year: "2023", award: "University Rank 1 – M.Sc. Bioinformatics, BAMU, Aurangabad" },
                    { year: "2022", award: "Bronze Medal for Research Innovation in Medicine and Pharmacy – Inter-university research convention, BAMU" },
                    { year: "2021", award: "University Rank 1 – B.Sc. Bioinformatics, BAMU, Aurangabad" },
                  ].map((item) => (
                    <div key={item.year + item.award} className="p-4 flex items-start gap-3">
                      <Award className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-text-muted font-medium">{item.year}</span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-0.5">{item.award}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Experience</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Work Experience</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Research Team Lead</h3>
                        <p className="text-sm text-text-muted">Global Collaboration (Independent) | Oct 2025 – Present</p>
                        <p className="text-sm text-text-muted mt-2">Leading an international research team investigating the functional and regulatory roles of non-coding genomic regions in cancer.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Research Project Lead</h3>
                        <p className="text-sm text-text-muted">ASBCB | Oct 2023 – April 2025</p>
                        <p className="text-sm text-text-muted mt-2">Led 3 highly collaborative projects involving researchers from the US, Nigeria, Ghana, Kenya, Morocco, and India. Managed 3 different teams and facilitated around 30+ teams as a coordinator. These projects resulted in the submission of 2 publications.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Bioinformatics Analyst</h3>
                        <p className="text-sm text-text-muted">Progenome Life Science Pvt. Ltd. | Dec 2023 – June 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Facilitator – Omics Codeathon</h3>
                        <p className="text-sm text-text-muted">Organized by NIH & ASBCB | Jan 2024 – Present</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Publications</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Published & Under Review</h2>
                <div className="space-y-4">
                  {[
                    { icon: Code, title: "Prostruc: An Open-source Tool for 3D Structure Prediction using Homology Modeling", authors: "Pawar S.V., Banini W.S.K., Shamsuddeen M.M., Jumah T., Dolling N.N., Tiamiyu A. and Awe O.I.", year: "2024", journal: "Frontiers in Chemistry", status: "Published", statusColor: "text-green-600", link: "https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2024.1509407/full" },
                    { icon: FlaskConical, title: "Uncovering Genetic Variations in CAPN10 Gene: An In-silico SNP Analysis", year: "2025", journal: "Frontiers in Genetics", status: "Under Review", statusColor: "text-yellow-600" },
                    { icon: FlaskConical, title: "Investigating molecular connections between natural phytochemicals and Type II Diabetes Mellitus", year: "2024", journal: "Journal of Molecular Structure", status: "Under Submission", statusColor: "text-yellow-600" },
                    { icon: FlaskConical, title: "Reverse Vaccinology Approach towards the prevention of Sars-cov-2 Infections", authors: "Jadhav, M. A., Pawar, S. V., & Deshmukh, G. S.", year: "2023", journal: "International Journal of Scientific Research (IJSR)", status: "Published", statusColor: "text-green-600", link: "https://d1wqtxts1xzle7.cloudfront.net/103202070/reverse_vaccinology_approach_towards_the_prevention_of_sarscov2_infections_June_2023_1682095631_9806664-libre.pdf" },
                  ].map((pub) => {
                    const Icon = pub.icon
                    return (
                      <div key={pub.title} className="bg-white rounded-lg p-5 border border-border-light">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-foreground">{pub.title}</h3>
                            {pub.authors && <p className="text-xs text-text-muted mt-0.5">{pub.authors}</p>}
                            <p className="text-sm text-text-muted mt-1">{pub.journal} | {pub.year}</p>
                          </div>
                        </div>
                        {pub.status && (
                          pub.link ? (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs font-medium ${pub.statusColor} hover:underline`}>
                              <FileText className="w-3 h-3" /> {pub.status}
                            </a>
                          ) : (
                            <span className={`inline-flex items-center gap-1 text-xs font-medium ${pub.statusColor}`}>
                              <FileText className="w-3 h-3" /> {pub.status}
                            </span>
                          )
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Conferences */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Conferences</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Presentations & Events</h2>
                <div className="bg-white rounded-lg border border-border-light divide-y divide-border-light">
                  {[
                    { date: "Nov 2025", event: "2nd Place Winner – FAIR Forward Hackathon/Workshop Series (BioDataSage & Partners)" },
                    { date: "Apr 30, 2025", event: "Lightning talk at JHU Symposium for Epigenome Sciences (Virtual)" },
                    { date: "Apr 14–17, 2025", event: "Research presentation at ISMB - Intelligent Systems for Molecular Biology Conference (ASBCB, Virtual)" },
                    { date: "Feb 26–28, 2025", event: "Research presentation at CADDTS-2025, Jamia Millia Islamia & SPARC India" },
                    { date: "Jan 30–31, 2024", event: "Paper presentation at NMIM&apos;24, PSGR Krishnammal College for Women, Coimbatore" },
                    { date: "Jan 9–11, 2024", event: "Research presentation at ICRIMST-2024, KPR Institute of Engineering and Technology, Coimbatore" },
                    { date: "Mar 31 – Jun 2, 2023", event: "Research presentation at Global Indian Young Scientists Research and Innovation, ICAR, New Delhi" },
                  ].map((conf) => (
                    <div key={conf.date + conf.event} className="p-4 flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-text-muted font-medium">{conf.date}</span>
                        <p className="text-sm text-foreground/80 mt-0.5">{conf.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Expertise</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Technical Skills</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <h3 className="font-semibold text-foreground mb-3">Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Molecular Docking", "MD Simulation", "Protein Structure Prediction", "Homology Modeling", "Machine Learning", "Drug Discovery", "Virtual Screening", "ADMET Prediction", "WGS Analysis", "Variant Calling", "Gene Expression Analysis", "Sequence Alignment", "Reverse Vaccinology", "Immune Simulation"].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 bg-surface rounded text-xs text-text-muted">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-border-light">
                    <h3 className="font-semibold text-foreground mb-3">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {["GROMACS", "AutoDock Vina", "PyMOL", "VMD", "Biopython", "Python", "ESMFold", "SWISS-MODEL", "ProMod3", "Scikit-learn", "TensorFlow", "Galaxy Server", "GATK", "Linux/WSL", "Google Colab", "BLAST"].map((tool) => (
                        <span key={tool} className="px-2.5 py-1 bg-surface rounded text-xs text-text-muted">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Workshops */}
              <div>
                <div className="text-accent font-medium text-sm mb-2">Training</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Workshops & Internships</h2>
                <div className="bg-white rounded-lg border border-border-light divide-y divide-border-light">
                  {[
                    { title: "GIAN Programme – In-Situ Design and Catalytic Dynamics of Nanomaterials", org: "Dept. of Chemistry, Jamia Millia Islamia, MoE, Govt. of India", date: "Apr – May 2025" },
                    { title: "WGCapD Workshop – Geoprocessing using Python", org: "Indian Institute of Remote Sensing (IIRS), ISRO", date: "Jul 2023" },
                    { title: "Omics Codeathon Facilitator", org: "NIH & ASBCB", date: "Jan – Apr 2024" },
                    { title: "Omics Codeathon Facilitator", org: "NIH & ASBCB", date: "Jun 2024 – Present" },
                  ].map((ws) => (
                    <div key={ws.title} className="p-4 flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        <span className="font-medium text-foreground text-sm">{ws.title}</span>
                        <p className="text-xs text-text-muted mt-0.5">{ws.org}</p>
                        <span className="text-xs text-text-muted">{ws.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary rounded-lg p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">Want to Work Together?</h2>
                <p className="text-white/70 mb-6 max-w-lg mx-auto">
                  Whether you need help with a research project, want to enroll in a course, or are looking for
                  computational consulting — I&apos;d love to connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors"
                  >
                    Contact Me <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:shivani.binf@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> shivani.binf@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
