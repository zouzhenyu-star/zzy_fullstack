const a = 9007199254740991n;
console.log(typeof a);

const alsoHuge = BigInt(9007199254740991);// 定义BigInt类型的变量

const b1 = BigInt(Number.MAX_SAFE_INTEGER);// 输出 b1 的最大安全整数
const b2 = BigInt(Number.MIN_SAFE_INTEGER);// 输出 b1 的最小安全整数
console.log(b1);

// 最大数相加
const maxPlusOne = b1 + 1n;
console.log(maxPlusOne);