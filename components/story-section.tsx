"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const storyPoints = [
    {
      title: "The Old World",
      text: "Operating Systems evolved to manage machines. They followed commands, executed tasks, but never truly understood.",
    },
    {
      title: "The Awakening",
      text: "MARCOS was born from a vision—what if an OS could think like the elite commandos it's named after? Adaptive. Intelligent. Unstoppable.",
    },
    {
      title: "The Evolution",
      text: "It doesn't just respond—it anticipates. It doesn't just run—it optimizes. It doesn't just protect—it predicts threats before they emerge.",
    },
    {
      title: "The Future",
      text: "This is more than an operating system. It's a digital guardian, a performance optimizer, and an AI companion that grows with you.",
    },
  ]

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            The Rise of{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MARCOS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey from concept to consciousness—how we built an OS that thinks
          </p>
        </motion.div>

        <div className="space-y-16">
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="flex-shrink-0 relative"
              >
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse-glow" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-2xl">
                  <span className="text-4xl font-bold text-background">{index + 1}</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }} className="flex-1 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {point.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{point.text}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-glow" />
            <p className="relative text-2xl md:text-3xl font-bold text-balance max-w-4xl mx-auto">
              <span className="text-foreground">This is </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                MARCOS
              </span>
              <span className="text-foreground">—where intelligence meets invincibility.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
