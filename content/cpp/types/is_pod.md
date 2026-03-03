---
title: "std::is_pod"
source_path: "cpp/types/is_pod"
header: "<type_traits>"
category: "types"
---

std::is_pod is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_pod;
```
_(since C++11) (deprecated in C++20)_

## Example
```cpp
#include <type_traits>
 
struct A { int m; };
static_assert(std::is_pod_v<A> == true);
 
class B: public A { int m; };
static_assert(std::is_pod_v<B> == false);
 
struct C { virtual void foo(); };
static_assert(std::is_pod_v<C> == false);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | T could be an array of incompleteclass type with unknown bound | the behavior isundefined in this case |

## See also
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
- [is_trivial](/cpp/types/is_trivial/)
- [is_scalar](/cpp/types/is_scalar/)
