---
title: "std::list<T,Allocator>::sort"
source_path: "cpp/container/list/sort"
category: "container"
---

Sorts the elements and preserves the order of equivalent elements. No references or iterators become invalidated.

## Declarations
```cpp
void sort();
```

```cpp
template< class Compare >
void sort( Compare comp );
```

## Parameters
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type list<T,Allocator>::const_iterator can be dereferenced and then implicitly converted to both of them.

## Return value
(none)

## Notes
[std::sort](/cpp/algorithm/sort/) requires random access iterators and so cannot be used with list. This function also differs from [std::sort](/cpp/algorithm/sort/) in that it does not require the element type of the list to be swappable, preserves the values of all iterators, and performs a stable sort.

## Example
```cpp
#include <functional>
#include <iostream>
#include <list>
 
std::ostream& operator<<(std::ostream& ostr, const std::list<int>& list)
{
    for (const int i : list)
        ostr << ' ' << i;
    return ostr;
}
 
int main()
{
    std::list<int> list{8, 7, 5, 9, 0, 1, 3, 2, 6, 4};
    std::cout << "initially: " << list << '\n';
 
    list.sort();
    std::cout << "ascending: " << list << '\n';
 
    list.sort(std::greater<int>());
    std::cout << "descending:" << list << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1207 | C++98 | it was unclear whether iterators and/or references will be invalidated | keep valid |

## See also
- [reverse](/cpp/container/list/reverse/)
