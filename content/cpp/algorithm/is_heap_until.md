---
title: "std::is_heap_until"
source_path: "cpp/algorithm/is_heap_until"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Examines the range [first,last) and finds the largest range beginning at first which is a [heap](/cpp/algorithm/#Heap_operations).

## Declarations
```cpp
template< class RandomIt >
RandomIt is_heap_until( RandomIt first, RandomIt last );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt >
RandomIt is_heap_until( ExecutionPolicy&& policy,
RandomIt first, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
RandomIt is_heap_until( RandomIt first, RandomIt last, Compare comp );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
RandomIt is_heap_until( ExecutionPolicy&& policy,
RandomIt first, RandomIt last, Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Return value
The last iterator it for which range [first,it) is a heap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9};
 
    std::make_heap(v.begin(), v.end());
 
    // probably mess up the heap
    v.push_back(2);
    v.push_back(6);
 
    auto heap_end = std::is_heap_until(v.begin(), v.end());
 
    std::cout << "all of v:  ";
    for (const auto& i : v)
        std::cout << i << ' ';
    std::cout << '\n';
 
    std::cout << "only heap: ";
    for (auto i = v.begin(); i != heap_end; ++i)
        std::cout << *i << ' ';
    std::cout << '\n';
}
```

## See also
- [is_heap](/cpp/algorithm/is_heap/)
- [make_heap](/cpp/algorithm/make_heap/)
- [push_heap](/cpp/algorithm/push_heap/)
- [pop_heap](/cpp/algorithm/pop_heap/)
- [sort_heap](/cpp/algorithm/sort_heap/)
- [ranges::is_heap_until](/cpp/algorithm/ranges/is_heap_until/)
