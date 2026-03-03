---
title: "std::void_t"
source_path: "cpp/types/void_t"
header: "<type_traits>"
category: "types"
since: "C++17"
---

Utility metafunction that maps a sequence of any types to the type void. This metafunction is a convenient way to leverage [SFINAE](/cpp/language/sfinae/) prior to C++20's [concepts](/cpp/language/constraints/), in particular for conditionally removing functions from the [candidate set](/cpp/language/overload_resolution/) based on whether an expression is valid in the [unevaluated context](/cpp/language/expressions/#Unevaluated_expressions) (such as operand to [decltype](/cpp/language/decltype/) expression), allowing to exist separate function overloads or specializations based on supported operations.

## Declarations
```cpp
template< class... >
using void_t = void;
```
_(since C++17)_

## Notes
This metafunction is used in template metaprogramming to detect ill-formed types in SFINAE context:

It can also be used to detect validity of an expression:

Until the resolution of [CWG issue 1558](https://cplusplus.github.io/CWG/issues/1558.html) (a C++11 defect), unused parameters in [alias templates](/cpp/language/type_alias/) were not guaranteed to ensure SFINAE and could be ignored, so earlier compilers require a more complex definition of void_t, such as

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <map>
#include <type_traits>
#include <vector>
 
// Variable template that checks if a type has begin() and end() member functions
template<typename, typename = void>
constexpr bool is_iterable = false;
 
template<typename T>
constexpr bool is_iterable<
    T,
    std::void_t<decltype(std::declval<T>().begin()),
                decltype(std::declval<T>().end())
    >
> = true;
 
// An iterator trait those value_type is the value_type of the iterated container,
// supports even back_insert_iterator (where value_type is void)
 
template<typename T, typename = void>
struct iterator_trait : std::iterator_traits<T> {};
 
template<typename T>
struct iterator_trait<T, std::void_t<typename T::container_type>>
    : std::iterator_traits<typename T::container_type::iterator> {};
 
class A {};
 
#define SHOW(...) std::cout << std::setw(34) << #__VA_ARGS__ \
                            << " == " << __VA_ARGS__ << '\n'
 
int main()
{
    std::cout << std::boolalpha << std::left;
    SHOW(is_iterable<std::vector<double>>);
    SHOW(is_iterable<std::map<int, double>>);
    SHOW(is_iterable<double>);
    SHOW(is_iterable<A>);
 
    using container_t = std::vector<int>;
    container_t v;
 
    static_assert(std::is_same_v<
        container_t::value_type,
        iterator_trait<decltype(std::begin(v))>::value_type
    >);
 
    static_assert(std::is_same_v<
        container_t::value_type,
        iterator_trait<decltype(std::back_inserter(v))>::value_type
    >);
}
```

## See also
- [enable_if](/cpp/types/enable_if/)
- [removes](/cpp/language/sfinae/)
