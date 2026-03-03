---
title: "std::bitset<N>::operator<<,<<=,>>,>>="
source_path: "cpp/utility/bitset/operator"
category: "utility"
---

Performs binary shift left (towards higher index positions) and binary shift right (towards lower index positions). Zeroes are shifted in, and bits that would go to an index out of range are dropped (ignored).

## Declarations
```cpp
bitset operator<<( std::size_t pos ) const;
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& operator<<=( std::size_t pos );
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset operator>>( std::size_t pos ) const;
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& operator>>=( std::size_t pos );
```
_(noexcept since C++11) (constexpr since C++23)_

## Parameters
- `pos`: number of positions to shift the bits

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<8> b{0b01110010};
    std::cout << b << " (initial value)\n";
 
    for (; b.any(); b >>= 1)
    {
        while (!b.test(0))
            b >>= 1;
        std::cout << b << '\n';
    }
 
    std::cout << b << " (final value)\n";
}
```

## See also
- [rotl](/cpp/numeric/rotl/)
- [rotr](/cpp/numeric/rotr/)
- [operator&=operator|=operator^=operator~](/cpp/utility/bitset/operator_logic/)
