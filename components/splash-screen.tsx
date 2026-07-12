"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check if splash screen has already been shown in this session
    const splashShown = sessionStorage.getItem("splashScreenShown")

    if (!splashShown) {
      // Show splash screen
      setShowSplash(true)

      // Hide splash screen after 3 seconds
      const timer = setTimeout(() => {
        setShowSplash(false)
        // Mark splash screen as shown for this session
        sessionStorage.setItem("splashScreenShown", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isClient])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="AM Co-Living PG"
              className="w-64 h-auto max-w-xs md:max-w-sm lg:max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Tagline */}
            <motion.p
              className="text-neutral-600 text-center text-sm md:text-base mt-6 font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              Happiness Like A Home
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
