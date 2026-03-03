---
title: "std::inplace_merge"
source_path: "cpp/algorithm/inplace_merge"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Merges two consecutive sorted ranges [first,middle) and [middle,last) into one sorted range [first,last).

## Declarations
```cpp
template< class BidirIt >
void inplace_merge( BidirIt first, BidirIt middle, BidirIt last );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class BidirIt >
void inplace_merge( ExecutionPolicy&& policy,
BidirIt first, BidirIt middle, BidirIt last );
```
_(since C++17)_

```cpp
template< class BidirIt, class Compare >
void inplace_merge( BidirIt first, BidirIt middle, BidirIt last,
Compare comp );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class BidirIt, class Compare >
void inplace_merge( ExecutionPolicy&& policy,
BidirIt first, BidirIt middle, BidirIt last,
Compare comp );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the first sorted range
- `middle`: the end of the first sorted range and the beginning of the second
- `last`: the end of the second sorted range
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type BidirIt can be dereferenced and then implicitly converted to both of them.

## Notes
This function attempts to allocate a temporary buffer. If the allocation fails, the less efficient algorithm is chosen.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
template<class Iter>
void merge_sort(Iter first, Iter last)
{
    if (last - first > 1)
    {
        Iter middle = first + (last - first) / 2;
        merge_sort(first, middle);
        merge_sort(middle, last);
        std::inplace_merge(first, middle, last);
    }
}
 
int main()
{
    std::vector<int> v{8, 2, -2, 0, 11, 11, 1, 7, 3};
    merge_sort(v.begin(), v.end());
    for (const auto& n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [merge](/cpp/algorithm/merge/)
- [sort](/cpp/algorithm/sort/)
- [stable_sort](/cpp/algorithm/stable_sort/)
- [ranges::inplace_merge](/cpp/algorithm/ranges/inplace_merge/)
