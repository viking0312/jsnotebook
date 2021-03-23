import MonacoEditor from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { useState } from "react";
import "./code-editor.css";

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const [editorValue, setEditorValue] = useState("");
  const onFormatClick = () => {
    try {
      const formatted = prettier
        .format(editorValue, {
          useTabs: false,
          semi: true,
          singleQuote: true,
          parser: "babel",
          plugins: [parser],
        })
        .replace(/\n$/, "");
      setEditorValue(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        Format
      </button>
      <MonacoEditor
        onChange={(editorValue) => {
          if (editorValue !== undefined) {
            onChange(editorValue);
            setEditorValue(editorValue);
          }
        }}
        value={editorValue}
        language="javascript"
        theme="vs-dark"
        height="100%"
        options={{
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          fontFamily: "'Roboto Mono',monospace",
          scrollBeyondLastLine: false,
          automaticLayout: true, // possible performance problem
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
