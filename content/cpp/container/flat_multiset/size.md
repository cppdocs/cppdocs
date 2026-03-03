---
title: "std::flat_multiset<Key,Compare,KeyContainer>::size"
source_path: "cpp/container/flat_multiset/size"
category: "container"
since: "C++23"
---

Returns the number of elements in the container adaptor. Equivalent to: return[c](/cpp/container/flat_multiset/#Member_objects).size().

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
#include <flat_set>
 
int main()
{
    std::flat_multiset<int> nums{4, 2, 4, 2};
    assert(nums.size() == 4);
}
```

## See also
- [empty](/cpp/container/flat_multiset/empty/)
- [sizessize](/cpp/iterator/size/)
- [max_size](/cpp/container/flat_multiset/max_size/)
