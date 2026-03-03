---
title: "std::make_heap"
source_path: "cpp/algorithm/make_heap"
header: "<algorithm>"
category: "algorithm"
---

Constructs a [heap](/cpp/algorithm/#Heap_operations) in the range [first,last).

## Declarations
```cpp
template< class RandomIt >
void make_heap( RandomIt first, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class RandomIt, class Compare >
void make_heap( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the range to make the heap from
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <string_view>
#include <vector>
 
void print(std::string_view text, const std::vector<int>& v = {})
{
    std::cout << text << ": ";
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    print("Max heap");
 
    std::vector<int> v{3, 2, 4, 1, 5, 9};
    print("initially, v", v);
 
    std::make_heap(v.begin(), v.end());
    print("after make_heap, v", v);
 
    std::pop_heap(v.begin(), v.end());
    print("after pop_heap, v", v);
 
    auto top = v.back();
    v.pop_back();
    print("former top element", {top});
    print("after removing the former top element, v", v);
 
    print("\nMin heap");
 
    std::vector<int> v1{3, 2, 4, 1, 5, 9};
    print("initially, v1", v1);
 
    std::make_heap(v1.begin(), v1.end(), std::greater<>{});
    print("after make_heap, v1", v1);
 
    std::pop_heap(v1.begin(), v1.end(), std::greater<>{});
    print("after pop_heap, v1", v1);
 
    auto top1 = v1.back();
    v1.pop_back();
    print("former top element", {top1});
    print("after removing the former top element, v1", v1);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3032 | C++98 | the elements of [first, last) was not required to be swappable | required |

## See also
- [is_heap](/cpp/algorithm/is_heap/)
- [is_heap_until](/cpp/algorithm/is_heap_until/)
- [push_heap](/cpp/algorithm/push_heap/)
- [pop_heap](/cpp/algorithm/pop_heap/)
- [sort_heap](/cpp/algorithm/sort_heap/)
- [priority_queue](/cpp/container/priority_queue/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
