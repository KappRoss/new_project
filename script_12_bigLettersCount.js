


const bigLettersCount = (str) => {
  // let result = 0;
  // for (let i = 0; i < length(str); i += 1) {
  //   if (toUpperCase(str[i]) === str[i]) {
  //     result += 1;
  //   }
  // }

  // return result;
  let reNotCapitals = /[^A-Z\s]/g ;  // \s - it's '' (space) ; g - use modifier to find all matches
  let capitalsAmount = str.replace(reNotCapitals, '').length;
  return capitalsAmount
  
};
console.log(bigLettersCount('ACbc'))


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
  if (firstCount > secondCount){
    return 1
  }
  else if(secondCount > firstCount){
    return -1
  }
  else{
    return 0
  }
  
};

const greaterThan = (first, second) => (
  compare(first, second) === 1);

const lessThan = (first, second) => (
  compare(first, second) === -1);

const isEqual = (first, second) => (
  compare(first, second) === 0);
