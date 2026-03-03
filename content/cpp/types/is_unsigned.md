---
title: "std::is_unsigned"
source_path: "cpp/types/is_unsigned"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_unsigned is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_unsigned;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
class A {};
static_assert(std::is_unsigned_v<A> == false);
 
enum B : unsigned {};
static_assert(std::is_unsigned_v<B> == false);
 
enum class C : unsigned {};
static_assert(std::is_unsigned_v<C> == false);
 
struct S { unsigned p : 1; int q : 1; };
static_assert
(
    std::is_unsigned_v<decltype(S::p)> not_eq
    std::is_unsigned_v<decltype(S::q)>
);
 
static_assert
(
    std::is_unsigned_v<float> == false &&
    std::is_unsigned_v<signed int> == false &&
    std::is_unsigned_v<unsigned int> == true &&
    std::is_unsigned_v<bool> == true
);
 
int main() 
{
    // signedness of char is implementation-defined:
    std::cout << std::boolalpha << std::is_unsigned<char>::value << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2197 | C++11 | value could be true even if T is not an arithmetic type | can only be false in this case |

## See also
- [is_signed](/cpp/types/is_signed/)
- [is_signed](/cpp/types/numeric_limits/is_signed/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [make_signed](/cpp/types/make_signed/)
- [make_unsigned](/cpp/types/make_unsigned/)
