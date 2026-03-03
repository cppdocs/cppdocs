---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::replace"
source_path: "cpp/container/flat_map/replace"
category: "container"
since: "C++23"
---

Replaces the underlying containers [c](/cpp/container/flat_map/#Member_objects). Equivalent to:

## Declarations
```cpp
void replace( key_container_type&& key_cont, mapped_container_type&& mapped_cont );
```
_(since C++23)_

## Parameters
- `keys_cont`: a sorted keys container of type KeyContainer, the contents of which will be moved into *this
- `mapped_cont`: a container of mapped values of type MappedContainer, the contents of which will be moved into *this

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <flat_map>
#include <print>
#include <vector>
 
int main()
{
    std::vector<int> keys{1, 2, 3};
    assert(std::ranges::is_sorted(keys));
    std::vector<double> values{2.2, 3.3, 1.1};
    assert(keys.size() == values.size());
 
    std::flat_map<int, double> map;
    assert(map.empty());
 
    map.replace(keys, values);
    assert(map.size() == 3);
    assert(map.keys() == 3);
    assert(map.values() == 3);
    assert(keys.empty());
    assert(values.empty());
 
    std::println("{}", map);
}
```

## See also
- [extract](/cpp/container/flat_map/extract/)
