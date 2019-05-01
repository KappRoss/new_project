
//function that flips a string

const reverse = (str) => {
	let acc = ""
	const iter = (counter) => {
    	if(counter === -1){
      		return acc;
    	}
    	acc += str[counter]
    	return iter(counter - 1)
  	}
	return iter(str.length - 1)
}
console.log(reverse("yesterday"))

// with while

// const reverse = (str) => {
//   let i = str.length - 1;
//   let result = '';

//   while (i >= 0) {
//     result = result + str[i];
//     i -= 1;
//   }

//   return result;
// };