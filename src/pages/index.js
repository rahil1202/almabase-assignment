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
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            <footer className="w-full py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
             © 2024 Rahil Vahora <span className="mx-1">| Made with </span>
          
            <FaHeart className="inline text-red-500" />
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/rahil1202"
              target="_blank"
              rel="noopener noreferrer"
              alt="Github" 
              className="text-gray-400 hover:text-black transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://linkedin.com/in/rahil-vahora"
              target="_blank"
              rel="noopener noreferrer"
              alt="Linkedin"
              className="text-gray-400 hover:text-black transition duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>

          </div>
        </div>
      </footer>
          </div>
          {/* Toolbox component for the editor */}
          <Toolbox />
        </div>
      </Editor>
    </div>
  );
}
