import type { TransformOptions } from "@babel/core";

const config: TransformOptions = {
  presets: [
    "@babel/preset-env",        // Modern JS features
    ["@babel/preset-react", {throwIfNamespace: false, runtime: "automatic"}],      // JSX/TSX support
    "@babel/preset-typescript", // TypeScript support
    
  ],
};

export default config;