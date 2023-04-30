function smallestOfThreeNumbers(num1, num2, num3) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    let nums = [num1, num2, num3];

    for (let i = 0; i < nums.length; i++) {
        if (smallestNumber > nums[i]) {
            smallestNumber = nums[i];
        }
    }
    return smallestNumber;
}

smallestOfThreeNumbers(2, 5, 3);