---
title: "std::bitset<N>::to_ullong"
source_path: "cpp/utility/bitset/to_ullong"
category: "utility"
---

Converts the contents of the bitset to an unsigned long long integer.

## Declarations
```cpp
unsigned long long to_ullong() const
```
_(since C++11) (constexpr since C++23)_

## Return value
The converted integer

## Example
```cpp
#include <bitset>
#include <iostream>
#include <limits>
 
int main()
{
    std::bitset<std::numeric_limits<unsigned long long>::digits> b
    (
        0x123456789abcdef0LL
    );
 
    std::cout << b << "  " << std::hex << b.to_ullong() << '\n';
    b.flip();
    std::cout << b << "  " << b.to_ullong() << '\n';
 
    std::bitset<std::numeric_limits<unsigned long long>::digits + 1> q{0};
    try
    {
        (~q).to_ullong(); // throws
    }
    catch (const std::overflow_error& ex)
    {
        std::cout << "ex: " << ex.what() << '\n';
    }
}
```

## See also
- [to_string](/cpp/utility/bitset/to_string/)
- [to_ulong](/cpp/utility/bitset/to_ulong/)
