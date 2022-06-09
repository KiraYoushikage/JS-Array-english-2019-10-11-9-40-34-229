// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof b);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach((item, index) => {     
    arr[index]=item*2 //==>arr=[2,4,6]
})
console.log(a);
// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

colors.forEach((item, index) => {     
	if(index===1)console.log('Red Green White Black');
	if(index===2)console.log('Red+Green+White+Black');
	if(index===3)console.log('Red,Green,White,Black');
})
// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function f(a,b) {  //排序函数
    return -(a - b);  //取反并返回比较参数
}
console.log(a.sort(f));
// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function GetArrayMost (arr) {
      var arrMap = new Map();
      let key;
	  let max=-1;
      arr.forEach(item => {
        if (arrMap.get(item) !== undefined) {
          let num = arrMap.get(item);
          arrMap.set(item, ++num);
        } else {
          arrMap.set(item, 1);
        }
        if (arrMap.get(item) > max) {
          key = item;
		  max=arrMap.get(item);
        }
      })
      return key;
    }
	
console.log(GetArrayMost(a));
