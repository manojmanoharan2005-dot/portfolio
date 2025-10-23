import React, { useState, useEffect } from "react";

export default function TypingEffect({ texts = [], speed = 120, pause = 1200 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((b) => !b);
    }, 500);
    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {
    if (index >= texts.length) return;
    if (!reverse) {
      if (subIndex < texts[index].length) {
        const t = setTimeout(() => setSubIndex((s) => s + 1), speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(t);
    } else {
      if (subIndex > 0) {
        const t = setTimeout(() => setSubIndex((s) => s - 1), speed / 2);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setReverse(false);
        setIndex((i) => (i + 1) % texts.length);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [subIndex, index, reverse, texts, speed, pause]);

  return (
    <span className="inline-block">
      {texts[index].substring(0, subIndex)}
      <span className={`ml-1 inline-block w-1 h-6 align-middle ${blink ? "bg-gray-100" : "bg-transparent"}`} />
    </span>
  );
}
