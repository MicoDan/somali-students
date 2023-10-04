export const range = (lo: number, hi: number): number[] => {
    const result = Array<number>(hi - lo);
    for (let i = lo; i < hi; i++) {
      result[i - lo] = i; //0-0, 1-0, 2-0....
    }
    return result;
};
  
  export const sum = (numbers: number[]): number => {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  };
  