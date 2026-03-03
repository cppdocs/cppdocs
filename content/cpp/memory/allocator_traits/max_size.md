---
title: "std::allocator_traits<Alloc>::max_size"
source_path: "cpp/memory/allocator_traits/max_size"
header: "<memory>"
category: "memory"
---

If possible, obtains the maximum theoretically possible allocation size from the allocator a, by calling a.max_size().

## Declarations
```cpp
static size_type max_size( const Alloc& a ) noexcept;
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `a`: allocator to detect

## Return value
Theoretical maximum allocation size.

## Example
```cpp
#include <iostream>
#include <memory>
#include <locale>
 
int main()
{
    std::allocator<short> b;
    std::allocator<int> d;
 
    const auto p = std::allocator_traits<decltype(b)>::max_size(b);
    const auto q = std::allocator_traits<decltype(d)>::max_size(d);
 
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << std::uppercase
              << "p = " << std::dec << p << " = 0x" << std::hex << p << '\n'
              << "q = " << std::dec << q << " = 0x" << std::hex << q << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2162 | C++11 | max_size was not required to be noexcept | required |
| LWG 2466 | C++11 | theoretical maximum allocation size in bytes was returned as fallback | size in elements is returned |

## See also
- [max_size](/cpp/memory/allocator/max_size/)
