---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::max_size"
source_path: "cpp/container/unordered_multimap/max_size"
category: "container"
since: "C++11"
---

Returns the maximum number of elements the container is able to hold due to system or library implementation limitations, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()) for the largest container.

## Declarations
```cpp
size_type max_size() const noexcept;
```
_(since C++11)_

## Return value
Maximum number of elements.

## Notes
This value typically reflects the theoretical limit on the size of the container, at most [std::numeric_limits](/cpp/types/numeric_limits/)<difference_type>::max(). At runtime, the size of the container may be limited to a value smaller than max_size() by the amount of RAM available.

## Example
```cpp
#include <iostream>
#include <locale>
#include <unordered_map>
 
int main()
{
    std::unordered_multimap<char, char> p;
    std::unordered_multimap<long, char> q;
 
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << std::uppercase
              << "p.max_size() = " << std::dec << p.max_size() << " = 0x"
              << std::hex << p.max_size() << '\n'
              << "q.max_size() = " << std::dec << q.max_size() << " = 0x"
              << std::hex << q.max_size() << '\n';
}
```

## See also
- [size](/cpp/container/unordered_multimap/size/)
