---
title: "std::byteswap"
source_path: "cpp/numeric/byteswap"
header: "<bit>"
category: "numeric"
since: "C++23"
---

Reverses the bytes in the given integer value n.

## Declarations
```cpp
template< class T >
constexpr T byteswap( T n ) noexcept;
```
_(since C++23)_

## Parameters
- `n`: integer value

## Return value
An integer value of type T whose object representation comprises the bytes of that of n in reversed order.

## Notes
This function is useful for processing data of different endianness.

## Example
```cpp
#include <bit>
#include <concepts>
#include <cstdint>
#include <iomanip>
#include <iostream>
 
template<std::integral T>
void dump(T v, char term = '\n')
{
    std::cout << std::hex << std::uppercase << std::setfill('0')
              << std::setw(sizeof(T) * 2) << v << " : ";
    for (std::size_t i{}; i != sizeof(T); ++i, v >>= 8)
        std::cout << std::setw(2) << static_cast<unsigned>(T(0xFF) & v) << ' ';
    std::cout << std::dec << term;
}
 
int main()
{
    static_assert(std::byteswap('a') == 'a');
 
    std::cout << "byteswap for U16:\n";
    constexpr auto x = std::uint16_t(0xCAFE);
    dump(x);
    dump(std::byteswap(x));
 
    std::cout << "\nbyteswap for U32:\n";
    constexpr auto y = std::uint32_t(0xDEADBEEFu);
    dump(y);
    dump(std::byteswap(y));
 
    std::cout << "\nbyteswap for U64:\n";
    constexpr auto z = std::uint64_t{0x0123456789ABCDEFull};
    dump(z);
    dump(std::byteswap(z));
}
```

## See also
- [endian](/cpp/types/endian/)
- [rotl](/cpp/numeric/rotl/)
- [rotr](/cpp/numeric/rotr/)
