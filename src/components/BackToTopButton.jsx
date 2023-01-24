import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    });
  }, []);
  return (
    <div>
      {status && (
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: "1000",
            transition:"all 0.5s"
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
