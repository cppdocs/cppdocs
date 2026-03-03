---
title: "std::push_heap"
source_path: "cpp/algorithm/push_heap"
header: "<algorithm>"
category: "algorithm"
---

Inserts the element at the position last - 1 into the [heap](/cpp/algorithm/#Heap_operations) [first,last - 1). The heap after the insertion will be [first,last).

## Declarations
```cpp
template< class RandomIt >
void push_heap( RandomIt first, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class RandomIt, class Compare >
void push_heap( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the range indicating the heap after the insertion
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string_view>
#include <vector>
 
void println(std::string_view rem, const std::vector<int>& v)
{
    std::cout << rem;
    for (int e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9};
 
    std::make_heap(v.begin(), v.end());
    println("after make_heap: ", v);
 
    v.push_back(6);
    println("after push_back: ", v);
 
    std::push_heap(v.begin(), v.end());
    println("after push_heap: ", v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3032 | C++98 | the elements of [first, last) was not required to be swappable | required |

## See also
- [is_heap](/cpp/algorithm/is_heap/)
- [is_heap_until](/cpp/algorithm/is_heap_until/)
- [make_heap](/cpp/algorithm/make_heap/)
- [pop_heap](/cpp/algorithm/pop_heap/)
- [sort_heap](/cpp/algorithm/sort_heap/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
