---
title: "std::flat_set<Key,Compare,KeyContainer>::replace"
source_path: "cpp/container/flat_set/replace"
category: "container"
since: "C++23"
---

Replaces the underlying container [c](/cpp/container/flat_set/#Member_objects). Equivalent to:
c = std::move(cont);.

## Declarations
```cpp
void replace( container_type&& cont );
```
_(since C++23)_

## Parameters
- `cont`: a sorted container of type KeyContainer, the contents of which will be moved into *this

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <flat_set>
#include <print>
#include <vector>
 
int main()
{
    std::vector<int> keys{1, 2, 3};
    assert(std::ranges::is_sorted(keys));
 
    std::flat_set<int> set;
    assert(set.empty());
 
    set.replace(keys);
    assert(set.size() == 3);
    assert(keys.empty());
 
    std::println("{}", set); // set.keys()
}
```

## See also
- [extract](/cpp/container/flat_set/extract/)
