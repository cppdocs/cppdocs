---
title: "std::flat_multiset<Key,Compare,KeyContainer>::max_size"
source_path: "cpp/container/flat_multiset/max_size"
category: "container"
since: "C++23"
---

Returns the maximum number of elements the container is able to hold due to system or library implementation limitations, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()) for the largest container.

## Declarations
```cpp
size_type max_size() const noexcept;
```
_(since C++23)_

## Return value
Maximum number of elements.

## Notes
This value typically reflects the theoretical limit on the size of the container, at most [std::numeric_limits](/cpp/types/numeric_limits/)<difference_type>::max(). At runtime, the size of the container may be limited to a value smaller than max_size() by the amount of RAM available.

## Example
```cpp
#include <iostream>
#include <flat_set>
#include <locale>
 
int main()
{
    std::flat_multiset<char> q;
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << "Maximum size of a std::flat_multiset is " << q.max_size() << '\n';
}
```

## See also
- [size](/cpp/container/flat_multiset/size/)
