function range(start, end, step) {
  let steps = [];
  if(start, end, step === 0 || start > end || step <= 0) { 
    return [];
  } else {
    for(let i = start; i <= end; i += step) {
      steps.push(i); 
    }
  }
  return steps;
}
  

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));