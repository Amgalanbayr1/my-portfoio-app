'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import RedoAnimText from './redo-text-animation'
import CursorBlinker from './cursor-blinker'

export interface ITextAnimationProps {
  delay: number
  baseText: string
  className?: string // Adding the className prop
}

const TextAnimation = ({
  delay,
  baseText,
  className // Adding the className prop
}: ITextAnimationProps) => {
  const [done, setDone] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  )

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true)
      },
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.span
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      className={`text-[2rem] lg:text-[3rem] h-64 max-w-96 font-extrabold mb-10 text-start ${className}`} // Using className prop
    >
      <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br />
        </>
      )}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </motion.span>
  )
}

export default TextAnimation
