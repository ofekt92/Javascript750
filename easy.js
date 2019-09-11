
// **** FIND THE SMALLEST AND BIGGEST NUMBERS IN AN ARRAY
// my solution

const array = [3474, 282, 95667, 281, 481, 375, -571, 58319, 5984, 19, 11, 1934];

var getSmallestAndLargest = (array) => {
    var largest = Number.MIN_SAFE_INTEGER; // -500000
    var smallest = Number.MAX_SAFE_INTEGER; // 500000

    array.forEach(num => {
        if (largest < num) {
            largest = num;
        }
        if (smallest > num) {
            smallest = num;
        }
    });
    var returnVal = {
        largest: largest,
        smallest: smallest
    };
    return returnVal;
};

var result = getSmallestAndLargest(array);

// best solution

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}


// **** ADD UO THE NUMBERS FROM A SINGLE NUMBER

// My Solution
function addUp(num) {
    var result = 0;
    for (let index = 1; index <= num; index++) {
        result += index;
    }
    return result;
}

// Best solution

function addUp(num) {
    return (num * (num + 1)) / 2;
}

// my Solution
function matchStick(num) {
    if (num) {
        var returnVal = 0;
        if (num === 1) {
            return 6;
        } else {
            returnVal = (6 * num) - (num - 1);
            return returnVal;
        }
    } else {
        return 0;
    }
}

// best solutin

function matchHouses(step) {
    return step === 0 ? 0 : 5 * step + 1;
}
// my solution
function factorialRecurse(num) {
    if (num == 1) return result;
    else num * factorialRecurse(num - 1);
}

// best solution
let factorial = n => n ? n * factorial(--n) : 1;

// my solution

function largestSwap(num) {
    if (num.toString().length === 2) {
        let tempNum = new String(num.toString()[1]);
        tempNum += num.toString()[0];
        if (+tempNum > num) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// best solution
function largestSwap(num) {
    return num / 10 > num % 10;
}
// my solution

function amplifyFours(num) {
    let result = [];
    for (let index = 1; index <= num; index++) {
        if (index % 4 === 0) {
            result.push(index * 10);
        } else {
            result.push(index);
        }
    }
    return result;
}

// bets solution?
// window.addEventListener('DOMContentLoaded', function () {

const amplify = num => Array.from({ length: num }, (_, i) => {
    const num = i + 1;
    return num % 4 === 0 ? num * 10 : num;
});
// amplify(4);
// })

// my solution  - Secret Society

function secretSociety(array) {
    var societyName = Array.from(array, (name) => {
        return name[0];
    })
    return societyName.sort();
}

// best solution

function societyName(friends) {
    return friends.map(person => person[0].toUpperCase()).sort().join('');
}

// my solution Numbers to Arrays and Vice Versa

function toArray(num) {
    var resArray = [];
    Array.from(num.toString()).map(val => {
        resArray.push(+val);
    })
    return resArray;

}

function toNumber(array) {
    // turn array of numbers to array of strings, add it together and then + it.
    var strings = array.map(x => { return x.toString() }).join("");
    return +strings;
}

// my solution Convert To Decimal Notation

function toDecimalFromPercentage(array) {
    return array.map(val => {
        return +val.replace('%', '') / 100;
    })
}

// bets solution
function convertToDecimal(perc) {
    return perc.map(x => parseFloat(x) / 100);
}

// my solution Hashes and Pluses

function hashesAndPluses(str) {
    let plusCount = 0;
    let hashCount = 0;
    [...str].forEach((s) => {
        if (s === '#') {
            hashCount++;
        } else if (s === '+') {
            plusCount++;
        }
    });
    var result = {
        plusCount: plusCount,
        hashCount: hashCount
    };
    return result;
}

// best solution

function hashPlusCount(str) {
    return [str.split('+').join('').length, str.split('#').join('').length]
};

// best solution for omnipresent
function omniPresent(array, val) {
    return array.every(a => a.includes(val));
}

// my solution for milk and cookies

function isChristmas(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}

// my solution for array without duplicates

function toArrNoDups(array) {
    array.filter((item, index) => array.indexOf(item) === index);
}
// best solution

function toArrNoDups(array) {
    return [...new Set(array)];
}

// my solution sum of cubes
function sumOfCubes(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.map(x => {
        return Math.pow(x, 3);
    }).reduce((a, b) => {
        return a + b;
    })
}

// best solution sum of cubes
function sumOfCubes(nums) {
    return nums.reduce((p, c) => p + Math.pow(c, 3), 0);
}

// my solution 
function firstAndLastIndex(str, char) {
    var firstIndex;
    var lastIndex;
    if (str.includes(char)) {
        firstIndex = str.indexOf(char);
        lastIndex = str.lastIndexOf(char);
    } else {
        return undefined;
    }
    return {
        firstIndex,
        lastIndex
    }
}

// best solution

function charIndex(word, char) {
    if (!word.includes(char)) {
        return undefined
    }
    return [word.indexOf(char), word.lastIndexOf(char)];
}

function toBinaryString(letters) {
    return str.replace(/[a-m]/gi, '0')
        .replace(/[n-z]/gi, '1')
}


// my best solution instances of a character in a string.

function charCount(char, str) {
    return [...str].filter(x => x === char).length;
}

// my best solution prefixes vs suffixes

function isPrefix(word, prefix) {
    return word.startsWith(prefix.slice(0, -1));
}

function isSuffix(word, suffix) {
    return word.endsWith(suffix).slice(1);
}


// my best solution
function reverseCase(str) {
    return [...str].map(c => {
        return c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase();
    }).join('').toString();
}

// my best solution

function sayHelloBye(name, num) {
    let msg = num === 1 ? 'Hello' : 'Bye';
    return msg + ' ' + name[0].toUpperCase() + name.slice(1);
}

function filterArray(arr) {
    return arr.filter(n => typeof (n) === 'number');
}

// my best solution to finding nemo

function findNemo(str) {
    if (str.includes(' Nemo ')) {
        return 'I found Nemo at ' + (str.split(' ').indexOf('Nemo') + 1) + '!';
    } else {
        return "I can't find Nemo :("
    }
}

// my solution to factorial integer

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        let result = 1;
        for (let index = 2; index <= num + 1; index++) { // 5
            result *= (index - 1);
        }
        return result
    }
}

