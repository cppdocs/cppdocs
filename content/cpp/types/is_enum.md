---
title: "std::is_enum"
source_path: "cpp/types/is_enum"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_enum is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_enum;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
struct A { enum E {}; };
static_assert(std::is_enum_v<A> == false);
static_assert(std::is_enum_v<A::E> == true);
 
enum E {};
static_assert(std::is_enum_v<E> == true);
 
enum class Ec : int {};
static_assert(std::is_enum_v<Ec> == true);
 
static_assert(std::is_enum_v<int> == false);
 
int main() {}
```

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [is_scalar](/cpp/types/is_scalar/)
- [is_scoped_enum](/cpp/types/is_scoped_enum/)
