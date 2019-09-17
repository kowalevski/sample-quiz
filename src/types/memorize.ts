export type Card = {
  id: string;
  note: string;
  field: string;
};

export type Deck = {
  title: string;
  id: string;
  cards: Card[];
};
