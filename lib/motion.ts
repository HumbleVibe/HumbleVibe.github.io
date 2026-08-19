export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.35 } }
}

export const tilt = (max = 8) => ({
  whileHover: { rotateX: -max/4, rotateY: max/2, transition: { type: 'spring', stiffness: 200, damping: 18 } },
  whileTap: { rotateX: 0, rotateY: 0 }
})
