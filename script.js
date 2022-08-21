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

  Array.prototype.myReduce = function(cb) {
    let acc = 0;
    for (let i = 0; i < this.length; i++) {
        cb(acc = acc + this[i]);
    }
    return acc;
};
 
const arr1 = [4,5,6,9];

console.log(arr1.myReduce((accu,item) => accu + item));


