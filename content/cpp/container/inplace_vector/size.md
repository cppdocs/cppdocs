---
title: "std::inplace_vector<T,N>::size"
source_path: "cpp/container/inplace_vector/size"
category: "container"
since: "C++26"
---

Returns the number of elements in the container, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
constexpr size_type size() const;
```
_(since C++26)_

## Return value
The number of elements in the container.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<int, 4> nums;
    assert(nums.size() == 0);
    nums = {1, 2, 3, 4};
    assert(nums.size() == 4);
}
```

## See also
- [capacity](/cpp/container/inplace_vector/capacity/)
- [empty](/cpp/container/inplace_vector/empty/)
- [max_size](/cpp/container/inplace_vector/max_size/)
- [resize](/cpp/container/inplace_vector/resize/)
- [sizessize](/cpp/iterator/size/)
