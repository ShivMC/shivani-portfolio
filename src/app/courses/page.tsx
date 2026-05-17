"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, Wrench, X, Calendar, GraduationCap, BookOpen, Check } from "lucide-react"
import { courses } from "@/data/content"

const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null)

  const filtered = courses.filter((course) => {
    const matchCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchLevel = selectedLevel === "All" || course.level === selectedLevel
    return matchCategory && matchLevel
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-accent font-medium text-sm mb-2">All Courses</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hands-On Training Courses</h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Intensive workshops in bioinformatics, drug discovery, ML, and more. Work at your own pace, save your progress, and return anytime.
          </p>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="bg-surface border-b border-border-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-center">
          <p className="text-sm text-foreground/70">
            These courses are launched in partnership with{" "}
            <a href="https://tibrresearch.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              Tibr Biotech
            </a>
            {" "}and mentored by Shivani V. Pawar.
          </p>
        </div>
      </section>

      {/* Filters & Courses */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="text-sm font-medium text-foreground self-center mr-2">Filter by:</div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground/70 hover:bg-surface-dark"
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="w-px h-6 bg-border self-center mx-1" />
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                  selectedLevel === level
                    ? "bg-accent text-white"
                    : "bg-surface text-foreground/70 hover:bg-surface-dark"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No courses match your filters.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSelectedLevel("All") }}
                className="mt-4 text-primary font-medium hover:text-primary-light"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden border border-border-light hover:shadow-md transition-all group">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                        course.level === "Beginner" ? "bg-green-100 text-green-700" :
                        course.level === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-text-muted uppercase tracking-wider">{course.category}</span>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <Clock className="w-3 h-3" /> {course.duration}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-text-muted line-clamp-2 mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {course.tools.slice(0, 4).map((tool) => (
                        <span key={tool} className="px-2 py-0.5 bg-surface rounded text-xs text-text-muted">{tool}</span>
                      ))}
                      {course.tools.length > 4 && (
                        <span className="px-2 py-0.5 text-xs text-text-muted">+{course.tools.length - 4}</span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors cursor-pointer"
                    >
                      View Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 pt-8 md:pt-16" onClick={() => setSelectedCourse(null)}>
          <div className="relative bg-white rounded-xl max-w-3xl w-full mb-8 overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Hero image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                    selectedCourse.level === "Beginner" ? "bg-green-100 text-green-700" :
                    selectedCourse.level === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {selectedCourse.level}
                  </span>
                  <span className="text-white/80 text-xs">{selectedCourse.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedCourse.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-foreground/70 leading-relaxed mb-6">{selectedCourse.description}</p>

              {/* Quick info */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{selectedCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>{selectedCourse.level}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>{selectedCourse.modules.length} Modules</span>
                </div>
              </div>

              {/* Syllabus */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" /> Course Syllabus
                </h3>
                <div className="space-y-3">
                  {selectedCourse.modules.map((mod, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{mod}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-accent" /> Tools & Software
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-surface rounded text-sm text-text-muted">{tool}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border-light">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-light transition-colors"
                >
                  Enroll Now
                </Link>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-surface text-foreground text-sm font-medium rounded-md hover:bg-surface-dark transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
