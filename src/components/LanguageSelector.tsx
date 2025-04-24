"use client";

import React from "react";

interface LanguageSelectorProps {
    selectedLanguage : string;
    onLanguageChange : (language: string) => void;
}

const languages = ['python', 'javascript', 'go', 'php', 'rust', 'c/c++']

const LanguageSelector: React.FC<LanguageSelectorProps> = ({selectedLanguage, onLanguageChange}) => (
    <select
    value={selectedLanguage}
    onChange={(e) => 
        {console.log("Selected language:", e.target.value);
            onLanguageChange(e.target.value)}}
    className="p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
    aria-label="Select Programming Language"
    >
        {languages.map((lang) => (
            <option key={lang} value={lang}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
        ))}
    </select>
);

export default LanguageSelector;