---
title: "std::bitset<N>::reset"
source_path: "cpp/utility/bitset/reset"
category: "utility"
---

Sets bits to false.

## Declarations
```cpp
bitset& reset();
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bitset& reset( std::size_t pos );
```
_(constexpr since C++23)_

## Parameters
- `pos`: the position of the bit to set

## Return value
*this

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<8> b(42);
    std::cout << "Bitset is         " << b << '\n';
    b.reset(1);
    std::cout << "After b.reset(1): " << b << '\n';
    b.reset();
    std::cout << "After b.reset():  " << b << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2250 | C++98 | the behavior was undefined if pos doesnot correspond to a valid bit position | always throws anexception in this case |

## See also
- [set](/cpp/utility/bitset/set/)
- [flip](/cpp/utility/bitset/flip/)
