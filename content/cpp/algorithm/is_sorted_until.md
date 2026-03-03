---
title: "std::is_sorted_until"
source_path: "cpp/algorithm/is_sorted_until"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Examines the range [first,last) and finds the largest range beginning at first in which the elements are sorted in non-descending order.

## Declarations
```cpp
template< class ForwardIt >
ForwardIt is_sorted_until( ForwardIt first, ForwardIt last );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt is_sorted_until( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class ForwardIt, class Compare >
ForwardIt is_sorted_until( ForwardIt first, ForwardIt last,
Compare comp );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Compare >
ForwardIt is_sorted_until( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to both of them.

## Return value
The upper bound of the largest range beginning at first in which the elements are sorted in ascending order. That is, the last iterator it for which range [first,it) is sorted.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <iostream>
#include <iterator>
#include <random>
#include <string>
 
int main()
{
    std::random_device rd;
    std::mt19937 g(rd());
    const int N = 6;
    int nums[N] = {3, 1, 4, 1, 5, 9};
 
    const int min_sorted_size = 4;
 
    for (int sorted_size = 0; sorted_size < min_sorted_size;)
    {
        std::shuffle(nums, nums + N, g);
        int *const sorted_end = std::is_sorted_until(nums, nums + N);
        sorted_size = std::distance(nums, sorted_end);
        assert(sorted_size >= 1);
 
        for (const auto i : nums)
            std::cout << i << ' ';
        std::cout << ": " << sorted_size << " initial sorted elements\n"
                  << std::string(sorted_size * 2 - 1, '^') << '\n';
    }
}
```

## See also
- [is_sorted](/cpp/algorithm/is_sorted/)
- [ranges::is_sorted_until](/cpp/algorithm/ranges/is_sorted_until/)
