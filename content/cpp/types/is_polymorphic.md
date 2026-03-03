---
title: "std::is_polymorphic"
source_path: "cpp/types/is_polymorphic"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_polymorphic is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_polymorphic;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
struct A { int m; };
static_assert(!std::is_polymorphic_v<A>);
 
struct B { virtual void foo(); };
static_assert(std::is_polymorphic_v<B>);
 
struct C : B {};
static_assert(std::is_polymorphic_v<C>);
 
struct D { virtual ~D() = default; };
static_assert(std::is_polymorphic_v<D>);
 
// Uses inheritance, but not the virtual keyword:
struct E : A {};
static_assert(!std::is_polymorphic_v<E>);
 
struct F : virtual A {};
static_assert(!std::is_polymorphic_v<F>);
 
struct AX : A {};
struct AY : A {};
struct XY : virtual AX, virtual AY {};
static_assert(!std::is_polymorphic_v<XY>);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | the behavior was undefined ifT is an incomplete union type | the base characteristic isstd::false_type in this case |

## See also
- [is_class](/cpp/types/is_class/)
- [is_abstract](/cpp/types/is_abstract/)
- [has_virtual_destructor](/cpp/types/has_virtual_destructor/)
