# Code Editor

This is a web-based code editor built with Next.js, TypeScript, CodeMirror, and Tailwind CSS. It supports multiple programming languages (Python, JavaScript, Go, PHP, Rust, C/C++), light/dark mode theming, and placeholder code snippets for each language. Users can write, run, and reset code, with their work persisted in `localStorage`.

# Features

- **Multi-language Support**: Syntax highlighting for Python, JavaScript, Go, PHP, Rust, and C/C++.
- **Code Persistence**: Saves code to `localStorage` for each language.
- **Theme Toggle**: Switch between light and dark modes, with preferences saved in `localStorage`.
- **Placeholder Code**: Each language starts with a default "Hello, World!" snippet.
- **Responsive Design**: Works on desktop and mobile with a flexible layout.
- **Run and Reset**: Simulate code execution with placeholder output and reset to default code.

# Prerequisites

## Before running the application locally, ensure you have the following installed:

- **Node.js**: Version 14.x or later.
- **npm**: Comes with Node.js, but you can update it with `npm install -g npm`.
- A modern web browser (e.g., Chrome, Firefox, Edge).

# Installation

# Follow these steps to set up and run the application locally:

1. **Clone the Repository**\
   If the project is hosted on a Git repository, clone it. Otherwise, copy the project files to your local machine.
  ```
   git clone https://github.com/AnshulKawarey/code-editor
   cd code-editor
  ```

2. **Install Dependencies**\
   Run the following command to install all required Node.js packages:
  ```
   npm install
  ```
   This installs Next.js, TypeScript, CodeMirror, Tailwind CSS, and other dependencies listed in `package.json`.

3. **Verify Project Structure**\
   Ensure the following key files and directories exist:

   - `app/page.tsx`: Main application page with the code editor UI.
   - `components/CodeEditor.tsx`: CodeMirror-based editor component.
   - `components/LanguageSelector.tsx`: Dropdown for selecting programming languages.
   - `components/ProblemStatement.tsx`: Component for displaying coding problems.
   - `utils/languageExtensions.ts`: Language extensions and placeholder code for CodeMirror.
   - `app/globals.css`: Global styles with Tailwind CSS and custom theme variables.
   - `tailwind.config.js`: Tailwind configuration with dark mode support.

4. **Optional: Clear localStorage**\
   If you encounter issues with saved code (e.g., unexpected newlines), clear `localStorage` in your browser:

   - Open your browser’s DevTools (F12).
   - Run in the console:
```
     localStorage.clear();
```
# Running the Application Locally

1. **Start the Development Server**\
   Run the following command to launch the Next.js development server:

   ```bash
   npm run dev
   ```

   This starts the app in development mode with hot reloading.

2. **Access the Application**\
   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

   You should see the code editor with a default Python "Hello, World!" snippet, a language selector, a problem statement, and buttons for running and resetting code.

3. **Interact with the App**

   - **Write Code**: Edit the code in the editor, which supports syntax highlighting and newlines (Enter key).
   - **Switch Languages**: Use the language selector to change between Python, JavaScript, Go, PHP, Rust, or C/C++. The editor loads placeholder code if no saved code exists.
   - **Toggle Theme**: Click the "Dark"/"Light" button (top-right) to switch themes.
   - **Run Code**: Click "Run Code" to simulate execution (displays placeholder output).
   - **Reset Code**: Click "Reset" to restore the default placeholder for the current language.

## Project Structure

```
code-editor/
├── app/
│   ├── globals.css         # Global styles with Tailwind CSS
│   ├── layout.tsx          # Root layout importing globals.css
│   └── page.tsx            # Main page with code editor UI
├── components/
│   ├── CodeEditor.tsx      # CodeMirror editor component
│   ├── LanguageSelector.tsx # Language selection dropdown
│   └── ProblemStatement.tsx # Problem statement display
├── utils/
│   └── languageExtensions.ts # Language extensions and placeholders
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Notes

- The app uses `localStorage` to persist code and theme preferences. Clearing `localStorage` resets these to defaults.
- Placeholder code is defined in `utils/languageExtensions.ts` and can be customized by editing `languagePlaceholders`.
- The "Run Code" feature currently outputs a placeholder. To add real code execution, integrate a backend or a code execution API.
