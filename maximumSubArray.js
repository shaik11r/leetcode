var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var sum = 0;
var temp = 0;
for (let j = 0; j < nums.length; j++) {
  temp = Math.max(nums[j], temp + nums[j]);
  sum = Math.max(sum, temp);
}
console.log(sum);
