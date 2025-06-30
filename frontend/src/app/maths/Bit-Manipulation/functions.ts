export const convertToBinary = (n: number) => {
  let output = "";
  if (n == 0) return "0";
  while (n > 0) {
    output = (n % 2) + output;
    n = Math.floor(n / 2);
  }
  return output;
};

export const get1sCompliment = (n: number) => {
  const binary = convertToBinary(n);
  const arr = binary.split("").map((item) => {
    if (Number(item) == 1) return 0;
    if (Number(item) == 0) return 1;
  });
  return arr.join("");
};

export const get2sCompliment = (n: number) => {
  const binary = get1sCompliment(n);
  let arr = binary.split("").map((item) => Number(item));
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      arr[i] = 1;
      break;
    }
    arr[i] += 1;
    if (arr[i] > 1) {
      arr[i] = 0;
    }
  }
  if (arr.every((el) => el === 0)) arr = [1, ...arr];
  return arr.join("");
};

export const swapNumbers = (a: number, b: number) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
};

export const isSetBitAtIndex = (n: number, index: number) => {
  const bool = n & (1 << index);
  return bool !== 0;
};
