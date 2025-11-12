"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Dacă script-ul există deja, nu-l adăuga din nou
    if (document.getElementById("google-translate-script")) return;

    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.id = "google-translate-script"; // identificator unic
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ro",
          layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
}
