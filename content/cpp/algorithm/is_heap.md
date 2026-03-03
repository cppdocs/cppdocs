---
title: "std::is_heap"
source_path: "cpp/algorithm/is_heap"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Checks whether [first,last) is a [heap](/cpp/algorithm/#Heap_operations).

## Declarations
```cpp
template< class RandomIt >
bool is_heap( RandomIt first, RandomIt last );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt >
bool is_heap( ExecutionPolicy&& policy,
RandomIt first, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
bool is_heap( RandomIt first, RandomIt last, Compare comp );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
bool is_heap( ExecutionPolicy&& policy,
RandomIt first, RandomIt last, Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range to be checked
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Return value
true if the range is a heap with respect to the corresponding comparator, false otherwise.

## Example
```cpp
#include <algorithm>
#include <bit>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9};
 
    std::cout << "initially, v:\n";
    for (const auto& i : v)
        std::cout << i << ' ';
    std::cout << '\n';
 
    if (!std::is_heap(v.begin(), v.end()))
    {
        std::cout << "making heap...\n";
        std::make_heap(v.begin(), v.end());
    }
 
    std::cout << "after make_heap, v:\n";
    for (auto t{1U}; const auto& i : v)
        std::cout << i << (std::has_single_bit(++t) ? " | " : " ");
    std::cout << '\n';
}
```

## See also
- [is_heap_until](/cpp/algorithm/is_heap_until/)
- [make_heap](/cpp/algorithm/make_heap/)
- [push_heap](/cpp/algorithm/push_heap/)
- [pop_heap](/cpp/algorithm/pop_heap/)
- [sort_heap](/cpp/algorithm/sort_heap/)
- [ranges::is_heap](/cpp/algorithm/ranges/is_heap/)
