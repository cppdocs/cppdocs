---
title: "std::bitset<N>::flip"
source_path: "cpp/utility/bitset/flip"
category: "utility"
---

Flips bits, i.e. changes true values to false and false values to true. Equivalent to a logical NOT operation on part or all of the bitset.

## Declarations
```cpp
bitset& flip();
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& flip( std::size_t pos );
```
_(constexpr since C++23)_

## Parameters
- `pos`: the position of the bit to flip

## Return value
*this

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<4> flops;
 
    std::cout << flops << '\n'
              << flops.flip(0) << '\n'
              << flops.flip(2) << '\n'
              << flops.flip() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2250 | C++98 | the behavior was undefined if pos doesnot correspond to a valid bit position | always throws anexception in this case |

## See also
- [set](/cpp/utility/bitset/set/)
- [reset](/cpp/utility/bitset/reset/)
- [operator&=operator|=operator^=operator~](/cpp/utility/bitset/operator_logic/)
- [flip](/cpp/container/vector_bool/flip/)
