"use client";

import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LanguageSelector";
import ProblemStatement from "@/components/ProblemStatement";
import { languagePlaceholders } from "@/utils/languageExtentions";
import { useEffect, useState } from "react"

export default function Home() {
  const [language, setLanguage] = useState<string>("python");
  const [code, setCode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`code-${language}`);
      console.log("Initial code:", JSON.stringify(stored));
      return stored ? stored.trim() : languagePlaceholders[language] || "";
    }
    return languagePlaceholders[language] || "";
  });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [output, setOutput] = useState<string>("");

  //ok lmao the issue was solved but i just forgot to clear my localstorage before running it again 
  // Handle language and code updates
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Language changed to:", language);
      const stored = localStorage.getItem(`code-${language}`);
      console.log("Language:", language, "Stored:", JSON.stringify(stored));
      const newCode = stored && stored.trim() !== "" ? stored : languagePlaceholders[language] || "";
      console.log("Setting code to:", JSON.stringify(newCode));
      setCode(newCode);
      // Save to localStorage after updating code
      localStorage.setItem(`code-${language}`, newCode);
    }
  }, [language]);

  // Save code changes to localStorage (excluding language changes)
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Saving code to localStorage:", JSON.stringify(code));
      localStorage.setItem(`code-${language}`, code);
    }
  }, [code]);

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

  const runCode = () => {
    setOutput("Running...");
    setTimeout(() => {
      setOutput(`Placeholder output for ${language}:\nSuccess!`);
    }, 1000);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const resetCode = () => {
    setCode(languagePlaceholders[language] || ""); // Reset to placeholder
  };


  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <main className="min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button 
        onClick={toggleTheme} 
        className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-md" 
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme==="light" ? "Light" : "Dark"}
        </button>

        <div className="flex flex-col md:flex-row h-screen p-4 gap-4">
          
          <div className="md:w-1/3 bg-gray-300 dark:bg-gray-800 p-4 rounded-md overflow-auto">
          <ProblemStatement />
          </div>

          <div className="md:w-2/3 gap-4 flex-col">
            <LanguageSelector selectedLanguage={language} onLanguageChange={setLanguage}/>
            
            <div className="flex-1 p-3">
              <CodeEditor language={language} value={code} onChange={setCode} />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={runCode}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                aria-label="Run code"
              >
                Run Code
              </button>
              <button
              onClick={resetCode}
              className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              aria-label="Reset editor"
              >
                Reset
              </button>
            </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
              <h3 className="font-semibold">Output</h3>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
