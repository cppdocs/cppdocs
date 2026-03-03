---
title: "std::is_scalar"
source_path: "cpp/types/is_scalar"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_scalar is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_scalar;
```
_(since C++11)_

## Notes
Each individual memory location in the C++ memory model, including the hidden memory locations used by language features (e.g. virtual table pointer), has scalar type (or is a sequence of adjacent bit-fields of non-zero length). Sequencing of side-effects in expression evaluation, inter-thread synchronization, and dependency ordering are all defined in terms of individual scalar objects.

## Example
```cpp
#include <iostream>
#include <type_traits>
#include <typeinfo>
#include <utility>
 
template<typename Head, typename... Tail>
void are_scalars(Head&& head, Tail&&... tail)
{
    using T = std::decay_t<decltype(head)>;
 
    std::cout << typeid(T).name() << " is "
              << (std::is_scalar_v<T> ? "" : "not ")
              << "a scalar\n";
 
    if constexpr (sizeof... (Tail))
    {
        are_scalars(std::forward<decltype(tail)>(tail)...);
    }
}
 
int main()
{
    struct S { int m; } s;
    int S::* mp = &S::m;
    enum class E { e };
 
    are_scalars(42, 3.14, E::e, "str", mp, nullptr, s);
}
```

## See also
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [is_enum](/cpp/types/is_enum/)
- [is_pointer](/cpp/types/is_pointer/)
- [is_member_pointer](/cpp/types/is_member_pointer/)
