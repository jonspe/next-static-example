"use client"

import { motion } from "motion/react"

export default function FadeDiv({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {children}
    </motion.div>
  )
}
