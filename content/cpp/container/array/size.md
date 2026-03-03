---
title: "std::array<T,N>::size"
source_path: "cpp/container/array/size"
category: "container"
since: "C++11"
---

Returns the number of elements in the container, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
constexpr size_type size() const noexcept;
```
_(since C++11)_

## Return value
The number of elements in the container.

## Example
```cpp
#include <array>
#include <iostream>
 
int main()
{ 
    std::array<int, 4> nums{1, 3, 5, 7};
 
    std::cout << "nums contains " << nums.size() << " elements.\n";
}
```

## See also
- [empty](/cpp/container/array/empty/)
- [max_size](/cpp/container/array/max_size/)
- [sizessize](/cpp/iterator/size/)
