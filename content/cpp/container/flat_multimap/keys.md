---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::keys"
source_path: "cpp/container/flat_multimap/keys"
category: "container"
since: "C++23"
---

Return a constant reference to the adapted keys container. Equivalent to
return c.keys;.

## Declarations
```cpp
const key_container_type& keys() const noexcept;
```
_(since C++23)_

## Return value
The underlying keys container.

## Example
```cpp
#include <flat_map>
#include <print>
#include <type_traits>
#include <vector>
 
int main()
{
    std::flat_multimap<int, double> adaptor{{1, 1.1}, {2, 2.2}, {3, 3.3}};
 
    // The default keys container is std::vector:
    static_assert(std::is_same_v<decltype(adaptor.keys()), const std::vector<int>&>);
 
    std::println("{}", adaptor.keys());
}
```

## See also
- [values](/cpp/container/flat_multimap/values/)
