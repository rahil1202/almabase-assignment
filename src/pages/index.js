import React from "react";
import { Editor } from "@craftjs/core";
import { EditorScreen, Toolbox, Topbar } from "../components/editor/layout";
import {
  Button,
  CanvasContainer,
  Container,
  Input,
  Label,
  Text,
} from "../components/editor/elements";
import { FaHeart } from "react-icons/fa";

export default function App() {
  return (
    <div className="w-full h-full">
      {/* Craft.js Editor component with a resolver for custom elements */}
      <Editor
        resolver={{ Button, Label, Text, Container, Input, CanvasContainer }}
      >
        <div className="flex h-full">
          <div className="flex flex-col w-full">
            {/* Topbar component for the editor */}
            <Topbar />
            {/* Main content area */}
            <EditorScreen />
            {/* Footer */}
            <footer className="bg-white mt-10 mb-4 text-center text-sm text-black">
              Developed by{" "}
              <a
                href="https://github.com/rahil1202"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-blue-400 hover:underline"
              >
                Rahil Vahora
              </a>{" "}
              <FaHeart className="inline text-red-500 ml-1" />
            </footer>
          </div>
          {/* Toolbox component for the editor */}
          <Toolbox />
        </div>
      </Editor>
    </div>
  );
}
