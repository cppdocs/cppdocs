---
title: "std::bitset<N>::test"
source_path: "cpp/utility/bitset/test"
category: "utility"
---

Returns the value of the bit at the position pos (counting from 0).

## Declarations
```cpp
bool test( std::size_t pos ) const;
```
_(constexpr since C++23)_

## Parameters
- `pos`: position of the bit to return (counting from 0)

## Return value
true if the requested bit is set, false otherwise.

## Example
```cpp
#include <bit>
#include <bitset>
#include <cassert>
#include <iostream>
#include <stdexcept>
 
int main()
{
    std::bitset<10> b1("1111010000");
 
    std::size_t idx = 0;
    while (idx < b1.size() && !b1.test(idx))
        ++idx;
 
    assert(static_cast<int>(idx) == std::countr_zero(b1.to_ulong()));
 
    if (idx < b1.size())
        std::cout << "The first set bit is at index " << idx << '\n';
    else
        std::cout << "no set bits\n";
 
    try
    {
        std::bitset<0B10'1001'1010> bad;
        if (bad.test(bad.size()))
            std::cout << "Expect unexpected!\n";
    }
    catch (std::out_of_range const& ex)
    {
        std::cout << "Exception: " << ex.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2250 | C++98 | the behavior was undefined if pos doesnot correspond to a valid bit position | always throws anexception in this case |

## See also
- [operator[]](/cpp/utility/bitset/operator_at/)
- [popcount](/cpp/numeric/popcount/)
- [has_single_bit](/cpp/numeric/has_single_bit/)
