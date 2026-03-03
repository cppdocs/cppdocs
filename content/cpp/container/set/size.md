---
title: "std::set<Key,Compare,Allocator>::size"
source_path: "cpp/container/set/size"
category: "container"
---

Returns the number of elements in the container, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
size_type size() const;
```
_(noexcept since C++11)_

## Return value
The number of elements in the container.

## Example
```cpp
#include <cassert>
#include <set>
 
int main()
{
    std::set<int> nums{4, 2, 4, 2};
    assert(nums.size() == 2);
}
```

## See also
- [empty](/cpp/container/set/empty/)
- [max_size](/cpp/container/set/max_size/)
- [sizessize](/cpp/iterator/size/)
