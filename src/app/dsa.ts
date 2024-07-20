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
    question: `/**
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
 */
      `,
    solution: `
    const arr = [10, 15, 3, 7];
    <br/>const k = 17;
    <br/>function babu(arr,k){
    <br/>let result = false;
    <br/>const complement = new Set();
    <br/>arr.forEach(item => {
    <br/>    if (complement.has(k - item)) {
    <br/>       result = true;
    <br/>       return;
    <br/>    }
    <br/>    complement.add(item)
    <br/>})
    <br/>return result;
    <br/>}
    <br/>babu(arr,k)`,
  },
  doublyLinkedList: {
    id: '2',
    question: `???`,
    solution: `12312312
    12312312
    12312312312`,
  },
} as const;
