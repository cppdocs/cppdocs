---
title: "std::deque<T,Allocator>::size"
source_path: "cpp/container/deque/size"
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
#include <deque>
#include <iostream>
 
int main()
{ 
    std::deque<int> nums{1, 3, 5, 7};
 
    std::cout << "nums contains " << nums.size() << " elements.\n";
}
```

## See also
- [empty](/cpp/container/deque/empty/)
- [max_size](/cpp/container/deque/max_size/)
- [resize](/cpp/container/deque/resize/)
- [sizessize](/cpp/iterator/size/)
