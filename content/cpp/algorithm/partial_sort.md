---
title: "std::partial_sort"
source_path: "cpp/algorithm/partial_sort"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Rearranges elements such that the range [first,middle) contains the sorted middle − first smallest elements in the range [first,last).

## Declarations
```cpp
template< class RandomIt >
void partial_sort( RandomIt first, RandomIt middle, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt >
void partial_sort( ExecutionPolicy&& policy,
RandomIt first, RandomIt middle, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
void partial_sort( RandomIt first, RandomIt middle, RandomIt last,
Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
void partial_sort( ExecutionPolicy&& policy,
RandomIt first, RandomIt middle, RandomIt last,
Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: random access iterators defining the range
- `middle`: random access iterator defining the one-past-the-end iterator of the range to be sorted
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Notes
The algorithm used is typically heap select to select the smallest elements, and heap sort to sort the selected elements in the heap in ascending order.

To select elements, a heap is used (see [heap](https://en.wikipedia.org/wiki/Heap_(data_structure)#Applications)). For example, for operator< as comparison function, max-heap is used to select middle − first smallest elements.

[Heap sort](https://en.wikipedia.org/wiki/Heapsort) is used after selection to sort [first,middle) selected elements (see [std::sort_heap](/cpp/algorithm/sort_heap/)).

std::partial_sort algorithms are intended to be used for small constant numbers of [first,middle) selected elements.

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iostream>
 
void print(const auto& s, int middle)
{
    for (int a : s)
        std::cout << a << ' ';
    std::cout << '\n';
    if (middle > 0)
    {
        while (middle-- > 0)
            std::cout << "--";
        std::cout << '^';
    }
    else if (middle < 0)
    {
        for (auto i = s.size() + middle; --i; std::cout << "  ")
        {}
 
        for (std::cout << '^'; middle++ < 0; std::cout << "--")
        {}
    }
    std::cout << '\n';
};
 
int main()
{
    std::array<int, 10> s{5, 7, 4, 2, 8, 6, 1, 9, 0, 3};
    print(s, 0);
    std::partial_sort(s.begin(), s.begin() + 3, s.end());
    print(s, 3);
    std::partial_sort(s.rbegin(), s.rbegin() + 4, s.rend());
    print(s, -4);
    std::partial_sort(s.rbegin(), s.rbegin() + 5, s.rend(), std::greater{});
    print(s, -5);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0896R4 | C++98 | [first, middle) and [middle, last)were not required to be valid ranges | the behavior is undefinedif any of them is invalid |

## See also
- [nth_element](/cpp/algorithm/nth_element/)
- [partial_sort_copy](/cpp/algorithm/partial_sort_copy/)
- [stable_sort](/cpp/algorithm/stable_sort/)
- [sort](/cpp/algorithm/sort/)
- [ranges::partial_sort](/cpp/algorithm/ranges/partial_sort/)
