---
title: "std::is_signed"
source_path: "cpp/types/is_signed"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_signed is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_signed;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
class A {};
static_assert(std::is_signed_v<A> == false);
 
class B { int i; };
static_assert(std::is_signed_v<B> == false);
 
enum C : int {};
static_assert(std::is_signed_v<C> == false);
 
enum class D : int {};
static_assert(std::is_signed_v<D> == false);
 
static_assert
(
    std::is_signed<signed int>::value == true and // C++11
    std::is_signed<signed int>() == true and      // C++11
    std::is_signed<signed int>{} == true and      // C++11
    std::is_signed_v<signed int> == true and      // C++17
    std::is_signed_v<unsigned int> == false and
    std::is_signed_v<float> == true and
    std::is_signed_v<bool> == false and
    std::is_signed_v<signed char> == true and
    std::is_signed_v<unsigned char> == false
);
 
int main()
{
    // signedness of char is implementation-defined:
    std::cout << std::boolalpha << std::is_signed_v<char> << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2197 | C++11 | value could be true even if T is not an arithmetic type | can only be false in this case |

## See also
- [is_unsigned](/cpp/types/is_unsigned/)
- [is_signed](/cpp/types/numeric_limits/is_signed/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [make_signed](/cpp/types/make_signed/)
- [make_unsigned](/cpp/types/make_unsigned/)
