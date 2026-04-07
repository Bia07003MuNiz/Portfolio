"use client";

import { Button } from "@/src/shared/button";
import { Mail } from "lucide-react";
import { Icons } from "@/src/utils/icons";
import { MeiosContato } from "../modal/meio-contato";
import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Contato() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white">
      <section className="flex flex-col justify-center items-center text-center py-20 px-6">
        <motion.div
          className="flex flex-col items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center w-25 h-25 rounded-full text-blue-400 bg-blue-500/20"
          >
            <Icons.Raio />
          </motion.span>

          <motion.h1
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-7xl font-bold mb-10 mt-6"
          >
            Vamos construir algo
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              incrível
            </span>{" "}
            juntos
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-gray-400 max-w-xl mb-10 text-base sm:text-lg md:text-xl"
          >
            Estou sempre aberta a novas oportunidades e desafios técnicos de alto impacto
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              IconEsquerda={<Mail size={18} />}
            >
              Fale Comigo
            </Button>

            <div className="flex gap-4">
              <button
                onClick={() => window.open("https://github.com/Bia07003MuNiz", "_blank")}
                className="hover:scale-105 w-14 h-14 rounded-2xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition"
              >
                <Icons.Github />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/bianca-muniz-7a664b209/",
                    "_blank"
                  )
                }
                className="hover:scale-105 w-14 h-14 rounded-2xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition"
              >
                <Icons.Linkedin />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <MeiosContato open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
