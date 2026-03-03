---
title: "std::map<Key,T,Compare,Allocator>::size"
source_path: "cpp/container/map/size"
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
    std::map<int, char> nums{{1, 'a'}, {1, 'b'}, {2, 'c'}, {2, 'd'}};
    assert(nums.size() == 2); 
}
```

## See also
- [empty](/cpp/container/map/empty/)
- [max_size](/cpp/container/map/max_size/)
- [sizessize](/cpp/iterator/size/)
