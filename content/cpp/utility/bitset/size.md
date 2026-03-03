---
title: "std::bitset<N>::size"
source_path: "cpp/utility/bitset/size"
category: "utility"
---

Returns the number of bits that the bitset holds.

## Declarations
```cpp
std::size_t size() const;
```
_(noexcept since C++11) (constexpr since C++11)_

## Return value
number of bits that the bitset holds, i.e. the template parameter N.

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::cout << std::bitset<0x400>().size() << '\n';
}
```

## See also
- [count](/cpp/utility/bitset/count/)
