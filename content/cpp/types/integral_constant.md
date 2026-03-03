---
title: "std::integral_constant"
source_path: "cpp/types/integral_constant"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::integral_constant wraps a static constant of specified type. It is the base class for the C++ type traits.

## Declarations
```cpp
template< class T, T v >
struct integral_constant;
```
_(since C++11)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_integral_constant_callable
201304L
(C++14)
std::integral_constant::operator()
__cpp_lib_bool_constant
201505L
(C++17)
std::bool_constant

## Example
```cpp
#include <type_traits>
 
using two_t = std::integral_constant<int, 2>;
using four_t = std::integral_constant<int, 4>;
 
static_assert(not std::is_same_v<two_t, four_t>);
static_assert(two_t::value * 2 == four_t::value, "2*2 != 4");
static_assert(two_t() << 1 == four_t() >> 0, "2*2 != 4");
 
enum class E{ e1, e2 };
using c1 = std::integral_constant<E, E::e1>;
using c2 = std::integral_constant<E, E::e2>;
static_assert(c1::value != E::e2);
static_assert(c1() == E::e1);
static_assert(std::is_same_v<c2, c2>);
 
int main() {}
```

## See also
- [integer_sequence](/cpp/utility/integer_sequence/)
