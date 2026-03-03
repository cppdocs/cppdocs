---
title: "std::as_bytes, std::as_writable_bytes"
source_path: "cpp/container/span/as_bytes"
header: "<span>"
category: "container"
since: "C++20"
---

Obtains a view to the object representation of the elements of the span s.

## Declarations
```cpp
template< class T, std::size_t N >
std::span<const std::byte, S/* see below */>
as_bytes( std::span<T, N> s ) noexcept;
```
_(since C++20)_

```cpp
template< class T, std::size_t N >
std::span<std::byte, S/* see below */>
as_writable_bytes( std::span<T, N> s ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <span>
 
void print(float const x, std::span<const std::byte> const bytes)
{
    std::cout << std::setprecision(6) << std::setw(8) << x << " = { "
              << std::hex << std::uppercase << std::setfill('0');
    for (auto const b : bytes)
        std::cout << std::setw(2) << std::to_integer<int>(b) << ' ';
    std::cout << std::dec << "}\n";
}
 
int main()
{
    /* mutable */ float data[1]{3.141592f};
 
    auto const const_bytes = std::as_bytes(std::span{data});
 
    print(data[0], const_bytes);
 
    auto const writable_bytes = std::as_writable_bytes(std::span{data});
 
    // Change the sign bit that is the MSB (IEEE 754 Floating-Point Standard).
    writable_bytes[3] |= std::byte{0B1000'0000};
 
    print(data[0], const_bytes);
}
```

## See also
- [start_lifetime_asstart_lifetime_as_array](/cpp/memory/start_lifetime_as/)
- [byte](/cpp/types/byte/)
