---
title: "std::sort"
source_path: "cpp/algorithm/sort"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Sorts the elements in the range [first,last) in non-descending order. The order of equal elements is not guaranteed to be preserved.

## Declarations
```cpp
template< class RandomIt >
void sort( RandomIt first, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt >
void sort( ExecutionPolicy&& policy,
RandomIt first, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
void sort( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
void sort( ExecutionPolicy&& policy,
RandomIt first, RandomIt last, Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to sort
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Notes
Before [LWG713](https://cplusplus.github.io/LWG/issue713), the complexity requirement allowed sort() to be implemented using only [Quicksort](https://en.wikipedia.org/wiki/Quicksort), which may need \(\scriptsize O(N^2)\)O(N2) comparisons in the worst case.

[Introsort](https://en.wikipedia.org/wiki/Introsort) can handle all cases with \(\scriptsize O(N \cdot \log(N))\)O(N·log(N)) comparisons (without incurring additional overhead in the average case), and thus is usually used for implementing sort().

libc++ has not implemented the corrected time complexity requirement [until LLVM 14](https://reviews.llvm.org/D113413).

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iostream>
#include <string_view>
 
int main()
{
    std::array<int, 10> s{5, 7, 4, 2, 8, 6, 1, 9, 0, 3};
 
    auto print = [&s](std::string_view const rem)
    {
        for (auto a : s)
            std::cout << a << ' ';
        std::cout << ": " << rem << '\n';
    };
 
    std::sort(s.begin(), s.end());
    print("sorted with the default operator<");
 
    std::sort(s.begin(), s.end(), std::greater<int>());
    print("sorted with the standard library compare function object");
 
    struct
    {
        bool operator()(int a, int b) const { return a < b; }
    }
    customLess;
 
    std::sort(s.begin(), s.end(), customLess);
    print("sorted with a custom function object");
 
    std::sort(s.begin(), s.end(), [](int a, int b)
                                  {
                                      return a > b;
                                  });
    print("sorted with a lambda expression");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 713 | C++98 | the \(\scriptsize O(N \cdot \log(N))\)O(N·log(N)) time complexity was only required on the average | it is required for the worst case |

## See also
- [partial_sort](/cpp/algorithm/partial_sort/)
- [stable_sort](/cpp/algorithm/stable_sort/)
- [ranges::sort](/cpp/algorithm/ranges/sort/)
