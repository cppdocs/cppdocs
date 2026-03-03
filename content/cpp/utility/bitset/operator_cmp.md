---
title: "std::bitset<N>::operator==, std::bitset<N>::operator!="
source_path: "cpp/utility/bitset/operator_cmp"
category: "utility"
---

1) Returns true if all of the bits in *this and rhs are equal.

## Declarations
```cpp
bool operator==( const bitset& rhs ) const;
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bool operator!=( const bitset& rhs ) const;
```
_(noexcept since C++11) (until C++20)_

## Parameters
- `rhs`: bitset to compare

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<4> b1(0b0011);
    std::bitset<4> b2(b1);
    std::bitset<4> b3(0b0100);
 
    std::cout << std::boolalpha;
    std::cout << "b1 == b2: " << (b1 == b2) << '\n';
    std::cout << "b1 == b3: " << (b1 == b3) << '\n';
    std::cout << "b1 != b3: " << (b1 != b3) << '\n';
 
//  b1 == std::bitset<3>{}; // compile-time error: incompatible types
}
```
