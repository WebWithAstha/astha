import { motion } from "framer-motion";

const PageTransition = ({ children, direction }) => {
  const isForward = direction === "left";
  const variants = {
    initial: { x: isForward ? "100%" : "-100%", scale: 1.02 },
    animate: { x: 0, scale: 1 },
    exit: { x: isForward ? "-100%" : "100%", scale: 1.02 }, // exit opposite
  };

  return (
    <motion.main
      className="absolute -z-1 inset-0 w-full h-full"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
