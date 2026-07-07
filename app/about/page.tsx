"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  const features = [
    "Fully Furnished & Move-in Ready Rooms",
    "High-Speed Wi-Fi",
    "Nutritious Home-Style Meals",
    "24/7 Security & CCTV Surveillance",
    "Daily Housekeeping",
    "Prime Location with Easy Metro Access",
    "Clean & Hygienic Living Spaces",
    "Friendly & Responsive Management",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About AM Co-Living
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-600 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Place That Feels Like Home
          </motion.p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-neutral-600">
                <p className="text-base md:text-lg leading-relaxed">
                  At AM Co-Living, we believe that a great living experience goes beyond just providing a room. We offer safe, comfortable, and fully furnished accommodation designed to make students and working professionals feel at home from the very first day.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Our thoughtfully designed spaces combine modern amenities with a welcoming community, creating the perfect environment to live, work, study, and relax. Whether you're relocating for education or your career, we ensure a hassle-free stay with everything you need under one roof.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/about-pg-building.jpg"
                alt="AM Co-Living modern accommodation building"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 text-center">
              Why Choose AM Co-Living?
            </h2>
            <p className="text-base md:text-lg text-neutral-600 text-center max-w-3xl mx-auto">
              We provide everything you need for a comfortable, safe, and fulfilling living experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="p-6 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-neutral-900 text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-base font-medium text-neutral-900">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              A Community You'll Love
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              More than just a PG, AM Co-Living is a place where friendships grow, opportunities begin, and every resident enjoys a comfortable lifestyle with modern facilities and a supportive environment. We're dedicated to creating a space where you can truly belong.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