// best solution

function factorial(z) {
    return z ? (z * factorial(z - 1)) : 1;
}

// my solution to spelling it out

function spelling(str) {
    let res = '';
    let resArr = [];
    [...str].forEach((c) => {
        res += c;
        resArr.push(res);
    })
    return resArr;
}
// best solution
function spelling(str) {
    return [...str].map((c, i) => str.slice(0, i + 1));
}

function firstVowel(str) {
    return str.search(/a|e|i|o|u/i);
}

function doubleChar(str) {
    return [...str].map(c => c + c).join('');
}

function isSpecialArray(arr) {
    return arr.every((v, i) => v % 2 == i % 2);
}

function capToFront(str) {
    let lowerCase = [...str].filter(c => c === c.toLowerCase())
    let upperCase = [...str].filter(c => c === c.toUpperCase())
    return [...upperCase, ...lowerCase].join("");
}

function maximumScpre(arr) {
    var res = 0;
    arr.forEach(x => res += x.score);
    return res;
}
// OR
function maximumScore(arr) {
    return arr.reduce((sum, val) => sum + val.score, 0);
}

function whichIsLarger(func1, func2) {
    return func1() > func2() ? 'f' : func2() > func1() ? 'g' : 'neither';
}

const countOnes = (matrix) => {
    let count = 0;
    matrix.forEach((array) => {
        array.forEach((val) => {
            if (val === 1) {
                count++;
            }
        })
    })
    return count;
}
// OR 

const countOness = (matrix) => {
    return matrix.toString().split(',').filter(x => x === '1').length;
}

const getAbsSum = (arr) => {
    return arr.reduce((c, val) => c + Math.abs(val), 0)
}

const joinPath = (str1, str2) => {
    return str1.replace('/', '') + '/' + str2.replace('/', '');
}

