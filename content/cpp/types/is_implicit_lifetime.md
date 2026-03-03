---
title: "std::is_implicit_lifetime"
source_path: "cpp/types/is_implicit_lifetime"
header: "<type_traits>"
category: "types"
since: "C++23"
---

std::is_implicit_lifetime is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_implicit_lifetime;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_is_implicit_lifetime
202302L
(C++23)
std::is_implicit_lifetime

## Example
```cpp
// The following types are collectively called implicit-lifetime types:
// * scalar types:
//     * arithmetic types
//     * enumeration types
//     * pointer types
//     * pointer-to-member types
//     * std::nullptr_t
// * implicit-lifetime class types
//     * is an aggregate whose destructor is not user-provided
//     * has at least one trivial eligible constructor and a trivial,
//       non-deleted destructor
// * array types
// * cv-qualified versions of these types.
#include <type_traits>
 
static_assert(std::is_implicit_lifetime_v<int>); // arithmetic type is a scalar type
static_assert(std::is_implicit_lifetime_v<const int>); // cv-qualified a scalar type
 
enum E { e };
static_assert(std::is_implicit_lifetime_v<E>); // enumeration type is a scalar type
static_assert(std::is_implicit_lifetime_v<int*>); // pointer type is a scalar type
static_assert(std::is_implicit_lifetime_v<std::nullptr_t>); // scalar type
 
struct S { int x, y; };
// S is an implicit-lifetime class: an aggregate without user-provided destructor
static_assert(std::is_implicit_lifetime_v<S>);
 
static_assert(std::is_implicit_lifetime_v<int S::*>); // pointer-to-member
 
struct X { ~X() = delete; };
// X is not implicit-lifetime class due to deleted destructor
static_assert(!std::is_implicit_lifetime_v<X>);
 
static_assert(std::is_implicit_lifetime_v<int[8]>); // array type
static_assert(std::is_implicit_lifetime_v<volatile int[8]>); // cv-qualified array type
 
int main() {}
```

## See also
- [is_scalar](/cpp/types/is_scalar/)
- [is_array](/cpp/types/is_array/)
- [is_aggregate](/cpp/types/is_aggregate/)
- [start_lifetime_asstart_lifetime_as_array](/cpp/memory/start_lifetime_as/)
