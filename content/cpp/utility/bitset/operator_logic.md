---
title: "std::bitset<N>::operator&=,|=,^=,~"
source_path: "cpp/utility/bitset/operator"
category: "utility"
---

Performs binary AND, OR, XOR and NOT.

## Declarations
```cpp
bitset& operator&=( const bitset& other );
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& operator|=( const bitset& other );
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& operator^=( const bitset& other );
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset operator~() const;
```
_(noexcept since C++11) (constexpr since C++23)_

## Parameters
- `other`: another bitset

## Example
```cpp
#include <bitset>
#include <cstddef>
#include <iostream>
#include <string>
 
int main()
{
    const std::string pattern_str{"1001"};
    std::bitset<16> pattern{pattern_str}, dest;
 
    for (std::size_t i = dest.size() / pattern_str.size(); i != 0; --i)
    {
        dest <<= pattern_str.size();
        dest |= pattern;
        std::cout << dest << " (i = " << i << ")\n";
    }
 
    std::cout << ~dest << " (~dest)\n";
}
```

## See also
- [operator<<=operator>>=operator<<operator>>](/cpp/utility/bitset/operator_ltltgtgt/)
