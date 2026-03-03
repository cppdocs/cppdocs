---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::size"
source_path: "cpp/container/unordered_map/size"
category: "container"
since: "C++11"
---

Returns the number of elements in the container, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
size_type size() const noexcept;
```
_(since C++11)_

## Return value
The number of elements in the container.

## Example
```cpp
#include <cassert>
#include <unordered_map>
 
int main()
{
    std::unordered_map<int, char> nums{{1, 'a'}, {1, 'b'}, {2, 'c'}, {2, 'd'}};
    assert(nums.size() == 2); 
}
```

## See also
- [empty](/cpp/container/unordered_map/empty/)
- [max_size](/cpp/container/unordered_map/max_size/)
- [sizessize](/cpp/iterator/size/)
