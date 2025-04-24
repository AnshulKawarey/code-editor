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
  const isUserEditing = useRef(false);

  // Initialize editor on mount
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
          if (update.docChanged) {
            isUserEditing.current = true;
            onChange(update.state.doc.toString());
          }
        }),
      ],
    });

    viewRef.current = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => viewRef.current?.destroy();
  }, []);

  // Update document for external value changes
  useEffect(() => {
    if (viewRef.current && !isUserEditing.current) {
      const currentValue = viewRef.current.state.doc.toString();
      if (value !== currentValue) {
        console.log("Updating editor value:", JSON.stringify(value));
        viewRef.current.dispatch({
          changes: { from: 0, to: currentValue.length, insert: value },
        });
      }
    }
    isUserEditing.current = false;
  }, [value]);

  // Update language
  useEffect(() => {
    console.log("CodeEditor language:", language);
    console.log("Applying language extension:", languageExtentions[language] || languageExtentions["javascript"]);
    if (viewRef.current) {
      viewRef.current.dispatch({
        effects: languageCompartment.current.reconfigure(
          languageExtentions[language] || languageExtentions["javascript"]
        ),
      });
      // Force content update to ensure placeholder is applied
      const currentValue = viewRef.current.state.doc.toString();
      if (value !== currentValue) {
        console.log("Forcing content update to:", JSON.stringify(value));
        viewRef.current.dispatch({
          changes: { from: 0, to: currentValue.length, insert: value },
        });
      }
    }
  }, [language, value]);

  return <div ref={editorRef} className="h-96 border border-gray-300 dark:border-gray-700" />;
};

export default CodeEditor;