const mauriceWins = (mS, sS) => mS[1] > sS[0] && mS[2] > sS[1];

const countVowels = (str) => {
    return str.match(/[aeiou]/g).length;
}

const changeEnough = (purse, price) => {
    let sum = purse[0] * 0.25 + purse[1] * 0.1 + purse[2] * 0.05 + purse[3] * 0.01;
    return sum >= price;
}

const flip = (num) => {
    return num === 1 ? 0 : 1;
}

// or 
const flip = (num) => {
    return 1 - num;
}

const testJackpot = (arr) => {
    return arr.every(x => x === arr[0]);
}

// or 

const testJackpot = (arr) => {
    return new Set(arr).size === 1;
}

const checkEquals = (arr1, arr2) => {
    return arr1.every((x, i) => x == arr2[i]);
}

const inBox = (arr) => {
    return arr.some(str => str.includes('*'));
}

const XO = (str) => {
    let x = [...str].filter(x => x.toLowerCase() === 'x').length;
    let o = [...str].filter(o => o.toLowerCase() === 'o').length;
    return x === o;
}

const hackerSpeak = (str) => {
    const l33t = { 'a': 4, 'e': 3, 'i': 1, 'o': 0, 's': 5 };
    return str.replace(/[aeios]/g, m => l33t[m])
}

const alternatingCaps = (str) => {
    return [...str].map((val, i) => i % 2 === 0 ? val.toUpperCase() : val.toLowerCase()).join('');
}

// or

const removeDups = arr => [...new Set(arr)];

