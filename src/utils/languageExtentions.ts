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