"use client";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 1 } },
    }}
  >
    {children}
  </motion.div>
);
export default Layout;