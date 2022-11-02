## 合并两个有序数组

给你两个按 非递减顺序 排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示 `nums1` 和 `nums2` 中的元素数目。

请你 合并 `nums2` 到 `nums1` 中，使合并后的数组同样按 **非递减顺序** 排列。

**注意：** 最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。

**示例1：**
```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```

**示例2：**
```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

**示例3：**
```
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

**提示：**

+ `nums1.length == m + n`
+ `nums2.length == n`
+ `0 <= m, n <= 200`
+ `1 <= m + n <= 200`
+ `-10**9 <= nums1[i], nums2[j] <= 10**9`

**进阶：** 你可以设计实现一个时间复杂度为 `O(m + n)` 的算法解决此问题吗？

### 解法

解题思路：数组内置函数，`split` 将 `nums1` 第 `m` 位后面的删除并将 `nums2` 插入，再通过 `sort` 进行排序

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 从 m 开始移除, 移除个数为 总长度 - m
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
};
```

解题思路：双指针，从前往后

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let copyArray = Array.from(nums1), n1 = 0, n2 = 0, cur
  while (n1 < m || n2 < n) {
    if (n1 === m) {
      // 当n1 === m 时, nums1[n1]为0, 由于 0 为占位符, 所以此处特殊处理
      cur = nums2[n2++]
    } else if (n2 === n) {
      // n2 === n 同理, 如果超过 n, 则 n2 会一直加一, 造成死循环
      cur = copyArray[n1++]
    } else if (copyArray[n1] <= nums2[n2]) {
      // 如果 nums1[n1] 小于 nums2[n2], 则取 nums[n1], 否则取 nums2[n2]
      // 由于 n1++ 会得到 n1 后才会 n1 = n1 + 1, 所以此处可以省略为 nums1[n1++], 即等于 nums1[n1]; n1++
      cur = copyArray[n1++]
    } else {
      cur = nums2[n2++]
    }
    // 减一是由于上面逻辑中n1++ / n2++ 已经加了一
    nums1[n1 + n2 - 1] = cur
  }
};
```

解题思路：双指针，从后往前，`nums1` 有足够空间，所以从后往前排序并不会覆盖交错

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let n1 = m - 1, n2 = n - 1, cur, total = nums1.length - 1
  while (n1 >= 0 || n2 >= 0) {
    if (n1 === -1) {
      cur = nums2[n2--]
    } else if (n2 === -1) {
      cur = nums1[n1--]
    } else if (nums1[n1] <= nums2[n2]) {
      cur = nums2[n2--]
    } else {
      cur = nums1[n1--]
    }
    nums1[total--] = cur
  }
};
```

