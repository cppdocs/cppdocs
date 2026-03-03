---
title: "std::is_standard_layout"
source_path: "cpp/types/is_standard_layout"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_standard_layout is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_standard_layout;
```
_(since C++11)_

## Notes
A pointer to a standard-layout class may be converted (with reinterpret_cast) to a pointer to its first non-static data member and vice versa.

If a standard-layout union holds two or more standard-layout structs, it is permitted to inspect the common initial part of them.

The macro [offsetof](/cpp/types/offsetof/) is only guaranteed to be usable with standard-layout classes.

## Example
```cpp
#include <type_traits>
 
struct A { int m; };
static_assert(std::is_standard_layout_v<A> == true);
 
class B: public A { int m; };
static_assert(std::is_standard_layout_v<B> == false);
 
struct C { virtual void foo(); };
static_assert(std::is_standard_layout_v<C> == false);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | T could be an array of incompleteclass type with unknown bound | the behavior isundefined in this case |

## See also
- [is_trivially_copyable](/cpp/types/is_trivially_copyable/)
- [is_pod](/cpp/types/is_pod/)
- [offsetof](/cpp/types/offsetof/)
- [standard-layout](/cpp/named_req/standardlayouttype/)
