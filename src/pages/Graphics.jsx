import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Graphics.css";

const modules = import.meta.glob("../assets/graphics/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const Graphics = () => {
  const [selected, setSelected] = useState(null);
  const total = images.length;

  const close = useCallback(() => setSelected(null), []);
  const next = useCallback(
    () => setSelected((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setSelected((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [selected, close, next, prev]);

  return (
    <section className="graphics-page" id="graphics">
      <h2>Graphics</h2>

      {total === 0 ? (
        <p className="graphics-empty">Graphics are coming soon.</p>
      ) : (
        <div className="graphics-grid">
          {images.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              className="graphics-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelected(i)}
              aria-label={`Open graphic ${i + 1}`}
            >
              <img
                src={src}
                alt={`Graphic design ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            </motion.button>
          ))}
        </div>
      )}

      {createPortal(
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              role="dialog"
              aria-modal="true"
              aria-label="Graphic preview"
            >
              <button
                type="button"
                className="lightbox-btn lightbox-close"
                onClick={close}
                aria-label="Close"
              >
                ✕
              </button>

              {total > 1 && (
                <>
                  <button
                    type="button"
                    className="lightbox-btn lightbox-prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous graphic"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="lightbox-btn lightbox-next"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next graphic"
                  >
                    ›
                  </button>
                </>
              )}

              <motion.img
                key={selected}
                src={images[selected]}
                alt={`Graphic design ${selected + 1}`}
                className="lightbox-img"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              />

              <span className="lightbox-count">
                {selected + 1} / {total}
              </span>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Graphics;
