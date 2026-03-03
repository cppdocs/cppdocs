---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::size"
source_path: "cpp/container/flat_multimap/size"
category: "container"
since: "C++23"
---

Returns the number of elements in the container adaptor. Equivalent to: return[c](/cpp/container/flat_multimap/#Member_objects).keys.size().

## Declarations
```cpp
size_type size() const noexcept;
```
_(since C++23)_

## Return value
The number of elements in the container adaptor.

## Example
```cpp
#include <cassert>
#include <flat_map>
 
int main()
{
    std::flat_multimap<int, char> nums{{1, 'a'}, {1, 'b'}, {2, 'c'}, {2, 'd'}};
    assert(nums.size() == 4); 
}
```

## See also
- [empty](/cpp/container/flat_multimap/empty/)
- [sizessize](/cpp/iterator/size/)
- [max_size](/cpp/container/flat_multimap/max_size/)
