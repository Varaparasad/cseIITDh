import { useCallback } from "react";

export default function BackToTopButton({ to }) {
  // Scroll to the top or to a specific element by id
  const handleBackToTop = useCallback(() => {
    if (to) {
      const el = document.getElementById(to);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [to]);

  return (
    <div className="text-center mt-10">
      <button
        type="button"
        onClick={handleBackToTop}
        className="inline-block cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Back to Top
      </button>
    </div>
  );
}
