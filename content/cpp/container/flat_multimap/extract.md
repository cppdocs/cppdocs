---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::extract"
source_path: "cpp/container/flat_multimap/extract"
category: "container"
since: "C++23"
---

Extracts adapted containers [c](/cpp/container/flat_multimap/#Member_objects). Equivalent to return std::move(c);.

## Declarations
```cpp
containers extract() &&;
```
_(since C++23)_

## Return value
std::move(c).

## Example
```cpp
#include <cassert>
#include <flat_map>
#include <print>
#include <type_traits>
#include <vector>
 
int main()
{
    std::flat_multimap<int, double> map{{1, 1.1}, {2, 2.2}, {3, 3.3}};
    const auto size = map.size();
 
    auto c = map.extract();
    assert(c.keys.size() == size);
    assert(c.values.size() == size);
    assert(map.empty());
    assert(map.keys().empty());
    assert(map.values().empty());
 
    // The default keys and values containers are std::vector:
    static_assert(std::is_same_v<decltype(c.keys), std::vector<int>>);
    static_assert(std::is_same_v<decltype(c.value), std::vector<int>>);
 
    std::println("keys: {}", c.keys);
    std::println("values: {}", c.values);
}
```

## See also
- [replace](/cpp/container/flat_multimap/replace/)
