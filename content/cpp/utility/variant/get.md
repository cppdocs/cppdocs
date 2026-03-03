---
title: "std::get(std::variant)"
source_path: "cpp/utility/variant/get"
header: "<variant>"
category: "utility"
---

1) Index-based value accessor: If v.index() == I, returns a reference to the value stored in v. Otherwise, throws [std::bad_variant_access](/cpp/utility/variant/bad_variant_access/). The call is ill-formed if I is not a valid index in the variant.

## Declarations
```cpp
template< std::size_t I, class... Types >
constexpr std::variant_alternative_t<I, std::variant<Types...>>&
get( std::variant<Types...>& v );
```

```cpp
template< std::size_t I, class... Types >
constexpr std::variant_alternative_t<I, std::variant<Types...>>&&
get( std::variant<Types...>&& v );
```

```cpp
template< std::size_t I, class... Types >
constexpr const std::variant_alternative_t<I, std::variant<Types...>>&
get( const std::variant<Types...>& v );
```

```cpp
template< std::size_t I, class... Types >
constexpr const std::variant_alternative_t<I, std::variant<Types...>>&&
get( const std::variant<Types...>&& v );
```

```cpp
template< class T, class... Types >
constexpr T& get( std::variant<Types...>& v );
```

```cpp
template< class T, class... Types >
constexpr T&& get( std::variant<Types...>&& v );
```

```cpp
template< class T, class... Types >
constexpr const T& get( const std::variant<Types...>& v );
```

```cpp
template< class T, class... Types >
constexpr const T&& get( const std::variant<Types...>&& v );
```

## Parameters
- `v`: a variant

## Return value
Reference to the value stored in the variant.

## Example
```cpp
#include <iostream>
#include <string>
#include <variant>
 
int main()
{
    std::variant<int, float> v{12}, w;
    std::cout << std::get<int>(v) << '\n';
    w = std::get<int>(v);
    w = std::get<0>(v); // same effect as the previous line
 
//  std::get<double>(v); // error: no double in [int, float]
//  std::get<3>(v);      // error: valid index values are 0 and 1
 
    try
    {
        w = 42.0f;
        std::cout << std::get<float>(w) << '\n'; // ok, prints 42
        w = 42;
        std::cout << std::get<float>(w) << '\n'; // throws
    }
    catch (std::bad_variant_access const& ex)
    {
        std::cout << ex.what() << ": w contained int, not float\n";
    }
}
```

## See also
- [get_if](/cpp/utility/variant/get_if/)
- [get(std::tuple)](/cpp/utility/tuple/get/)
- [get(std::array)](/cpp/container/array/get/)
- [get(std::pair)](/cpp/utility/pair/get/)
- [get(std::ranges::subrange)](/cpp/ranges/subrange/get/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
