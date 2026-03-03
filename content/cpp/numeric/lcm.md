---
title: "std::lcm"
source_path: "cpp/numeric/lcm"
header: "<numeric>"
category: "numeric"
since: "C++17"
---

Computes the [least common multiple](https://en.wikipedia.org/wiki/least_common_multiple) of the integers m and n.

## Declarations
```cpp
template< class M, class N >
constexpr std::common_type_t<M, N> lcm( M m, N n );
```
_(since C++17)_

## Parameters
- `m, n`: integer values

## Return value
If either m or n is zero, returns zero. Otherwise, returns the least common multiple of |m| and |n|.

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
#include <iostream>
#include <numeric>
 
#define OUT(...) std::cout << #__VA_ARGS__ << " = " << __VA_ARGS__ << '\n'
 
constexpr auto lcm(auto x, auto... xs)
{
    return ((x = std::lcm(x, xs)), ...);
}
 
int main()
{
    constexpr int p{2 * 2 * 3};
    constexpr int q{2 * 3 * 3};
    static_assert(2 * 2 * 3 * 3 == std::lcm(p, q));
    static_assert(225 == std::lcm(45, 75));
 
    static_assert(std::lcm( 6,  10) == 30);
    static_assert(std::lcm( 6, -10) == 30);
    static_assert(std::lcm(-6, -10) == 30);
 
    static_assert(std::lcm( 24, 0) == 0);
    static_assert(std::lcm(-24, 0) == 0);
 
    OUT(lcm(2 * 3, 3 * 4, 4 * 5));
    OUT(lcm(2 * 3 * 4, 3 * 4 * 5, 4 * 5 * 6));
    OUT(lcm(2 * 3 * 4, 3 * 4 * 5, 4 * 5 * 6, 5 * 6 * 7));
}
```

## See also
- [gcd](/cpp/numeric/gcd/)
