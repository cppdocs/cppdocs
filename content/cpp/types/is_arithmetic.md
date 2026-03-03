---
title: "std::is_arithmetic"
source_path: "cpp/types/is_arithmetic"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_arithmetic is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_arithmetic;
```
_(since C++11)_

## Notes
Arithmetic types are the built-in types for which the [arithmetic operators](/cpp/language/operator_arithmetic/) (+, -, *, /) are defined (possibly in combination with the usual arithmetic conversions).

Specializations of [std::numeric_limits](/cpp/types/numeric_limits/) are provided for all arithmetic types.

## Example
```cpp
#include <atomic>
#include <cstddef>
#include <type_traits>
 
class A {};
 
enum class B : int { e };
 
static_assert(
    std::is_arithmetic_v<bool>            == true  and
    std::is_arithmetic_v<char>            == true  and
    std::is_arithmetic_v<char const>      == true  and
    std::is_arithmetic_v<int>             == true  and
    std::is_arithmetic_v<int const>       == true  and
    std::is_arithmetic_v<float>           == true  and
    std::is_arithmetic_v<float const>     == true  and
    std::is_arithmetic_v<std::size_t>     == true  and
 
    std::is_arithmetic_v<char&>           == false and
    std::is_arithmetic_v<char*>           == false and
    std::is_arithmetic_v<int&>            == false and
    std::is_arithmetic_v<int*>            == false and
    std::is_arithmetic_v<float&>          == false and
    std::is_arithmetic_v<float*>          == false and
    std::is_arithmetic_v<A>               == false and
    std::is_arithmetic_v<B>               == false and
    std::is_arithmetic_v<decltype(B::e)>  == false and
    std::is_arithmetic_v<std::byte>       == false and
    std::is_arithmetic_v<std::atomic_int> == false
);
 
int main() {}
```

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_floating_point](/cpp/types/is_floating_point/)
