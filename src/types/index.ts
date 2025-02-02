interface Option {
  text: string;
  scores: Record<string, number>;
}

interface Scores {
  dolphin: number;
  octopus: number;
  seahorse: number;
  turtle: number;
}

export type { Option, Scores };  