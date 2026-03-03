---
title: "std::disjunction"
source_path: "cpp/types/disjunction"
header: "<type_traits>"
category: "types"
since: "C++17"
---

Forms the [logical disjunction](https://en.wikipedia.org/wiki/Logical_disjunction) of the type traits B..., effectively performing a logical OR on the sequence of traits.

## Declarations
```cpp
template< class... B >
struct disjunction;
```
_(since C++17)_

## Notes
A specialization of disjunction does not necessarily inherit from of either [std::true_type](/cpp/types/integral_constant/) or [std::false_type](/cpp/types/integral_constant/): it simply inherits from the first B whose ::value, explicitly converted to bool, is true, or from the very last B when all of them convert to false. For example, std::disjunction<[std::integral_constant](/cpp/types/integral_constant/)<int, 2>, [std::integral_constant](/cpp/types/integral_constant/)<int, 4>>::value is 2.

The short-circuit instantiation differentiates disjunction from [fold expressions](/cpp/language/fold/): a fold expression like (... || Bs::value) instantiates every B in Bs, while std::disjunction_v<Bs...> stops instantiation once the value can be determined. This is particularly useful if the later type is expensive to instantiate or can cause a hard error when instantiated with the wrong type.

## Example
```cpp
#include <cstdint>
#include <string>
#include <type_traits>
 
// values_equal<a, b, T>::value is true if and only if a == b.
template<auto V1, decltype(V1) V2, typename T>
struct values_equal : std::bool_constant<V1 == V2>
{
    using type = T;
};
 
// default_type<T>::value is always true
template<typename T>
struct default_type : std::true_type
{
    using type = T;
};
 
// Now we can use disjunction like a switch statement:
template<int I>
using int_of_size = typename std::disjunction< //
    values_equal<I, 1, std::int8_t>,           //
    values_equal<I, 2, std::int16_t>,          //
    values_equal<I, 4, std::int32_t>,          //
    values_equal<I, 8, std::int64_t>,          //
    default_type<void>                         // must be last!
    >::type;
 
static_assert(sizeof(int_of_size<1>) == 1);
static_assert(sizeof(int_of_size<2>) == 2);
static_assert(sizeof(int_of_size<4>) == 4);
static_assert(sizeof(int_of_size<8>) == 8);
static_assert(std::is_same_v<int_of_size<13>, void>);
 
// checking if Foo is constructible from double will cause a hard error
struct Foo
{
    template<class T>
    struct sfinae_unfriendly_check { static_assert(!std::is_same_v<T, double>); };
 
    template<class T>
    Foo(T, sfinae_unfriendly_check<T> = {});
};
 
template<class... Ts>
struct first_constructible
{
    template<class T, class...Args>
    struct is_constructible_x : std::is_constructible<T, Args...>
    {
        using type = T;
    };
 
    struct fallback
    {
        static constexpr bool value = true;
        using type = void; // type to return if nothing is found
    };
 
    template<class... Args>
    using with = typename std::disjunction<is_constructible_x<Ts, Args...>...,
                                           fallback>::type;
};
 
// OK, is_constructible<Foo, double> not instantiated
static_assert(std::is_same_v<first_constructible<std::string, int, Foo>::with<double>,
                             int>);
 
static_assert(std::is_same_v<first_constructible<std::string, int>::with<>, std::string>);
static_assert(std::is_same_v<first_constructible<std::string, int>::with<const char*>,
                             std::string>);
static_assert(std::is_same_v<first_constructible<std::string, int>::with<void*>, void>);
 
int main() {}
```

## See also
- [negation](/cpp/types/negation/)
- [conjunction](/cpp/types/conjunction/)
