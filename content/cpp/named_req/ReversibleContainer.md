---
title: "C++ named requirements: ReversibleContainer"
source_path: "cpp/named_req/ReversibleContainer"
category: "named_req"
---

A ReversibleContainer is a [Container](/cpp/named_req/container/) that has iterators that meet the requirements of either [LegacyBidirectionalIterator](/cpp/named_req/bidirectionaliterator/) or [LegacyRandomAccessIterator](/cpp/named_req/randomaccessiterator/). Such iterators allow a ReversibleContainer to be iterated over in reverse.

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v = {3, 1, 4, 1, 5, 9};
 
    for (std::vector<int>::const_reverse_iterator i{v.crbegin()}; i != v.crend(); ++i)
        std::cout << *i << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2105 | C++98 | typename X::const_reverse_iterator wasrequired to be an iterator type of value type const T | required to be a constantiterator type of value type T |
