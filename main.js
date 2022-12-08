
// завдання1
function text(){
    
    const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const a = [];
  
    for(let i = 0; i < arguments.length; i++) {
        a[i] = text[arguments[i]];
    }
    return a;
  }
  
  console.log(text(8, 1, 6, 0, 4,9,6));


// завдання2
let nums = []

function findAllNums(num) {
  if (num >= 10) {
    if (num / 10 > 10) {
      findAllNums(Math.floor(num / 10));
    } else {
      nums.push(Math.floor(num / 10));
    }
    nums.push(num % 10);
  }  else {
    nums.push(num);
  }
}

function text(){
  const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let a = [];

  for(let i = 0; i < arguments.length; i++){
      nums = [];
      findAllNums(arguments[i]);
      a[i] = nums.map(el => text[el]).join(", ");
  }
  return a;
}

console.log(text(7586, 726, 22, 11));


