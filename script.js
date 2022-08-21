// myMap

Array.prototype.myMap = function(cb){
    const resultArr = [];
    for(let i = 0 ; i < this.length; i++){
        resultArr.push(cb(this[i]), i , this);
    }
    return resultArr;
}

let arr = [1,2,3,4];

console.log(arr.myMap(n => n * 3));

//myReduce




const sum = (initialValue, current) => initialValue + current;

const myReduce = (reducer, initialValue, array) => {
  let value = initialValue;

  for(let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    value = reducer(value, currentValue)
  }

  return value;
}

console.log(myReduce(sum , 0 ,[2,6,8,3]));


