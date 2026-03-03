---
title: "std::sort_heap"
source_path: "cpp/algorithm/sort_heap"
header: "<algorithm>"
category: "algorithm"
---

Converts the [heap](/cpp/algorithm/#Heap_operations) [first,last) into a sorted range. The heap property is no longer maintained.

## Declarations
```cpp
template< class RandomIt >
void sort_heap( RandomIt first, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class RandomIt, class Compare >
void sort_heap( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the heap to be sorted
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string_view>
#include <vector>
 
void println(std::string_view fmt, const auto& v)
{
    for (std::cout << fmt; const auto &i : v)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9};
 
    std::make_heap(v.begin(), v.end());
    println("after make_heap, v: ", v);
 
    std::sort_heap(v.begin(), v.end());
    println("after sort_heap, v: ", v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2444 | C++98 | at most \(\scriptsize N \cdot \log(N)\)N⋅log(N) comparisons were allowed | increased to \(\scriptsize 2N \cdot \log(N)\)2N⋅log(N) |

## See also
- [is_heap](/cpp/algorithm/is_heap/)
- [is_heap_until](/cpp/algorithm/is_heap_until/)
- [make_heap](/cpp/algorithm/make_heap/)
- [pop_heap](/cpp/algorithm/pop_heap/)
- [push_heap](/cpp/algorithm/push_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
