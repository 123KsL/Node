function findPairs(nums, target){
    const result = []; // 用于存储结果数对
    const seen = new Map(); // 哈希表，用于存储已访问数字和它们的计数

    for (const num of nums) {
        const complement = target - num; // 计算目标差值
        console.log(seen.get(complement));
        if (seen.get(complement) > 0) {
            // 如果目标差值已存在于哈希表，说明找到一组数对
            result.push([complement, num]);
            seen.set(complement, seen.get(complement) - 1); // 更新计数，防止重复匹配
        } else {
            // 否则，将当前数字存入哈希表或更新计数
            seen.set(num, (seen.get(num) || 0) + 1);
        }
    }

    return result;
}
function findPairs(nums, target){
    const result = []; // 用于存储结果数对
    const seen = new Map(); // 哈希表，用于存储已访问数字和它们的计数

    for (const num of nums) {
        const complement = target - num; // 计算目标差值
        console.log(seen.get(complement));
        if (seen.get(complement) > 0) {
            // 如果目标差值已存在于哈希表，说明找到一组数对
            result.push([complement, num]);
            seen.set(complement, seen.get(complement) - 1); // 更新计数，防止重复匹配
        } else {
            // 否则，将当前数字存入哈希表或更新计数
            seen.set(num, (seen.get(num) || 0) + 1);
        }
    }

    return result;
}
const nums = [1, 2, 3, 4, 3];
const target = 6;
console.log(findPairs(nums, target)); // 打印结果