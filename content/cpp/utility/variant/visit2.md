---
title: "std::visit"
source_path: "cpp/utility/variant/visit2"
header: "<variant>"
category: "utility"
since: "C++17"
---

Applies the visitor v (a [Callable](/cpp/named_req/callable/) that can be called with any combination of types from Variants) to the Variants values.

## Declarations
```cpp
template< class Visitor, class... Variants >
constexpr /* see below */ visit( Visitor&& v, Variants&&... values );
```
_(since C++17)_

```cpp
template< class R, class Visitor, class... Variants >
constexpr R visit( Visitor&& v, Variants&&... values );
```
_(since C++20)_

```cpp
template< class... Ts >
auto&& as-variant( std::variant<Ts...>& value );
```
_(exposition only*)_

```cpp
template< class... Ts >
auto&& as-variant( const std::variant<Ts...>& value );
```
_(exposition only*)_

```cpp
template< class... Ts >
auto&& as-variant( std::variant<Ts...>&& value );
```
_(exposition only*)_

```cpp
template< class... Ts >
auto&& as-variant( const std::variant<Ts...>&& value );
```
_(exposition only*)_

## Parameters
- `v`: a Callable that accepts every possible alternative from every variant in Variants
- `values`: list of variants to pass to the visitor

## Notes
Let n be (1 * ... * [std::variant_size_v](/cpp/utility/variant/variant_size/)<[std::remove_reference_t](/cpp/types/remove_reference/)<VariantBases>>), implementations usually generate a table equivalent to an (possibly multidimensional) array of n function pointers for every specialization of std::visit, which is similar to the implementation of [virtual functions](/cpp/language/virtual/).

Implementations may also generate a [switch statement](/cpp/language/switch/) with n branches for std::visit (e.g., the MSVC STL implementation uses a switch statement when n is not greater than 256).

On typical implementations, the time complexity of the invocation of v can be considered equal to that of access to an element in an (possibly multidimensional) array or execution of a switch statement.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <type_traits>
#include <variant>
#include <vector>
 
// the variant to visit
using value_t = std::variant<int, long, double, std::string>;
 
// helper type for the visitor #4
template<class... Ts>
struct overloaded : Ts... { using Ts::operator()...; };
// explicit deduction guide (not needed as of C++20)
template<class... Ts>
overloaded(Ts...) -> overloaded<Ts...>;
 
int main()
{
    std::vector<value_t> vec = {10, 15l, 1.5, "hello"};
 
    for (auto& v: vec)
    {
        // 1. void visitor, only called for side-effects (here, for I/O)
        std::visit([](auto&& arg){ std::cout << arg; }, v);
 
        // 2. value-returning visitor, demonstrates the idiom of returning another variant
        value_t w = std::visit([](auto&& arg) -> value_t { return arg + arg; }, v);
 
        // 3. type-matching visitor: a lambda that handles each type differently
        std::cout << ". After doubling, variant holds ";
        std::visit([](auto&& arg)
        {
            using T = std::decay_t<decltype(arg)>;
            if constexpr (std::is_same_v<T, int>)
                std::cout << "int with value " << arg << '\n';
            else if constexpr (std::is_same_v<T, long>)
                std::cout << "long with value " << arg << '\n';
            else if constexpr (std::is_same_v<T, double>)
                std::cout << "double with value " << arg << '\n';
            else if constexpr (std::is_same_v<T, std::string>)
                std::cout << "std::string with value " << std::quoted(arg) << '\n';
            else
                static_assert(false, "non-exhaustive visitor!");
        }, w);
    }
 
    for (auto& v: vec)
    {
        // 4. another type-matching visitor: a class with 3 overloaded operator()'s
        // Note: The `(auto arg)` template operator() will bind to `int` and `long`
        //       in this case, but in its absence the `(double arg)` operator()
        //       *will also* bind to `int` and `long` because both are implicitly
        //       convertible to double. When using this form, care has to be taken
        //       that implicit conversions are handled correctly.
        std::visit(overloaded{
            [](auto arg) { std::cout << arg << ' '; },
            [](double arg) { std::cout << std::fixed << arg << ' '; },
            [](const std::string& arg) { std::cout << std::quoted(arg) << ' '; }
        }, v);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2970 | C++17 | the return type of overload (1) did not preserve thevalue category of the result of the INVOKE operation | preserves |
| LWG 3052(P2162R2) | C++17 | the effects were unspecified if any typein Variants is not a std::variant | specified |

## See also
- [visit](/cpp/utility/variant/visit/)
- [swap](/cpp/utility/variant/swap/)
