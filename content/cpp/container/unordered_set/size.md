---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::size"
source_path: "cpp/container/unordered_set/size"
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
#include <unordered_set>
 
int main()
{
    std::unordered_set<int> nums{4, 2, 4, 2};
    assert(nums.size() == 2);
}
```

## See also
- [empty](/cpp/container/unordered_set/empty/)
- [max_size](/cpp/container/unordered_set/max_size/)
- [sizessize](/cpp/iterator/size/)
