"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

const comparisonData = [
  {
    feature: "Learning Capability",
    normal: "Static configuration, no learning",
    ai: "Continuous self-optimization and adaptation",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "Task Scheduling",
    normal: "Fixed priority algorithms",
    ai: "Reinforcement learning-based dynamic scheduling",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "System Recovery",
    normal: "Manual intervention required",
    ai: "Autonomous self-healing and recovery",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "Command Interface",
    normal: "Rigid syntax-based commands",
    ai: "Natural language intent understanding",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "Security Model",
    normal: "Rule-based static policies",
    ai: "Behavioral AI with threat prediction",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "Resource Management",
    normal: "Pre-defined allocation rules",
    ai: "Context-aware intelligent optimization",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "User Experience",
    normal: "One-size-fits-all approach",
    ai: "Personalized adaptive interface",
    normalIcon: false,
    aiIcon: true,
  },
  {
    feature: "Performance",
    normal: "Degrades over time",
    ai: "Improves with usage and learning",
    normalIcon: false,
    aiIcon: true,
  },
]

export default function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            AI OS vs <span className="text-muted-foreground">Normal OS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See why MARCOS represents a paradigm shift in operating systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border">
            {/* Header Row */}
            <div className="grid md:grid-cols-3 gap-4 p-6 bg-muted/30 border-b border-border">
              <div className="font-bold text-lg text-foreground">Feature</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                  <XCircle className="w-5 h-5 text-destructive" />
                  <span className="font-bold text-lg">Normal OS</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 border border-primary">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-bold text-lg text-primary">MARCOS (AI OS)</span>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="grid md:grid-cols-3 gap-4 p-6 border-b border-border/50 last:border-b-0 hover:bg-muted/20 transition-colors"
              >
                <div className="font-semibold text-foreground flex items-center">{item.feature}</div>
                <div className="flex items-center justify-center md:justify-start">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item.normal}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium leading-relaxed">{item.ai}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Card>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MARCOS doesn't just run programs—it{" "}
            <span className="text-primary font-semibold">thinks, learns, and evolves</span> with every interaction.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
