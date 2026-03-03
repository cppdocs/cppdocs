---
title: "std::byte"
source_path: "cpp/types/byte"
header: "<cstddef>"
category: "types"
since: "C++17"
---

std::byte is a distinct type that implements the concept of byte as specified in the C++ language definition.

## Declarations
```cpp
enum class byte : unsigned char {};
```
_(since C++17)_

## Notes
A numeric value n can be converted to a byte value using std::byte{n}, due to C++17 [relaxed enum class initialization](/cpp/language/enum/#enum_relaxed_init_cpp17) rules.

A byte can be converted to a numeric value (such as to produce an integer hash of an object) the usual way with an [explicit conversion](/cpp/language/explicit_cast/) or alternatively with [std::to_integer](#Non-member_functions).

## Example
```cpp
#include <bitset>
#include <cassert>
#include <cstddef>
#include <iostream>
#include <utility>
 
std::ostream& operator<<(std::ostream& os, std::byte b)
{
    return os << std::bitset<8>(std::to_integer<int>(b));
}
 
int main()
{
    // std::byte y = 1; // Error: cannot convert int to byte.
    std::byte y{1}; // OK
 
    // if (y == 13) {} // Error: cannot be compared.
    if (y == std::byte{13}) {} // OK, bytes are comparable
 
    int arr[]{1, 2, 3};
    // int c = a[y]; // Error: array subscript is not an integer
    [[maybe_unused]] int i = arr[std::to_integer<int>(y)]; // OK
    [[maybe_unused]] int j = arr[std::to_underlying(y)];   // OK
 
    auto to_int = [](std::byte b) { return std::to_integer<int>(b); };
 
    std::byte b{42};
    assert(to_int(b) == 0b00101010);
    std::cout << b << '\n';
 
    // b *= 2; // Error: b is not of arithmetic type
    b <<= 1;
    assert(to_int(b) == 0b01010100);
 
    b >>= 1;
    assert(to_int(b) == 0b00101010);
 
    assert(to_int(b << 1) == 0b01010100);
    assert(to_int(b >> 1) == 0b00010101);
 
    b |= std::byte{0b11110000};
    assert(to_int(b) == 0b11111010);
 
    b &= std::byte{0b11110000};
    assert(to_int(b) == 0b11110000);
 
    b ^= std::byte{0b11111111};
    assert(to_int(b) == 0b00001111);
}
```