function greeting(name) {
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }
    return Object.keys(GUEST_LIST).includes(name) ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}` : 'Hi! im a guest';
}

const factorize = (num) => {
    return [...Array(num + 1).keys()].filter(i => num % i === 0);
}

const equalVals = (num1, num2, num3) => {
    let returnVal = new Set(Array(num1, num2, num3)).size;
    return returnVal == 1 ? 3 : returnVal == 2 ? 2 : returnVal == 3 ? 0 : NaN
}

// or 

const equalVals = (a, b, c) => {
    const size = (new Set([a, b, c])).size;
    return size === 3 ? 0 : 4 - size;
}

const capMe = (arr) => {
    return arr.map(val => val[0].toUpperCase() + val.slice(1).toLowerCase());
}

const progressDays = (arr) => arr.reduce((acc, next, index, arr) => arr[index] - arr[index - 1] > 0 ? acc++ : acc, 0);

const getMiddle = (str) => str.length % 2 === 0 ? str.charAt((str.length - 1) / 2) + str.charAt((str.length + 1) / 2) : str.charAt(str.length / 2);

// or

const getMiddle = (str) => {
    let start = Math.ceil(str.length / 2) - 1;
    let end = Math.floor(str.length / 2) + 1;
    return str.substring(start, end);
}

const gcd = (num1, num2) => {
    let forLength = num1 > num2 ? num1 : num2;
    let res = 0;
    for (let index = 0; index < forLength; index++) {
        if (num1 % index == 0 && num2 % index == 0) {
            res = index;
        }
    }
    return res;
}

// or
function gcd(n1, n2) {
    if (n2 === 0) return n1;
    return gcd(n2, n1 % n2);
}

const makeTitle = (str) => str.split(' ').map(c => c[0].toUpperCase() + c.slice(1)).join(' ');

const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a > b);

const formatNum = num => num.toLocaleString();

const doubleLetters = word => /(\w)\1/.test(word);

const flatten = (arr1) => [...arr1[0], ...arr1[1]];

const sumTwoSmallestNums = (arr) => {
    arr = arr.sort((a, b) => a - b).filter(x => x > 0);
    return arr[0] + arr[1];
}

const evenOddTransform = (arr, n) => arr.map(val => val % 2 == 0 ? val - (n * 2) : val + (n * 2));

function bbqSkewers(arr) {
    let vegCount = arr.filter(v => v.includes('o') && !v.includes('x')).length;
    let meatCount = arr.filter(m => m.includes('x')).length;
    return [vegCount, meatCount];
}

const stepsToConvert = (str) => {
    if (str) {
        let lower = [...str].filter(v => v == v.toLowerCase()).length
        let upper = [...str].filter(v => v == v.toUpperCase()).length
        return Math.min(lower, upper);
    }
    return 0;
}

const percentDiff = (num1, num2) => {
    let diff = Math.abs(num1 - num2);
    let avg = (num1 + num2) / 2;
    return diff / avg;
}
// or 
const percentDiff = (num1, num2) => +(((Math.abs(num1 - num2)) / ((num1 + num2) / 2)) * 100).toFixed(1);

const reverseStr = (str) => str.split(' ').map(v => v.length >= 5 ? v.split('').reverse().join('') : v).join(' ');

const sameASCII = (str1, str2) => {
    return [...str1].reduce((acc, val) => acc + val.charCodeAt(0), 0) == [...str2].reduce((acc, val) => acc + val.charCodeAt(0), 0)
}

const numOfSubArrays = (arr) => arr.filter(array => Array.isArray(array)).length;

const validatePin = str => typeof (parseInt(str, 10)) === 'number' ? false : str.length === 4 || str.length === 6;

const toBinaryCountOnes = num => [...num.toString(2)].filter(n => n == 1).length;

const unstretch = word => word.replace(/(.)\1+/g, '$1');

const removeWhitespace = word => word.split(' ').filter(c => c !== '').join(' ');

const validateEmail = str => {
    let res = true;
    if (!str.includes('@')) res = false;
    if (!str.includes('.')) res = false;
    if (str.indexOf('@') == 0) res = false;
    if (!str.endsWith('.com')) res = false;
    if (str[str.indexOf('@') + 1] == null) res = false;
    return res;
}

const maskify = str => str.split('').map((x, i, a) => i < a.length - 4 ? '#' : x).join('');

const isAnagram = (s1, s2) => {
    const resolve = s => Array.from(s.toLowerCase()).sort().join('');
    return resolve(s1) === resolve(s2);
}

const reverseImage = img => img.map(arr => arr.map(c => c == 0 ? 1 : 0));
// OR
const reverseImage = img => img.map(arr => arr.map(val => +!val));

const halveCount = (num1, num2) => {
    let count = 0
    while (num1 > num2) {
        num1 /= 2;
        count++;
    }
    return count - 1;
}
// OR
const halveCount = (a, b) => a < b ? -1 : 1 + halveCount(a / 2, b);

const uniqueArr = arr => [...new Set(arr.filter(val => val > 0))];

const powerOfTwo = num => Number.isInteger(Math.sqrt(num));

const isIsogram = str => [...str.toLowerCase()].length === [...new Set([...str.toLowerCase()])].length;
// OR
const isIsogram = str => [...str].length === new Set(str.toLowerCase()).size;

const matrix = (x, y, z) => {
    let res = [];
    for (let index = 0; index < x; index++) {
        res[index] = Array(y);
        res[index].fill(z, 0, y);
    }
    return res;
}
// or
const matrix = (x, y, z) => Array(x).fill(Array(y).fill(z));

const fib = num => (num < 2 ? num : fib(num - 1) + fib(num - 2));

const isPalindrome = str => str.length < 2 ? true : str.endsWith(str[0]) ? isPalindrome(str.slice(1, -1)) : false;

const toHex = str => [...str].map((c, i) => str.charCodeAt(i).toString(16)).join(' ');
// or
const toHex = str => [...str].map(c => c.charCodeAt(0).toString(16)).join(' ');

const counterpartCharCode = char => char === char.toLowerCase() ? char.toUpperCase().charCodeAt(0) : char.toLowerCase().charCodeAt(0);

const keysAndValues = obj => {
    let keys = Object.keys(obj);
    let vals = [];
    for (let prop in obj) {
        vals.push(obj[prop]);
    }
    return [[...keys], [...vals]]
}
// or
const keysAndValues = obj => [Object.keys(obj), Object.keys(obj).map(val => obj[val])];


function canAlternate(s) {
    let numZeros = 0;
    let numOnes = 0;
    for (let letter of s) {
        letter === '0' ? numZeros++ : numOnes++;
    }
    return Math.abs(numZeros - numOnes) <= 1;
}

function splitCode(item) {
    let index = item.split('').findIndex(c => !isNaN(c))
    return [item.substring(0, index), Number(item.substring(index))]
}

const testFairness = (agatha, bertha) => {
    let agaRes = agatha.reduce((a, c) => a += c[0] * c[1], 0)
    let berRes = bertha.reduce((a, c) => a += c[0] * c[1], 0)
    return agaRes === berRes;
}

const wurstIsBetter = sausage => {
    const germanWurst = [
        Bratwurst,
        Kochwurst,
        Leberwurst,
        Mettwurst,
        Rostbratwurst
    ]
    const replaceAbles = [
        'Kielbasa',
        'Chorizo',
        ' Moronga',
        'Salami',
        'Sausage',
        'Andouille',
        'Naem',
        'Merguez',
        'Gurka',
        'Snorkers',
        'Pepperoni',
        'Rules'
    ]
    sausage.split(' ')
}

const flipEndChars = str => typeof (str) != 'string'
    || str.length < 2
    ? 'Incompatible'
    : str[0] == str[str.length - 1]
        ? "Two's a pair."
        : str[str.length - 1] + str.slice(1, -1) + str[0];



const asciiSort = arr => {
    const count1 = [...arr[0]].reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
    const count2 = [...arr[1]].reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
    return count1 < count2 ? arr[0] : arr[1];
}
// or 
const asciiSort = ([a, b]) => {
    let r = (t, c) => t + c.charCodeAt(0);
    return [...a].reduce(r, 0) < [...b].reduce(r, 0) ? a : b;
}

const removeSpecialCharacters = str => RegExp(/([a-zA-Z])/g).test(str);

const getDay = date => {
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };
    let trueDate = new Date(date);
    let trueDay = trueDate.getDay();
    return days[trueDay];
}

// or 
const getDay = date => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(day).getDay()];
// or
const getDay = day => new Date(day).toLocaleString('en-us', { weekday: 'long' });

const calculator = (num1, operator, num2) => operator + num2.toString() == '/0' ? 'Cannot divide by 0' : eval(num1 + operator + num2)

function perrin(n) {
    if (n == 0) { return 3 }
    if (n == 1) { return 0 }
    if (n == 2) { return 2 }
    return perrin(n - 2) + perrin(n - 3);
}

const findZip = str => str.indexOf('zip', str.indexOf('zip') + 1);

const howManyTimes = msg => [...msg].reduce((acc, curr) => acc += curr.charCodeAt(0) - 96, 0);

function countPosSumNeg(arr) {
    let posRes = arr.filter(v => v > 0).length;
    let negRes = arr.filter(v => v < 0).reduce((acc, curr) => acc += curr, 0);
    return Array.isArray(arr) && arr.length > 0 && !arr.includes(null) ? [posRes, negRes] : []
}

const nextInLine = (arr, num) => arr.length > 0 ? [...arr.slice(1), num] : 'No array has been selected'
// OR
const nextInLine = (arr, num) => Array.isArray(arr) ? arr.slice(1).concat(num) : 'No array has been selected'

const isAutomorphic = num => Math.pow(num, 2).toString().endsWith(num.toString())

function printAllGroups() {
    let result = [];
    for (let y of "123456") for (let c of "abcde") result.push(y + c);
    return result.join(', ');
}

const removeSmallest = arr => arr.length > 0 ? arr.slice(arr[Math.min(...arr)]) : [];

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const Magic = date => {
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getUTCFullYear()[2] + date.getUTCFullYear()[3];
    return day * month == year || day * month == year + date.getUTCFullYear()[1];
}

const progressBar = (bar, progress) => {
    let res = "";
    let whitespace = " ";
    res = progress > 0 ? res + bar : res;
    res = res.repeat(progress);
    res = progress < 10 ? res + whitespace.repeat(10 - progress) : res;
    res = progress < 10 ? "|" + res + "| Progress: " + progress * 10 + "%" : "|" + res + "| Completed!";
    return res;
}

const MagicDate = str => {
    const [day, month, year] = str.split(' ').map(Number);
    return String(year).endsWith(day * month);
}

const coneVolume = (h, r) => h !== 0 && r !== 0 ? Number(((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2)) : 0;

const uniqueInOrder = arr => [...arr].filter((el, ind, arr) => el != arr[ind + 1])

const moveToEnd = (arr, el) => {
    let arrToConcat = arr.filter(val => val === el);
    let arrWithout = arr.filter(val => val !== el);
    return arrWithout.concat(arrToConcat);
}
// OR
const moveToEnd = (arr, el) => arr.sort(val => val == el ? 1 : -1);

const mysteryFunc = n => [...n.toString()].reduce((acc, val) => acc * +val);

const grabCity = str => str.slice(str.lastIndexOf('[') + 1, str.lastIndexOf(']'))


const longestZero = num => {
    let arr = num.split('1').sort();
    return arr[arr.length - 1]
}

// OR
const longestZero = num => num.split('1').sort().reverse()[0];

const incrementToTop = arr => {
    let biggestElem = Math.max(...arr)
    return arr.reduce((acc, curr) => acc + (biggestElem - curr), 0)
}

const mean = num => {
    let s = String(Math.abs(num)).split('');
    return s.reduce((acc, curr) => acc += +curr, 0) / s.length;
}

const indexMultiplier = arr => arr.reduce((acc, curr, ind) => acc += (curr * ind), 0)

function flash([num1, op, num2]) {
    const mather = {
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        'x': (n1, n2) => n1 * n2,
        '-': (n1, n2) => Number.isFinite(n1 / n2) ?
            Number((n1 / n2).toFixed(2))
            : undefined
    };
    return mather[op](num1, num2);
}

const shortestDistance = str => {
    let [x1, y1, x2, y2] = str.split(',').map(v => +v);
    return Number(Math.hypot(x1 - x2, y1 - y2).toFixed(2));
}

const indexOfCaps = str => [...str].map((l, i) => l.toLowerCase() !== l ? i : '').filter(c => c !== '');

function redundant(str) {
    return function (str) {
        return str
    }
}

const accum = str => {
    return [...str].map((val, ind) => {
        return val.toUpperCase() + val.toLowerCase().repeat(ind);
    }).join("-");
}

const firstNVowels = (s, n) => {
    const arr = ['a', 'e', 'i', 'o', 'u'];
    function func1() {
        return [...s].filter((v) => arr.includes(v)).reduce((a, v, i) => {
            if (i < n) {
                a += v;
            }
            return a
        }, '')
    }
    return s.includes(...arr) ? func1() : 'invalid'
}


const probability = (arr, n) => {
    let greaterThann = arr.filter(num => num >= n);
    let prob = +((greaterThann.length / arr.length) * 100).toFixed(1);
    return prob;
}

const calculateScores = str => {
    let andy = [...str].filter(l => l === 'A');
    let ben = [...str].filter(l => l === 'B');
    let char = [...str].filter(l => l === 'C');
    return str.length !== 0 ? [andy.length, ben.length, char.length] : [0, 0, 0]
}
// or
function calculateScores(str) {
    var r = [0, 0, 0];
    for (var i = 0; i < str.length; i++) {
        r[str.charCodeAt(i) - 65]++;
    }
    return r;
}

const countIdentical = arr => {
    let count = 0;
    arr.forEach(subArr => {
        if (new Set(subArr).size === 1) {
            count++;
        }
    });
    return count;
}

const bkla = arr => arr.filter(subArr => new Set(subArr).size === 1).length;

const cumulativeSum = arr => arr.reduce((r, a) => {
    a += r[r.length - 1] || [];
    r.push(a);
    return r;
}, [])
// OR//
const cumulativeSum = arr => {
    let sum = 0;
    return arr.map(val => sum += val);
}

const firstNVowels = str => {

}

function firstNVowels(s, n) {
    const VOWELS = "aeiou";
    let stringVowels = [...s].filter(l => VOWELS.includes(l));
    return n <= stringVowels.length ? stringVowels.slice(0, n).join('') : 'invalid';
}

const countAdverbs = sentence => (sentence.match(/\w+ly/g) || []).length;

const dataType = val => Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();

const median = arr => {
    if (arr.length % 2 !== 0) {
        return arr.sort()[(arr.length - 1) / 2];
    } else {
        return arr.sort()[arr.length / 2] + arr.sort()[arr.length - 1 / 2];
    }
}

const median = arr => {
    let sortedArr = arr.sort((v1, v2) => v1 - v2);
    return sortedArr.length % 2 === 0 ? (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) / 2
        : sortedArr[(sortedArr.length - 1) / 2];
}

const flip = (str, spec) => {
    if (str.split(' ').length > 1) {
        return spec === 'word' ? str.split(' ').map(v => [...v].reverse().join('')).join(' ') : str.split(' ').reverse().join(' ');
    } else {
        return spec === 'word' ? [...str].reverse().join('') : str;
    }
}

const matchLastItem = arr => {
    let last = arr.pop();
    return arr.join('') === last;
}

const letterCheck = arr => {
    const [firstWord, secondWord] = arr.map(str => str.toLowerCase());
    return [...secondWord].filter(l => firstWord.includes(l)).length === secondWord.length;
}

const split = str => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    return getVowels();

    function getVowels() {
        let vowels = [];
        let notVowels = [];
        [...str].forEach((v) => {
            if (VOWELS.includes(v.toLowerCase())) {
                vowels.push(v);
            } else {
                notVowels.push(v);
            }
        })
        return [...vowels, ...notVowels].join('');
    }
}

const freeShipping = order => Object.values(order).reduce((acc, curr) => acc += curr, 0) > 50;
const freeShipping = order => Object.keys(order).reduce((t, c) => t + order[c], 0) > 50;
const freeShipping = order => {
    let result = 0;
    for (let item in order) {
        result += order[item];
    }
    return result > 50;
}

function replace(str, r) {
    var reg = new RegExp("[" + r + "]", "gi")
    return str.replace(reg, "#")
}


const squarePatch = num => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = new Array(num);
        arr[i].fill(num, 0, num)
    }
    return arr;
}

const squarePatch = length => Array.from({ length }, () => Array.from({ length }).fill(length));

const objectToArray = obj => {
    let arr = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        arr[i] = new Array();
        arr[i].push(keys[i], obj[keys[i]])
    }
    return arr;
}
// OR

const objectToArray = obj => Object.keys(obj).map(key => [key, obj[key]]);

const returnTheEndOfNumber = num => {
    let lastDigit = num % 10;
    let res = num.toString();
    switch (lastDigit) {
        case 1:
            res += "-ST"
            break;
        case 2:
            res += "-ND"
            break;
        case 3:
            res += "-RD"
            break;
        default:
            res += "-TH"
            break;
    }
    return res;
}


function sumDigits(a, b) {
    var res = [];
    for (var i = a; i <= b; i++) {
        res.push(String(i).split('').reduce((x, y) => Number(x) + Number(y)));
    }
    return res.reduce((a, b) => Number(a) + Number(b));
}

const concat = (...args) => [...arguments].reduce((arr, curr) => arr.concat(curr), []);

function concatt(...args) {
    return [...arguments].reduce((ar, cr) => ar.concat(cr), [])
}

const concatt = (...args) => [].concat(...args);


// best
const fibonacci = (num, memo) => {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
    console.log(num, memo);
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

const fibonacci = num => {
    let res = 1;
    for (let i = 0; i < num; i++) {
        res *= x;
    }
    return res;
}

const fibonacci = num => {
    return num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}

const move = str => [...str].map(l => String.fromCharCode(l.charCodeAt(0) + 1)).join('');
// turn str to arr, map -> every value is now charCode + 1 --> and now it's string.

const quadratic = (a, b, c) => {
    return (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
}

const alphabetPosition = text => text.toLowerCase().split('')
    .filter(c => c >= 'a' && c <= 'z')
    .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
    .join(' ');


function change(x, times) {
    let temp = new Array(...x)
    for (let i = 0; i < x.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < x.length - j) {
                temp[i]--;
            }
            j++;
        }
    }
    return temp;
}