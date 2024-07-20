export interface IDsa {
  [key: string]: {
    id: string;
    question: string;
    solution: string;
  };
}

export const dsa: IDsa = {
  linkedList: {
    id: '1',
    question: `qweqweqwe
      `,
    solution: `123`,
  },
  doublyLinkedList: {
    id: '2',
    question: `???`,
    solution: `12312312
    12312312
    12312312312`,
  },
} as const;
