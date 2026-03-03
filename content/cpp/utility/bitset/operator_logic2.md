---
title: "operator&,|,^(std::bitset)"
source_path: "cpp/utility/bitset/operator"
header: "<bitset>"
category: "utility"
---

Performs binary AND, OR, and XOR between two bitsets, lhs and rhs.

## Declarations
```cpp
template< std::size_t N >
std::bitset<N> operator&( const std::bitset<N>& lhs,
const std::bitset<N>& rhs );
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
template< std::size_t N >
std::bitset<N> operator|( const std::bitset<N>& lhs,
const std::bitset<N>& rhs );
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
template< std::size_t N >
std::bitset<N> operator^( const std::bitset<N>& lhs,
const std::bitset<N>& rhs );
```
_(noexcept since C++11) (constexpr since C++23)_

## Parameters
- `lhs`: the bitset on the left-hand side of the operator
- `rhs`: the bitset on the right-hand side of the operator

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<4> b1("0110");
    std::bitset<4> b2("0011");
 
    std::cout << "b1 & b2: " << (b1 & b2) << '\n';
    std::cout << "b1 | b2: " << (b1 | b2) << '\n';
    std::cout << "b1 ^ b2: " << (b1 ^ b2) << '\n';
}
```

## See also
- [operator&=operator|=operator^=operator~](/cpp/utility/bitset/operator_logic/)
