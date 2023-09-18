"""
Find K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
 

Constraints:

1 <= k <= arr.length
1 <= arr.length <= 104
arr is sorted in ascending order.
-104 <= arr[i], x <= 104
"""

import heapq


class Solution:
    def findClosestElements(self, arr: list[int], k: int, x: int) -> list[int]:
        heap = []
        for num in arr:
            distance = abs(num - x)
            heapq.heappush(heap, (-distance, -num))
            if len(heap) > k:
                heapq.heappop(heap)

        return sorted([-pair[1] for pair in heap])


print(Solution().findClosestElements([1, 2, 3, 4, 5], 4, -1))
