---
title: "std::endian"
source_path: "cpp/types/endian"
header: "<bit>"
category: "types"
since: "C++20"
---

Indicates the [endianness](https://en.wikipedia.org/wiki/Endianness#Overview) of all [scalar types](/cpp/language/type-id/):

## Declarations
```cpp
enum class endian
{
little = /* implementation-defined */,
big = /* implementation-defined */,
native = /* implementation-defined */,
};
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_endian
201907L
(C++20)
std::endian

## Example
```cpp
#include <bit>
#include <iostream>
 
int main()
{
    if constexpr (std::endian::native == std::endian::big)
        std::cout << "big-endian\n";
    else if constexpr (std::endian::native == std::endian::little)
        std::cout << "little-endian\n";
    else
        std::cout << "mixed-endian\n";
}
```

## See also
- [byteswap](/cpp/numeric/byteswap/)
- [C documentation](/c/numeric/endian/)
