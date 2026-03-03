---
title: "std::inplace_vector<T,N>::max_size"
source_path: "cpp/container/inplace_vector/max_size"
category: "container"
since: "C++26"
---

Returns the maximum number of elements the container is able to hold.

## Declarations
```cpp
static constexpr size_type max_size() noexcept;
```
_(since C++26)_

## Return value
Maximum number of elements, i.e. N.

## Notes
Because each [std::inplace_vector](/cpp/container/inplace_vector/)<T, N> is a fixed-capacity container, the value returned by max_size equals N (which is also the value returned by capacity()).

## Example
```cpp
#include <iostream>
#include <locale>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<char, 10> p;
    std::inplace_vector<long, 10> q;
 
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << std::uppercase
              << "p.max_size() = " << std::dec << p.max_size() << " = 0x"
              << std::hex << p.max_size() << '\n'
              << "q.max_size() = " << std::dec << q.max_size() << " = 0x"
              << std::hex << q.max_size() << '\n';
}
```

## See also
- [size](/cpp/container/inplace_vector/size/)
- [capacity](/cpp/container/inplace_vector/capacity/)
