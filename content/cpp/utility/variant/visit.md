---
title: "std::variant<Types...>::visit"
source_path: "cpp/utility/variant/visit"
category: "utility"
since: "C++26"
---

Applies the visitor vis (a [Callable](/cpp/named_req/callable/) that can be called with any combination of types from the variant) to the variant held by self.

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

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_variant
202306L
(C++26)
member visit

## Example
```cpp
#include <print>
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
        [](int i){ std::print("int = {}\n", i); },
        [](std::string_view s){ std::println("string = “{}”", s); },
        [](const Base&){ std::println("base"); }
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
