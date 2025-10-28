import React, { useState } from "react";
import { StreamView } from "./StreamView";

export function WriterPane(){
  const [content, setContent] = useState<string>("");
  const [stream, setStream] = useState<string>("");

  return (
    <>
      <textarea className="editor" value={content} onChange={e=>setContent(e.target.value)} placeholder="Your scene goes here…"/>
      <StreamView text={stream} />
    </>
  );
}
