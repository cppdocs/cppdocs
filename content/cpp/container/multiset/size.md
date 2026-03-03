---
title: "std::multiset<Key,Compare,Allocator>::size"
source_path: "cpp/container/multiset/size"
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
    std::multiset<int> nums{4, 2, 4, 2};
    assert(nums.size() == 4);
}
```

## See also
- [empty](/cpp/container/multiset/empty/)
- [max_size](/cpp/container/multiset/max_size/)
- [sizessize](/cpp/iterator/size/)
