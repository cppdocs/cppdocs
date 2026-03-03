---
title: "std::array<T,N>::max_size"
source_path: "cpp/container/array/max_size"
category: "container"
since: "C++11"
---

Returns the maximum number of elements the container is able to hold.

## Declarations
```cpp
constexpr size_type max_size() const noexcept;
```
_(since C++11)_

## Return value
Maximum number of elements, i.e. N.

## Notes
Because each [std::array](/cpp/container/array/)<T, N> is a fixed-size container, the value returned by max_size equals N (which is also the value returned by [size()](/cpp/container/array/size/)).

## Example
```cpp
#include <iostream>
#include <locale>
#include <array>
 
int main()
{
    std::array<char, 10> p;
    std::array<long, 10> q;
 
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << std::uppercase
              << "p.max_size() = " << std::dec << p.max_size() << " = 0x"
              << std::hex << p.max_size() << '\n'
              << "q.max_size() = " << std::dec << q.max_size() << " = 0x"
              << std::hex << q.max_size() << '\n';
}
```

## See also
- [size](/cpp/container/array/size/)
