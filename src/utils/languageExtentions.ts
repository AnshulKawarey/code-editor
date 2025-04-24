import { cpp } from "@codemirror/lang-cpp";
import { go } from "@codemirror/lang-go";
import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { LanguageSupport } from "@codemirror/language";

export const languageExtentions : {[key: string] : LanguageSupport } = {
    python : python(),
    javascript: javascript(),
    go : go(),
    php : php(),
    rust : rust(),
    'c/cpp': cpp(),
};

export const languagePlaceholders: { [key: string]: string } = {
    python: `print("Hello, World!")`,
    javascript: `console.log("Hello, World!");`,
    go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
    php: `<?php\necho "Hello, World!";\n?>`,
    rust: `fn main() {\n    println!("Hello, World!");\n}`,
    "c/c++": `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
  };