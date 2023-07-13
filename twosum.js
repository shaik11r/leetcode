var twoSum = function (nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map.get(num) === undefined) {
      map.set(target - num, i);
    } else {
      return [map.get(num), i];
    }
  }
};
var twoSumfor = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return 0;
};
//Input:
var arr = [2, 6, 11, 15, 7];
var target = 9;

console.log(twoSum(arr, target));
console.log(twoSumfor(arr, target));
