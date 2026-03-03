---
title: "std::list<T,Allocator>::size"
source_path: "cpp/container/list/size"
category: "container"
since: "C++11"
---

Returns the number of elements in the container, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
size_type size() const;
```
_(until C++11)_

```cpp
size_type size() const noexcept;
```
_(since C++11)_

## Return value
The number of elements in the container.

## Example
```cpp
#include <iostream>
#include <list>
 
int main()
{ 
    std::list<int> nums{1, 3, 5, 7};
 
    std::cout << "nums contains " << nums.size() << " elements.\n";
}
```

## See also
- [empty](/cpp/container/list/empty/)
- [max_size](/cpp/container/list/max_size/)
- [resize](/cpp/container/list/resize/)
