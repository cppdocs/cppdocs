---
title: "std::is_scoped_enum"
source_path: "cpp/types/is_scoped_enum"
header: "<type_traits>"
category: "types"
since: "C++23"
---

std::is_scoped_enum is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_scoped_enum;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_is_scoped_enum
202011L
(C++23)
std::is_scoped_enum

## Example
```cpp
#include <type_traits>
 
class A {};
 
enum E {};
 
enum struct Es { oz };
 
enum class Ec : int {};
 
int main()
{
    static_assert(std::is_scoped_enum_v<A> == false);
    static_assert(std::is_scoped_enum_v<E> == false);
    static_assert(std::is_scoped_enum_v<Es> == true);
    static_assert(std::is_scoped_enum_v<Ec> == true);
    static_assert(std::is_scoped_enum_v<int> == false);
}
```

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [is_scalar](/cpp/types/is_scalar/)
- [is_enum](/cpp/types/is_enum/)
