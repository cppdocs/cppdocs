---
title: "std::multimap<Key,T,Compare,Allocator>::size"
source_path: "cpp/container/multimap/size"
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
#include <map>
 
int main()
{
    std::multimap<int, char> nums{{1, 'a'}, {1, 'b'}, {2, 'c'}, {2, 'd'}};
    assert(nums.size() == 4); 
}
```

## See also
- [empty](/cpp/container/multimap/empty/)
- [max_size](/cpp/container/multimap/max_size/)
- [sizessize](/cpp/iterator/size/)
