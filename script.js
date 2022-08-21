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

Array.prototype.myMap = function(cb) {
    let arr1 = [];

    for (let i = 0; i < this.length; i++) {
      arr1.push(cb(this[i]), i , this);
    }
    return arr1;
  };
  
  let num = [2,4,6,8];
  result = num.myMap(e => e * 2);
  console.log(result);


