---
title: "std::has_virtual_destructor"
source_path: "cpp/types/has_virtual_destructor"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::has_virtual_destructor is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct has_virtual_destructor;
```
_(since C++11)_

## Notes
If a class C has a public virtual destructor, it can be derived from, and the derived object can be safely deleted through a pointer to the base object ([GotW #18](http://www.gotw.ca/publications/mill18.htm)). In this case, [std::is_polymorphic](/cpp/types/is_polymorphic/)<C>::value is true.

## Example
```cpp
#include <type_traits>
 
struct S {};
static_assert(!std::has_virtual_destructor_v<S>);
 
struct B { virtual ~B() {} };
static_assert(std::has_virtual_destructor_v<B>);
 
struct D : B { ~D() {} };
static_assert(std::has_virtual_destructor_v<D>);
 
int main()
{
    B* pd = new D;
    delete pd;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | the behavior was undefined ifT is an incomplete union type | the base characteristic isstd::false_type in this case |

## See also
- [is_destructibleis_trivially_destructibleis_nothrow_destructible](/cpp/types/is_destructible/)
- [is_polymorphic](/cpp/types/is_polymorphic/)
