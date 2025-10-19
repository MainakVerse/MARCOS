"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Brain, Lock } from "lucide-react"

const missions = [
  {
    icon: Shield,
    title: "Unbreakable Defense",
    description:
      "Like the elite MARCOS commandos, our OS stands guard with military-grade security protocols, protecting your digital fortress from any threat.",
  },
  {
    icon: Zap,
    title: "Lightning Execution",
    description:
      "Every operation executed with precision and speed. No lag, no hesitation—just pure, instantaneous performance that adapts to your needs.",
  },
  {
    icon: Brain,
    title: "Intelligent Adaptation",
    description:
      "An AI core that learns, evolves, and anticipates. MARCOS doesn't just respond to commands—it understands your mission and optimizes accordingly.",
  },
  {
    icon: Lock,
    title: "Total Control",
    description:
      "You command the system. From kernel to interface, every layer bends to your will while maintaining perfect harmony and stability.",
  },
]

export default function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To deliver an operating system that embodies the strength, precision, and adaptability of India's most elite
            special forces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => {
            const Icon = mission.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
                    <div className="relative w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
