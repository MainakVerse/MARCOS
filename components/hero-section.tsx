"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import NeuralBackground from "@/components/neural-background"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralBackground />

      <div className="absolute inset-0 bg-[#0A192F]/85 z-[1]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse-glow" />
            <h1 className="relative text-7xl md:text-9xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-8 tracking-widest font-extrabold bg-foreground">
                MARCOS
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-4xl font-semibold mb-4 text-foreground"
        >
          The Invincible AI Operating System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Born from intelligence. Forged for control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/50"
          >
            Explore the Architecture
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg bg-transparent"
          >
            See the Difference
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
