function getSecondLargest(nums) {
    // Complete the function
    /*var sorted = nums.sort();    
    var max = sorted[nums.length - 1]; // get the max of the array
    var secondMax = sorted[nums.length - 2];

    for(var i = 0; i < sorted.length; i++){
        if(sorted[i] == max){
            return sorted[i - 1];
        }
        if(sorted[i] == secondMax){
            return max;
        }
        if(sorted[i] > 10){
            return 10;
        }
    } */

    let first = nums[0]; 
    let second = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i]
        }
        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }
    return second;   
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}