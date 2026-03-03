---
title: "std::vector<T,Allocator>::size"
source_path: "cpp/container/vector/size"
category: "container"
---

Returns the number of elements in the container, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
size_type size() const;
```
_(noexcept since C++11)(constexpr since C++20)_

## Return value
The number of elements in the container.

## Example
```cpp
#include <cassert>
#include <vector>
 
int main()
{
    std::vector<int> nums;
    assert(nums.size() == 0);
    nums = {1, 2, 3, 4};
    assert(nums.size() == 4);
}
```

## See also
- [capacity](/cpp/container/vector/capacity/)
- [empty](/cpp/container/vector/empty/)
- [max_size](/cpp/container/vector/max_size/)
- [resize](/cpp/container/vector/resize/)
- [sizessize](/cpp/iterator/size/)
