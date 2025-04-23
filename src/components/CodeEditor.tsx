"use client";

import { languageExtentions } from "@/utils/languageExtentions";
import { EditorState } from "@codemirror/state";
import { ViewUpdate } from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import React, { useEffect, useRef } from "react";



interface CodeEditorProps{
    language: string;
    value: string;
    onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({language, value, onChange})=>{
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if (!editorRef.current) return;
        
        const state = EditorState.create({
            doc: value,
            extensions: [
              basicSetup,
              languageExtentions[language] || languageExtentions['javascript'],
              EditorView.updateListener.of((update: ViewUpdate) => {
                if (update.docChanged) onChange(update.state.doc.toString());
              }),
            ],
          });
      
          const view = new EditorView({
            state,
            parent: editorRef.current,
          });
      
          return () => view.destroy();
        }, [language, value, onChange]);
      
        return <div ref={editorRef} className="h-96 border border-gray-300 dark:border-gray-700" />;
      };

export default CodeEditor;