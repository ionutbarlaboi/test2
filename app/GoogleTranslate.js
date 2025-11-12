"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // prevenim adăugarea dublă a scriptului
    if (document.getElementById("google-translate-script")) return;

    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.id = "google-translate-script";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ro",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // bara dropdown, compact
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        display: "flex",
        justifyContent: "center",
        transform: "scale(0.9)",
        transformOrigin: "top center",
      }}
    ></div>
  );
}
