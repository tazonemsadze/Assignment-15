// 1.შექმენით index.html და app.js ფაილები. შემოტანეთ app.js html-ში.

// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.

// number
const number = 18;
const startigDate = 17;
const nan = NaN;
console.log(typeof number, typeof startigDate, typeof nan);

// string
const str = "Hello world";
const userFullName = "John Doe";
const bookTitle = "La Peau de chagrin";
console.log(typeof str, typeof userFullName, typeof bookTitle);

// boolean
const bool = true;
const bool2 = false;
console.log(typeof bool, typeof bool2);

//undifined
let undef = undefined;
let schrodingerBox;
console.log(typeof undef, typeof schrodingerBox);

// null
let emptyBox = null;
console.log(typeof emptyBox);

// bigInt
const big1 = BigInt(123);
const big2 = 123n;
const big3 = BigInt("0x1fffffffffffff");
console.log(typeof big1, typeof big2, typeof big3);

// symbol
const sy1 = Symbol("id");
console.log(sy1);
// 3. დამატებით შექმენით ცვლადები name,  dayOfWeek, favoriteActivity და მიანიჭეთ თქვენი სახელი, კვირის დღე, თქვენი ფავორიტი აქტივობა.

const userName = "John Doe";

const curDate = new Date();
let dayOfWeek = new Date().toLocaleDateString("ka-GE", { weekday: "long" });

const favoriteActivity = "going for a walk";

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: "Hi, my name is (აქ name ცვლადი)! Today is ( აქ dayOfWeek ცვლადი), a perfect day for (აქ favoriteActivity ცვლადი)."

const sentence = `Hi, my name is ${userName}! Today is ${dayOfWeek}, a perfect day for ${favoriteActivity}`;
const sentence2 =
  "Hi, my name is " +
  userName +
  "! Today is " +
  dayOfWeek +
  ", a perfect day for " +
  favoriteActivity;

console.log(sentence);
console.log(sentence2);
