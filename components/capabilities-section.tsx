"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Network, Gauge, Layers, Sparkles, ShieldCheck } from "lucide-react"

const capabilities = [
  {
    icon: Cpu,
    title: "Neural Processing",
    description: "AI-driven task optimization",
    details: "Predictive resource allocation that learns from your workflow patterns",
  },
  {
    icon: Network,
    title: "Quantum Networking",
    description: "Ultra-low latency communication",
    details: "Seamless connectivity across all devices with military-grade encryption",
  },
  {
    icon: Gauge,
    title: "Real-Time Analytics",
    description: "System health monitoring",
    details: "Instant insights into performance metrics and potential bottlenecks",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Customizable system layers",
    details: "Build your perfect OS by enabling only what you need",
  },
  {
    icon: Sparkles,
    title: "Auto-Optimization",
    description: "Self-healing capabilities",
    details: "Automatically detects and resolves issues before they impact you",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    description: "Multi-layer protection",
    details: "Every process verified, every connection authenticated",
  },
]

export default function CapabilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              Capabilities Beyond Limits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powered by cutting-edge AI and designed for the future of computing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{capability.title}</h3>
                  <p className="text-sm text-primary mb-3 font-semibold">{capability.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.details}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
