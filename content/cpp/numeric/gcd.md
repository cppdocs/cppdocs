---
title: "std::gcd"
source_path: "cpp/numeric/gcd"
header: "<numeric>"
category: "numeric"
since: "C++17"
---

Computes the [greatest common divisor](https://en.wikipedia.org/wiki/greatest_common_divisor) of the integers m and n.

## Declarations
```cpp
template< class M, class N >
constexpr std::common_type_t<M, N> gcd( M m, N n );
```
_(since C++17)_

## Parameters
- `m, n`: integer values

## Return value
If both m and n are zero, returns zero. Otherwise, returns the greatest common divisor of |m| and |n|.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_gcd_lcm
201606L
(C++17)
std::gcd, std::lcm

## Example
```cpp
#include <numeric>
 
int main()
{
    constexpr int p{2 * 2 * 3};
    constexpr int q{2 * 3 * 3};
    static_assert(2 * 3 == std::gcd(p, q));
 
    static_assert(std::gcd( 6,  10) == 2);
    static_assert(std::gcd( 6, -10) == 2);
    static_assert(std::gcd(-6, -10) == 2);
 
    static_assert(std::gcd( 24, 0) == 24);
    static_assert(std::gcd(-24, 0) == 24);
}
```

## See also
- [lcm](/cpp/numeric/lcm/)
