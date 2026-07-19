"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

interface Stat {
  number: string
  label: string
}

const stats: Stat[] = [
  {
    number: "500+",
    label: "Happy Guests",
  },
  {
    number: "4+",
    label: "Locations",
  },
  {
    number: "120+",
    label: "Rooms",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <Reveal>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 rounded-3xl p-8 md:p-12 lg:p-16"
            style={{ backgroundColor: "rgb(255, 125, 0)", fontFamily: '"Work Sans", sans-serif' }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.h3
                  className="text-5xl md:text-6xl lg:text-7xl text-white mb-3"
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: '400' }}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg md:text-xl text-white" style={{ fontFamily: '"Geist", sans-serif', fontWeight: '500' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
