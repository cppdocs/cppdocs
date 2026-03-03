---
title: "std::flat_set<Key,Compare,KeyContainer>::extract"
source_path: "cpp/container/flat_set/extract"
category: "container"
since: "C++23"
---

Extracts adapted container [c](/cpp/container/flat_set/#Member_objects). Equivalent to return std::move(c);.

## Declarations
```cpp
container_type extract() &&;
```
_(since C++23)_

## Return value
std::move(c).

## Example
```cpp
#include <cassert>
#include <flat_set>
#include <print>
#include <type_traits>
#include <vector>
 
int main()
{
    std::flat_set<int> set{1, 2, 3};
    const auto size = set.size();
 
    auto c = set.extract();
    assert(c.size() == size);
    assert(set.empty());
    assert(set.keys().empty());
    assert(set.values().empty());
 
    // The default keys container is std::vector:
    static_assert(std::is_same_v<decltype(c), std::vector<int>>);
 
    std::println("{}", c);
}
```

## See also
- [replace](/cpp/container/flat_set/replace/)
