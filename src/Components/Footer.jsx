import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 w-full">
      <div className="w-full px-6 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Hero IO</h2>
            <p className="text-sm leading-relaxed max-w-sm mx-auto">
              Discover, explore and install the best apps in one place. Built
              with performance, simplicity, and user experience in mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 text-center"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="flex flex-col gap-3 items-center">
              <li className="hover:text-white hover:tracking-wide transition-all duration-300 cursor-pointer">
                Home
              </li>
              <li className="hover:text-white hover:tracking-wide transition-all duration-300 cursor-pointer">
                Apps
              </li>
              <li className="hover:text-white hover:tracking-wide transition-all duration-300 cursor-pointer">
                Installation
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>

            <div className="flex justify-center gap-6 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-sm tracking-wide"
        >
          © {new Date().getFullYear()} Hero IO. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
