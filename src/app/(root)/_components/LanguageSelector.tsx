
"use client";

import { useCodeEditorStore } from "@/src/store/useCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE_CONFIG } from "../_constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, Lock, Sparkles } from "lucide-react";
import useMounted from "@/src/hooks/useMounted";

type Props = {
  hasAccess: boolean;
};

function LanguageSelector({ hasAccess }: Props) {
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage } = useCodeEditorStore();

  // ✅ SAFE fallback (this FIXES your runtime error)
  const currentLanguageObj =
    LANGUAGE_CONFIG[language] ?? LANGUAGE_CONFIG["c"];

  // ✅ Close dropdown on outside click (only when open)
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLanguageSelect = (langId: string) => {
    if (!hasAccess && langId !== "c") return;
    setLanguage(langId);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          if (!hasAccess && language !== "c") return;
          setIsOpen((prev) => !prev);
        }}
        className={`group relative flex items-center gap-3 px-4 py-2.5
        bg-[#1e1e2e]/80 rounded-lg border border-gray-800/50
        hover:border-gray-700 transition-all duration-200
        ${!hasAccess && language !== "c"
          ? "opacity-50 cursor-not-allowed"
          : ""
        }`}
      >
        {/* Background hover effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5
          rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        />

        {/* Language Icon */}
        <div className="size-6 rounded-md bg-gray-800/50 p-0.5 group-hover:scale-110 transition-transform">
          <Image
            src={currentLanguageObj.logoPath}
            alt="programming language logo"
            width={24}
            height={24}
            className="w-full h-full object-contain relative z-10"
          />
        </div>

        {/* Language Label */}
        <span className="text-gray-200 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentLanguageObj.label}
        </span>

        {/* Arrow */}
        <ChevronDownIcon
          className={`size-4 text-gray-400 transition-transform duration-300
          ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64
            bg-[#1e1e2e]/95 backdrop-blur-xl
            rounded-xl border border-[#313244]
            shadow-2xl py-2 z-50"
          >
            <div className="px-3 pb-2 mb-2 border-b border-gray-800/50">
              <p className="text-xs font-medium text-gray-400">
                Select Language
              </p>
            </div>

            <div className="max-h-[280px] overflow-y-auto">
              {Object.values(LANGUAGE_CONFIG).map((lang, index) => {
                const isLocked = !hasAccess && lang.id !== "c";

                return (
                  <motion.div
                    key={lang.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative px-2"
                  >
                    <button
                      disabled={isLocked}
                      onClick={() => handleLanguageSelect(lang.id)}
                      className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all duration-200
                      ${
                        language === lang.id
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-gray-300"
                      }
                      ${
                        isLocked
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-[#262637]"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`size-8 rounded-lg p-1.5 transition-transform
                        ${
                          language === lang.id
                            ? "bg-blue-500/10"
                            : "bg-gray-800/50"
                        }`}
                      >
                        <Image
                          src={lang.logoPath}
                          alt={`${lang.label} logo`}
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Label */}
                      <span className="flex-1 text-left">
                        {lang.label}
                      </span>

                      {/* Status Icon */}
                      {isLocked ? (
                        <Lock className="w-4 h-4 text-gray-500" />
                      ) : (
                        language === lang.id && (
                          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        )
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSelector;
