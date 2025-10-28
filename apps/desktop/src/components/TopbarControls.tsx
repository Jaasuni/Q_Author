import React, { useState } from "react";

export function TopbarControls(){
  const [provider, setProvider] = useState("openai");
  const [model, setModel] = useState("gpt-4o-mini");
  const [temperature, setTemperature] = useState(0.85);
  const [topP, setTopP] = useState(0.9);

  return (
    <div className="topbar">
      <strong>Q Author</strong>
      <select value={provider} onChange={e=>setProvider(e.target.value)}>
        <option value="openai">OpenAI</option>
        <option value="anthropic">Anthropic</option>
        <option value="gemini">Gemini</option>
        <option value="openrouter">OpenRouter</option>
        <option value="ollama">Ollama (local)</option>
      </select>
      <input placeholder="model" value={model} onChange={e=>setModel(e.target.value)} />
      <label className="small">Temp {temperature.toFixed(2)}</label>
      <input type="range" min="0" max="1" step="0.01" value={temperature} onChange={e=>setTemperature(parseFloat(e.target.value))} style={{width: 120}}/>
      <label className="small">Top-p {topP.toFixed(2)}</label>
      <input type="range" min="0" max="1" step="0.01" value={topP} onChange={e=>setTopP(parseFloat(e.target.value))} style={{width: 120}}/>
      <button className="primary">Outline</button>
      <button>Draft</button>
      <button>Tighten</button>
    </div>
  );
}
