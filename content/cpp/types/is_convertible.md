---
title: "std::is_convertible, std::is_nothrow_convertible"
source_path: "cpp/types/is_convertible"
header: "<type_traits>"
category: "types"
since: "C++11"
---

1) If the imaginary function definition To test() { return [std::declval](/cpp/utility/declval/)<From>(); } is well-formed, (that is, either [std::declval](/cpp/utility/declval/)<From>() can be converted to To using [implicit conversions](/cpp/language/implicit_cast/), or both From and To are possibly cv-qualified void), provides the member constant value equal to true. Otherwise value is false. For the purposes of this check, the use of [std::declval](/cpp/utility/declval/) in the return statement is not considered an [ODR-use](/cpp/language/definition/#ODR-use).
If To is a reference type and a [temporary object](/cpp/language/reference_initialization/#Lifetime_of_a_temporary) would be created when binding [std::declval](/cpp/utility/declval/)<From>() to To, the return statement in the imaginary function is considered well-formed, even though such binding is ill-formed in an actual function.
(since C++26)

## Declarations
```cpp
template< class From, class To >
struct is_convertible;
```
_(since C++11)_

```cpp
template< class From, class To >
struct is_nothrow_convertible;
```
_(since C++20)_

## Notes
Gives well-defined results for reference types, void types, array types, and function types.

Currently the standard has not specified whether the destruction of the object produced by the conversion (either a result object or a temporary bound to a reference) is considered as a part of the conversion. This is [LWG issue 3400](https://cplusplus.github.io/LWG/issue3400).

All known implementations treat the destruction as a part of the conversion, as proposed in [P0758R1](https://wg21.link/P0758R1#Appendix).

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <string_view>
#include <type_traits>
 
class E { public: template<class T> E(T&&) {} };
 
int main()
{
    class A {};
    class B : public A {};
    class C {};
    class D { public: operator C() { return c; } C c; };
 
    static_assert(std::is_convertible_v<B*, A*>);
    static_assert(!std::is_convertible_v<A*, B*>);
    static_assert(std::is_convertible_v<D, C>);
    static_assert(!std::is_convertible_v<B*, C*>);
    // Note that the Perfect Forwarding constructor makes the class E be
    // "convertible" from everything. So, A is replaceable by B, C, D..:
    static_assert(std::is_convertible_v<A, E>);
 
    static_assert(!std::is_convertible_v<std::string_view, std::string>);
    static_assert(std::is_convertible_v<std::string, std::string_view>);
 
    auto stringify = []<typename T>(T x)
    {
        if constexpr (std::is_convertible_v<T, std::string> or
                      std::is_convertible_v<T, std::string_view>)
            return x;
        else
            return std::to_string(x);
    };
 
    using std::operator "" s, std::operator "" sv;
    const char* three = "three";
 
    std::cout << std::quoted(stringify("one"s)) << ' '
              << std::quoted(stringify("two"sv)) << ' '
              << std::quoted(stringify(three)) << ' '
              << std::quoted(stringify(42)) << ' '
              << std::quoted(stringify(42.0)) << '\n';
}
```

## See also
- [is_base_of](/cpp/types/is_base_of/)
- [is_pointer_interconvertible_base_of](/cpp/types/is_pointer_interconvertible_base_of/)
- [pointer-interconvertible](/cpp/language/static_cast/#pointer-interconvertible)
- [is_pointer_interconvertible_with_class](/cpp/types/is_pointer_interconvertible_with_class/)
- [pointer-interconvertible](/cpp/language/static_cast/#pointer-interconvertible)
- [convertible_to](/cpp/concepts/convertible_to/)
