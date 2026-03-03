---
title: "std::bitset<N>::all, std::bitset<N>::any, std::bitset<N>::none"
source_path: "cpp/utility/bitset/all_any_none"
category: "utility"
---

1) Checks if all bits are set to true.

## Declarations
```cpp
bool all() const;
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bool any() const;
```
_(noexcept since C++11) (constexpr since C++23)_

```cpp
bool none() const;
```
_(noexcept since C++11) (constexpr since C++23)_

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<4> b1("0000");
    std::bitset<4> b2("0101");
    std::bitset<4> b3("1111");
 
    std::cout
        << "bitset\t" << "all\t" << "any\t" << "none\n"
        << b1 << '\t' << b1.all() << '\t' << b1.any() << '\t' << b1.none() << '\n'
        << b2 << '\t' << b2.all() << '\t' << b2.any() << '\t' << b2.none() << '\n'
        << b3 << '\t' << b3.all() << '\t' << b3.any() << '\t' << b3.none() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 693 | C++98 | the member function all() was not provided | provided |

## See also
- [count](/cpp/utility/bitset/count/)
- [popcount](/cpp/numeric/popcount/)
