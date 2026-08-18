import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Lightbox({ images, index, setIndex, onClose }) {
  const open = index !== null && index >= 0;

  const next = useCallback(
    (e) => {
      e && e.stopPropagation();
      setIndex((i) => (i + 1) % images.length);
    },
    [images, setIndex]
  );
  const prev = useCallback(
    (e) => {
      e && e.stopPropagation();
      setIndex((i) => (i - 1 + images.length) % images.length);
    },
    [images, setIndex]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-violet-deep/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button onClick={prev} className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 sm:left-8" aria-label="Previous">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <motion.img
            key={index}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-[90vw] rounded object-contain shadow-2xl"
          />

          <button onClick={next} className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 sm:right-8" aria-label="Next">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-sm text-cream/70">
            {String(index + 1).padStart(2, "0")} — {String(images.length).padStart(2, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
