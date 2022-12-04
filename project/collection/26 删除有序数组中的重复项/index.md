## 删除有序数组中的重复项

给你一个 **升序排列** 的数组 `nums` ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 **相对顺序** 应该保持 **一致** 。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组 nums 的第一部分。更规范地说，如果在删除重复项之后有 `k` 个元素，那么  `nums`  的前 `k` 个元素应该保存最终结果。

将最终结果插入  `nums` 的前 `k` 个位置后返回 `k` 。

不要使用额外的空间，你必须在 原地 **修改输入数组** 并在使用 O(1) 额外空间的条件下完成。

**判题标准:**

系统会用下面的代码来测试你的题解:

```
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

如果所有断言都通过，那么您的题解将被 **通过**。

**示例 1：**

```
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

**示例 2：**

```
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

**提示：**

- `1 <= nums.length <= 3 * 10**4`
- `-10**4 <= nums[i] <= 10**4`
- `nums` 已按 **升序** 排列

### 解法

解题思路：由于题目是删除，又需要改变原数组，就想到了数组的 splice，但 splice 改变原数组后会改变 for 循环次数，导致 i 对应错误，在该基础上加上 i--，当删除相同项时重新执行该次循环

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let maps = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (maps.has(nums[i])) {
      nums.splice(i, 1)
      i--
    } else {
      maps.set(nums[i], i)
    }
  }
  return nums.length
}
```

解题思路：思路与解法 1 一致，只是替换 Map 而用变量

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur = nums[0],
    i = 1
  while (i < nums.length) {
    if (cur === nums[i]) {
      nums.splice(i, 1)
    } else {
      cur = nums[i++]
    }
  }
  return nums.length
}
```

解题思路：快慢双指针，根据题解思路，题解并没有删除原数组长度，只是根据快慢指针，修改对应索引的值；快指针循环，慢指针记录不相同个数及对应索引

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slowindex = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[slowindex] !== nums[i]) {
      slowindex++
      nums[slowindex] = nums[i]
    }
  }
  // while 内存消耗比for大
  // let slowindex = 0, i = 1
  // while (i < nums.length) {
  //   if (nums[slowindex] !== nums[i]) {
  //     slowindex++
  //     nums[slowindex] = nums[i]
  //   }
  //   i++
  // }
  return slowindex + 1
}
```

解题思路：官方题解，快慢指针

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  let fast = 1,
    slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}
```
