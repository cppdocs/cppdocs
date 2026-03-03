---
title: "std::is_final"
source_path: "cpp/types/is_final"
header: "<type_traits>"
category: "types"
since: "C++14"
---

std::is_final is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_final;
```
_(since C++14)_

## Notes
std::is_final is introduced by the resolution of [LWG issue 2112](https://cplusplus.github.io/LWG/issue2112).

A [union](/cpp/language/union/) can be declared final (and std::is_final will detect that), even though unions cannot be used as bases in any case.

## Example
```cpp
#include <type_traits>
 
class A {};
static_assert(std::is_final_v<A> == false);
 
class B final {};
static_assert(std::is_final_v<B> == true);
 
union U final
{
    int x;
    double d;
};
static_assert(std::is_final_v<U> == true);
 
int main()
{
}
```

## See also
- [is_class](/cpp/types/is_class/)
- [is_polymorphic](/cpp/types/is_polymorphic/)
