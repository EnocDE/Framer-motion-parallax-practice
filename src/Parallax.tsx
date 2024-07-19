import { Children, ReactNode, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

export default function Parallax({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement | null>(null)
  // Obtenemos los children que se le pasan dentro del componente Parallax del componente principal App
  const hero = Children.toArray(children)[0];
  const section = Children.toArray(children)[1];

  // Framer motion
  const {scrollYProgress} = useScroll({target})

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const scale2 = useSpring(useTransform(scrollYProgress, [0, .5], [0, 1]))
  const opacity = useTransform(scrollYProgress, [0, .7], [1, .0])
  
  useMotionValueEvent(scrollYProgress, 'change', (last) => {
    console.log(last);
  })
  
  return (
    <motion.div ref={target}>
      <motion.div
        style={{
          y,
          scale,
          opacity
        }}
      >{hero}</motion.div>
      <motion.div
        style={{
          y: -1,
          scale: scale2
        }}
      >{section}</motion.div>
    </motion.div>
  );
}
