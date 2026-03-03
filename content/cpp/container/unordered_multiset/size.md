---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::size"
source_path: "cpp/container/unordered_multiset/size"
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
    std::unordered_multiset<int> nums{4, 2, 4, 2};
    assert(nums.size() == 4);
}
```

## See also
- [empty](/cpp/container/unordered_multiset/empty/)
- [max_size](/cpp/container/unordered_multiset/max_size/)
- [sizessize](/cpp/iterator/size/)
