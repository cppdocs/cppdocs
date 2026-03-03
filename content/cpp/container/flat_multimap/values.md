---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::values"
source_path: "cpp/container/flat_multimap/values"
category: "container"
since: "C++23"
---

Return a constant reference to the adapted values container. Equivalent to return c.values;.

## Declarations
```cpp
const mapped_container_type& values() const noexcept;
```
_(since C++23)_

## Return value
The underlying values container.

## Example
```cpp
#include <flat_map>
#include <print>
#include <type_traits>
#include <vector>
 
int main()
{
    std::flat_multimap<int, double> map{{1, 1.1}, {2, 2.2}, {3, 3.3}};
 
    // The default values container is std::vector:
    static_assert(std::is_same_v<decltype(map.values()), const std::vector<int>&>);
 
    std::println("{}", map.values());
}
```

## See also
- [keys](/cpp/container/flat_multimap/keys/)
