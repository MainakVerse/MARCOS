"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const flowNodes = [
  { name: "AI Core", color: "from-primary to-primary/70" },
  { name: "Kernel", color: "from-secondary to-secondary/70" },
  { name: "System", color: "from-primary/70 to-secondary/70" },
  { name: "User", color: "from-secondary/70 to-primary/70" },
]

export default function FlowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Dynamic System <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-time data flow and communication across all system layers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {flowNodes.map((node, index) => {
              const angle = (index * 360) / flowNodes.length
              const radius = 40
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg shadow-primary/30 animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-background font-bold text-center px-2">{node.name}</span>
                  </div>
                </motion.div>
              )
            })}

            {/* Center node */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-2xl shadow-primary/50 animate-neural-pulse"
            >
              <svg className="w-12 h-12 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>

            {/* Connection lines */}
            {flowNodes.map((_, index) => (
              <motion.div
                key={`line-${index}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.3 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full" style={{ transform: `rotate(${(index * 360) / flowNodes.length}deg)` }}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="10%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="animate-neural-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(58, 190, 255)" />
                      <stop offset="100%" stopColor="rgb(167, 255, 235)" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
