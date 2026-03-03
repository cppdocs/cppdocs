---
title: "std::bitset<N>::operator[]"
source_path: "cpp/utility/bitset/operator_at"
category: "utility"
---

Accesses the bit at position pos. The first version returns the value of the bit, the second version returns an object of type [std::bitset::reference](/cpp/utility/bitset/reference/) that allows modification of the value.

## Declarations
```cpp
bool operator[]( std::size_t pos ) const;
```
_(constexpr since C++11)_

```cpp
reference operator[]( std::size_t pos );
```
_(constexpr since C++23)_

## Parameters
- `pos`: position of the bit to return

## Example
```cpp
#include <bitset>
#include <cstddef>
#include <iostream>
 
int main()
{
    std::bitset<8> b1{0b00101010}; // binary literal for 42
 
    for (std::size_t i = 0; i < b1.size(); ++i)
        std::cout << "b1[" << i << "]: " << b1[i] << '\n';
    b1[0] = true; // modifies the first bit through bitset::reference
 
    std::cout << "After setting bit 0, b1 holds " << b1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 11 | C++98 | 1. the description was missing in the C++ standard2. there was only the non-const overload | 1. description added2. added the const overload |
| LWG 907 | C++98 | the behavior of reading the bit at pos was equivalentto that of test(pos), but test() may throw exceptions | avoids mentioning test() |

## See also
- [test](/cpp/utility/bitset/test/)
