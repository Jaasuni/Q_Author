import React from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { Home } from "./pages/Home";

const root = createRoot(document.getElementById("root")!);
root.render(<Home />);
