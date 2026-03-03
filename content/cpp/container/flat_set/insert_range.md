---
title: "std::flat_set<Key,Compare,KeyContainer>::insert_range"
source_path: "cpp/container/flat_set/insert_range"
category: "container"
since: "C++23"
---

Inserts a copy of each element in the range rg into underlying container [c](/cpp/container/flat_set/#Member_objects) as if by:

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
Since insert_range performs an in-place merge operation, that may allocate memory.

## Example
```cpp
#include <iostream>
#include <flat_set>
 
void println(auto, auto const& container)
{
    for (const auto& elem : container)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    auto container = std::flat_set{1, 3, 2, 4};
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
- [insert](/cpp/container/flat_set/insert/)
