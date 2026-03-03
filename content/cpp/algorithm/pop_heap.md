---
title: "std::pop_heap"
source_path: "cpp/algorithm/pop_heap"
header: "<algorithm>"
category: "algorithm"
---

Swaps the value in the position first and the value in the position last - 1 and makes the subrange [first,last - 1) into a heap. This has the effect of removing the first element from the [heap](/cpp/algorithm/#Heap_operations) [first,last).

## Declarations
```cpp
template< class RandomIt >
void pop_heap( RandomIt first, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class RandomIt, class Compare >
void pop_heap( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the non-empty heap to modify
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string_view>
#include <type_traits>
#include <vector>
 
void println(std::string_view rem, const auto& v)
{
    std::cout << rem;
    if constexpr (std::is_scalar_v<std::decay_t<decltype(v)>>)
        std::cout << v;
    else
        for (int e : v)
            std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9};
 
    std::make_heap(v.begin(), v.end());
    println("after make_heap: ", v);
 
    std::pop_heap(v.begin(), v.end()); // moves the largest to the end
    println("after pop_heap:  ", v);
 
    int largest = v.back();
    println("largest element: ", largest);
 
    v.pop_back(); // actually removes the largest element
    println("after pop_back:  ", v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1205 | C++98 | the behavior was unclear if [first, last) is empty | the behavior is undefined in this case |

## See also
- [push_heap](/cpp/algorithm/push_heap/)
- [is_heap](/cpp/algorithm/is_heap/)
- [is_heap_until](/cpp/algorithm/is_heap_until/)
- [make_heap](/cpp/algorithm/make_heap/)
- [sort_heap](/cpp/algorithm/sort_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
