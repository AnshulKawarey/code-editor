"use client";

import { languageExtentions } from "@/utils/languageExtentions";
import { Compartment, EditorState } from "@codemirror/state";
import { ViewUpdate } from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import React, { useEffect, useRef } from "react";



interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const languageCompartment = useRef(new Compartment());


  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: value.trim(),
      extensions: [
        basicSetup,
        languageCompartment.current.of(
          languageExtentions[language] || languageExtentions["javascript"]
        ),
        EditorView.updateListener.of((update: ViewUpdate) => {
          if (update.docChanged) onChange(update.state.doc.toString());
        }),
      ],
    });

    viewRef.current = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => viewRef.current?.destroy();
  }, []);

  useEffect(() => {
    if (viewRef.current) {
      const currentValue = viewRef.current.state.doc.toString();
      const trimmedValue = value.trim();
      if (trimmedValue !== currentValue) {
        viewRef.current.dispatch({
          changes: { from: 0, to: currentValue.length, insert: trimmedValue },
        });
      }
    }
  }, [value]);

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        effects: languageCompartment.current.reconfigure(
          languageExtentions[language] || languageExtentions["javascript"]
        ),
      });
    }
  }, [language]);

  return <div ref={editorRef} className="h-96 border border-gray-300 dark:border-gray-700" />;
};

export default CodeEditor;