---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::insert_range"
source_path: "cpp/container/unordered_multiset/insert_range"
category: "container"
since: "C++23"
---

Inserts a copy of each element in the range rg.

## Declarations
```cpp
template< container-compatible-range<value_type> R >
void insert_range( R&& rg );
```
_(since C++23)_

## Parameters
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion

## Example
```cpp
#include <iostream>
#include <unordered_set>
 
void println(auto, auto const& container)
{
    for (const auto& elem : container)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    auto container = std::unordered_multiset{1, 3, 2, 4};
    const auto rg = {-1, 3, -2};
#ifdef __cpp_lib_containers_ranges
    container.insert_range(rg);
#else
    container.insert(rg.begin(), rg.end());
#endif
    println("{}", container);
}
```

## See also
- [insert](/cpp/container/unordered_multiset/insert/)
