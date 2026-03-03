---
title: "std::bitset<N>::to_ulong"
source_path: "cpp/utility/bitset/to_ulong"
category: "utility"
---

Converts the contents of the bitset to an unsigned long integer.

## Declarations
```cpp
unsigned long to_ulong() const
```
_(constexpr since C++23)_

## Return value
The converted integer.

## Example
```cpp
#include <bitset>
#include <iostream>
#include <stdexcept>
 
int main()
{
    for (unsigned long i = 0; i < 10; ++i)
    {
        std::bitset<5> b(i);
        std::bitset<5> b_inverted = ~b;
        std::cout << i << '\t' << b << '\t' << b_inverted << '\t'
                  << b_inverted.to_ulong() << '\n';
    }
 
    std::cout << std::bitset<32>().to_string('-') << '\n';
 
    try
    {
        std::bitset<128> x(42);
        std::cout << x.to_ulong() << '\n';
        x.flip();
        std::cout << x.to_ulong() << '\n'; // throws
    }
    catch (const std::overflow_error& ex)
    {
        std::cout << "ex: " << ex.what() << '\n';
    }
}
```

## See also
- [to_string](/cpp/utility/bitset/to_string/)
- [to_ullong](/cpp/utility/bitset/to_ullong/)
