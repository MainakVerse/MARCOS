"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const architectureLayers = [
  { name: "Boot", description: "Predictive Boot Intelligence", icon: "⚡" },
  { name: "Kernel", description: "Reinforcement Learning Scheduler", icon: "🧠" },
  { name: "System", description: "Self-Healing Manager", icon: "🔧" },
  { name: "User", description: "NLP Shell Interface", icon: "💬" },
  { name: "AI Core", description: "Central Neural Command", icon: "🎯" },
  { name: "Hardware", description: "Adaptive Control Layer", icon: "⚙️" },
]

const moduleData: Record<string, { name: string; description: string }[]> = {
  User: [
    { name: "Voice Interface", description: "Natural language commands" },
    { name: "Gesture Control", description: "AI-powered gesture recognition" },
    { name: "Context Engine", description: "Understands user intent" },
    { name: "Personalization", description: "Adaptive user preferences" },
  ],
  System: [
    { name: "Resource Manager", description: "Intelligent allocation" },
    { name: "Security Layer", description: "Threat prediction" },
    { name: "Network Stack", description: "Adaptive protocols" },
    { name: "File System", description: "Smart organization" },
  ],
  "AI Core": [
    { name: "Neural Engine", description: "Deep learning processor" },
    { name: "Decision Matrix", description: "Real-time optimization" },
    { name: "Pattern Recognition", description: "Behavioral analysis" },
    { name: "Prediction Engine", description: "Anticipatory computing" },
  ],
  Kernel: [
    { name: "Process Scheduler", description: "ML-based prioritization" },
    { name: "Memory Manager", description: "Predictive allocation" },
    { name: "Driver Interface", description: "Adaptive hardware control" },
    { name: "Interrupt Handler", description: "Intelligent routing" },
  ],
}

export default function ArchitectureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clickedLayer, setClickedLayer] = useState<string | null>(null)
  const [cardPositions, setCardPositions] = useState<Record<string, DOMRect>>({})

  useEffect(() => {
    const positions: Record<string, DOMRect> = {}
    architectureLayers.forEach((layer) => {
      const element = document.getElementById(`layer-${layer.name}`)
      if (element) {
        positions[layer.name] = element.getBoundingClientRect()
      }
    })
    setCardPositions(positions)
  }, [isInView])

  useEffect(() => {
    const handleMouseMove = () => {
      if (clickedLayer) {
        setClickedLayer(null)
      }
    }

    if (clickedLayer) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [clickedLayer])

  const handleLayerClick = (layerName: string, event: React.MouseEvent) => {
    event.stopPropagation()
    if (moduleData[layerName]) {
      setClickedLayer(clickedLayer === layerName ? null : layerName)
    }
  }

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
            Click on User, System, AI Core, or Kernel to explore their modules
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="space-y-6">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  id={`layer-${layer.name}`}
                  onClick={(e) => handleLayerClick(layer.name, e)}
                  className={`w-full md:w-2/3 p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 ${
                    hoveredIndex === index ? "shadow-lg shadow-primary/20 scale-105" : ""
                  } ${clickedLayer === layer.name ? "border-primary shadow-xl shadow-primary/30" : ""} ${
                    moduleData[layer.name] ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{layer.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          hoveredIndex === index || clickedLayer === layer.name
                            ? "bg-primary animate-neural-pulse"
                            : "bg-primary/30"
                        }`}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {clickedLayer && moduleData[clickedLayer] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* SVG for connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
                  {moduleData[clickedLayer].map((module, idx) => {
                    const sourceCard = document.getElementById(`layer-${clickedLayer}`)
                    const targetBox = document.getElementById(`module-${clickedLayer}-${idx}`)

                    if (sourceCard && targetBox) {
                      const sourceRect = sourceCard.getBoundingClientRect()
                      const targetRect = targetBox.getBoundingClientRect()
                      const containerRect = ref.current
                        ? (ref.current as HTMLElement).getBoundingClientRect()
                        : { left: 0, top: 0 }

                      const startX = sourceRect.left + sourceRect.width / 2 - containerRect.left
                      const startY = sourceRect.top + sourceRect.height / 2 - containerRect.top
                      const endX = targetRect.left + targetRect.width / 2 - containerRect.left
                      const endY = targetRect.top + targetRect.height / 2 - containerRect.top

                      const midX = (startX + endX) / 2

                      return (
                        <motion.path
                          key={`line-${idx}`}
                          d={`M ${startX} ${startY} Q ${midX} ${startY}, ${midX} ${(startY + endY) / 2} T ${endX} ${endY}`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        />
                      )
                    }
                    return null
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3ABEFF" />
                      <stop offset="100%" stopColor="#A7FFEB" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Module boxes */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3 pr-4 pointer-events-auto">
                  {moduleData[clickedLayer].map((module, idx) => (
                    <motion.div
                      key={`module-${idx}`}
                      id={`module-${clickedLayer}-${idx}`}
                      initial={{ opacity: 0, x: 50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-card/90 backdrop-blur-md border border-primary/50 rounded-lg p-4 shadow-lg shadow-primary/20 min-w-[250px]"
                    >
                      <h4 className="text-lg font-bold text-foreground mb-1">{module.name}</h4>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
