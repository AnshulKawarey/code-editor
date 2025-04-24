"use client";

import { useEffect, useState } from "react"

export default function Home() {
  const [language, set] = useState<string>("python");
  const [code, setCode] = useState<string>(()=>{
    if (typeof window !== "undefined") {
      return localStorage.getItem(`code-${language}`) || "";
    }
    return "";
  });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [output, setOutput] = useState<string>("");


  useEffect(() => {
    if(typeof window!=="undefined"){
      localStorage.setItem(`code-${language}`, code);
    }
  }, [code, language]);

  useEffect(() =>{
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme as "light" | "dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark"); //initialise with dark mode
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme); //save theme to local storage
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggling theme from", theme); // Debug log
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button 
        onClick={toggleTheme} 
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-md" 
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme==="light" ? "Light" : "Dark"}
        </button>
      </main>

    </div>
  )
}
