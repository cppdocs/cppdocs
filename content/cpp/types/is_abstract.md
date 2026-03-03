---
title: "std::is_abstract"
source_path: "cpp/types/is_abstract"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_abstract is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_abstract;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
struct A { int m; };
static_assert(std::is_abstract_v<A> == false);
 
struct B { virtual void foo(); };
static_assert(std::is_abstract_v<B> == false);
 
struct C { virtual void foo() = 0; };
static_assert(std::is_abstract_v<C> == true);
 
struct D : C {};
static_assert(std::is_abstract_v<D> == true);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | the behavior was undefined ifT is an incomplete union type | the base characteristic isstd::false_type in this case |

## See also
- [is_class](/cpp/types/is_class/)
- [is_polymorphic](/cpp/types/is_polymorphic/)
