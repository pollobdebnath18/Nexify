"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-60px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </MotionTag>
  );
}