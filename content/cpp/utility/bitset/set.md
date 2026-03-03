---
title: "std::bitset<N>::set"
source_path: "cpp/utility/bitset/set"
category: "utility"
---

Sets all bits to true or sets one bit to specified value.

## Declarations
```cpp
bitset& set();
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& set( std::size_t pos, bool value = true );
```
_(constexpr since C++23)_

## Parameters
- `pos`: the position (counting from 0, i.e. from least significant to most significant) of the bit to set
- `value`: the value to set the bit to

## Return value
*this

## Example
```cpp
#include <bitset>
#include <cstddef>
#include <iostream>
 
int main()
{
    std::bitset<8> b;
    std::cout << b << '\n';
    std::cout << b.set() << '\n';
    std::cout << b.reset() << '\n';
 
    for (std::size_t i = 1; i < b.size(); i += 2)
        b.set(i);
 
    std::cout << b << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 186 | C++98 | the type of value was int | corrected to bool |
| LWG 2250 | C++98 | the behavior was undefined if pos doesnot correspond to a valid bit position | always throws anexception in this case |

## See also
- [reset](/cpp/utility/bitset/reset/)
- [flip](/cpp/utility/bitset/flip/)
