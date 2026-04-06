import { useState } from "react";
import { MessageCircle, Copy, Check, ExternalLink } from "lucide-react";
import { Icons } from "@/src/utils/icons";
import { Modal } from "@/src/shared/modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MeiosContato({ open, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("carolinebianca280@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-1">Entre em Contato</h2>
        <p className="text-gray-400 text-sm mb-6">Escolha como prefere falar comigo</p>

        <div className="flex flex-col gap-3">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5514998618176"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition group"
          >
            <MessageCircle size={20} className="text-green-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-green-400 font-medium text-sm">WhatsApp</p>
              <p className="text-green-400/50 text-xs">Respondo em minutos</p>
            </div>
            <ExternalLink size={15} className="text-green-400/40 group-hover:text-green-400/70 transition" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bianca-muniz-7a664b209/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition group"
          >
            <Icons.Linkedin size={20} className="text-blue-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-blue-400 font-medium text-sm">LinkedIn</p>
              <p className="text-blue-400/50 text-xs">Veja meu perfil profissional</p>
            </div>
            <ExternalLink size={15} className="text-blue-400/40 group-hover:text-blue-400/70 transition" />
          </a>

          {/* Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition group w-full text-left"
          >
            {copied
              ? <Check size={20} className="text-emerald-400 flex-shrink-0" />
              : <Copy size={20} className="text-zinc-400 flex-shrink-0" />}
            <div className="flex-1">
              <p className={`font-medium text-sm transition ${copied ? "text-emerald-400" : "text-zinc-300"}`}>
                {copied ? "E-mail Copiado !!" : "Copiar E-mail"}
              </p>
              <p className="text-zinc-500 text-xs">carolinebianca280@outlook.com</p>
            </div>
            {copied
              ? <Check size={15} className="text-emerald-400" />
              : <ExternalLink size={15} className="text-zinc-600 group-hover:text-zinc-400 transition" />}
          </button>

        </div>
      </div>
    </Modal>
  );
}