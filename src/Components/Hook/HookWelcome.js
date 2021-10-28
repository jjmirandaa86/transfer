import { useState, useEffect } from "react";

export const HookWelcome = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setWord("T");
    }, 200);
    setTimeout(() => {
      setWord("TE");
    }, 400);
    setTimeout(() => {
      setWord("TES");
    }, 600);
    setTimeout(() => {
      setWord("TESA");
    }, 800);
    setTimeout(() => {
      setWord("TESAL");
    }, 1000);
    setTimeout(() => {
      setWord("TESALI");
    }, 1200);
    setTimeout(() => {
      setWord("TESALIA");
    }, 1400);
  }, []);

  return {
    word,
  };
};
