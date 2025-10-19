"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const timeline = [
  {
    phase: "Phase 1",
    title: "Genesis",
    year: "2024",
    description:
      "The vision was born—to create an OS that thinks, adapts, and protects like the elite MARCOS commandos.",
    color: "from-primary/50 to-primary",
  },
  {
    phase: "Phase 2",
    title: "Foundation",
    year: "2024 Q2",
    description:
      "Built the core architecture with AI integration at every layer. The kernel learned to predict and optimize.",
    color: "from-secondary/50 to-secondary",
  },
  {
    phase: "Phase 3",
    title: "Evolution",
    year: "2024 Q3",
    description: "Introduced neural networking and real-time adaptation. MARCOS began to understand user intent.",
    color: "from-primary/50 to-primary",
  },
  {
    phase: "Phase 4",
    title: "Ascension",
    year: "2024 Q4",
    description: "Achieved full AI autonomy with zero-trust security. The invincible OS was ready for the world.",
    color: "from-secondary/50 to-secondary",
  },
  {
    phase: "Phase 5",
    title: "The Future",
    year: "2025+",
    description: "Continuous evolution through quantum computing integration and global AI mesh networking.",
    color: "from-primary to-secondary",
  },
]

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              The Evolution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to reality—the journey of creating the world's first truly intelligent OS
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-lg shadow-primary/50 z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-primary">{item.phase}</span>
                        <span className="text-sm text-muted-foreground font-sans">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
