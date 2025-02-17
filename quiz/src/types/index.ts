interface Option {
  text: string;
  scores: Scores;
}

interface Scores {
  captain: number;
  navigator: number;
  deckhand: number;
  mermaid: number;
}

export type { Option, Scores };