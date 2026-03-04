---
title: "std::variant<Types...>::visit"
source_path: "cpp/utility/variant/visit"
category: "utility"
since: "C++26"
---

Applies the visitor vis (a [Callable](/cpp/named_req/callable/) that can be called with any combination of types from the variant) to the variant held by self.

Given `V` as `decltype(std::forward_like<Self>(std::declval<variant>()))`, these overloads are equivalent to forwarding to the non-member [std::visit](/cpp/utility/variant/visit2/) overload set:

1. `return std::visit(std::forward<Visitor>(vis), (V) self);`
2. `return std::visit<R>(std::forward<Visitor>(vis), (V) self);`

## Declarations
```cpp
template< class Self, class Visitor >
constexpr decltype(auto) visit( this Self&& self, Visitor&& vis );
```
_(since C++26)_

```cpp
template< class R, class Self, class Visitor >
constexpr R visit( this Self&& self, Visitor&& vis );
```
_(since C++26)_

## Parameters
- `vis`: a Callable that accepts every possible alternative from the variant
- `self`: variant to pass to the visitor

## Return value
1. The result of the corresponding `std::visit` invocation.
2. Nothing if `R` is cv-qualified `void`; otherwise, the result of the corresponding `std::visit<R>` invocation.

## Exceptions
Only throws if the underlying call to [std::visit](/cpp/utility/variant/visit2/) throws.

## Notes
| Feature-test macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_variant` | `202306L` | C++26 | member `visit` |

## Example
```cpp
#include <iostream>
#include <string>
#include <string_view>
#include <variant>
 
struct Base {};
struct Derived : Base {};
 
// helper type for the visitor
template<class... Ts>
struct overloads : Ts... { using Ts::operator()...; };
 
// the variant to visit
using var_t = std::variant<int, std::string, Derived>;
 
int main()
{
    const auto visitor = overloads
    {
        [](int i){ std::cout << "int = " << i << '\n'; },
        [](std::string_view s){ std::cout << "string = \"" << s << "\"\n"; },
        [](const Base&){ std::cout << "base\n"; }
    };
 
    const var_t var1 = 42, var2 = "abc", var3 = Derived();
 
#if (__cpp_lib_variant >= 202306L)
    var1.visit(visitor);
    var2.visit(visitor);
    var3.visit(visitor);
#else
    std::visit(visitor, var1);
    std::visit(visitor, var2);
    std::visit(visitor, var3);
#endif
}
```

## See also
- [visit](/cpp/utility/variant/visit2/)
