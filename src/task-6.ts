function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}


const firstNumber = getFirstElement<number>([1, 2, 3]);           // 1
const firstString = getFirstElement<string>(["a", "b", "c"]);     // "a"
const firstBoolean = getFirstElement<boolean>([true, false, true]); // true


