---
title: "std::is_trivial"
source_path: "cpp/types/is_trivial"
header: "<type_traits>"
category: "types"
---

std::is_trivial is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_trivial;
```
_(since C++11) (deprecated in C++26)_

## Example
```cpp
#include <type_traits>
 
struct A { int m; };
static_assert(std::is_trivial_v<A> == true);
 
struct B { B() {} };
static_assert(std::is_trivial_v<B> == false);
 
// The following class shows why std::is_trivial(_v) may be a pitfall.
class C
{
private:
    C() = default;
};
 
static_assert(std::is_trivial_v<C> == true);
static_assert(std::is_trivially_default_constructible_v<C> == false);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | T could be an array of incompleteclass type with unknown bound | the behavior isundefined in this case |

## See also
- [is_trivially_copyable](/cpp/types/is_trivially_copyable/)
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
