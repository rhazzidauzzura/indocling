import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false); // Tambahkan state untuk mencegah hide

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300 && !hasAppeared) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [hasAppeared]); // Tambahkan hasAppeared ke dependency array

  const openWhatsApp = () => {
    window.open("https://wa.me/081310268786", "_blank"); // Ganti dengan nomor WhatsApp Anda
    setHasAppeared(true); // Setelah mengklik, set hasAppeared ke true
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[99]">
        <div
          onClick={openWhatsApp}
          aria-label="chat with us on WhatsApp"
          className="flex flex-col items-center justify-center cursor-pointer rounded-lg bg-green-500 text-black dark:text-white p-4 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
        >
          <FaWhatsapp size={32} color="green" />
          <span className="mt-2 text-sm font-medium">Chat dengan Kami di WhatsApp</span>
        </div>
        {/* <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp mt-3"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
          </div> */}
      </div>
      <div className="fixed bottom-8 left-8 z-[99]">
        {isVisible && (
          <>
            <div
              onClick={scrollToTop}
              aria-label="scroll to top"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp mt-3"
            >
              <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
            </div>
          </>
        )}
      </div>
    </>

  );
}
