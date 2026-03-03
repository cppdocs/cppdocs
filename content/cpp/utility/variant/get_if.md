---
title: "std::get_if (std::variant)"
source_path: "cpp/utility/variant/get_if"
header: "<variant>"
category: "utility"
---

1) Index-based non-throwing accessor: If pv is not a null pointer and pv->index() == I, returns a pointer to the value stored in the variant pointed to by pv. Otherwise, returns a null pointer value. The call is ill-formed if I is not a valid index in the variant.

## Declarations
```cpp
template< std::size_t I, class... Types >
constexpr std::add_pointer_t<std::variant_alternative_t<I, std::variant<Types...>>>
get_if( std::variant<Types...>* pv ) noexcept;
```

```cpp
template< std::size_t I, class... Types >
constexpr std::add_pointer_t<const std::variant_alternative_t<I, std::variant<Types...>>>
get_if( const std::variant<Types...>* pv ) noexcept;
```

```cpp
template< class T, class... Types >
constexpr std::add_pointer_t<T>
get_if( std::variant<Types...>* pv ) noexcept;
```

```cpp
template< class T, class... Types >
constexpr std::add_pointer_t<const T>
get_if( const std::variant<Types...>* pv ) noexcept;
```

## Parameters
- `pv`: pointer to a variant

## Return value
Pointer to the value stored in the pointed-to variant or null pointer on error.

## Example
```cpp
#include <iostream>
#include <variant>
 
int main()
{
    auto check_value = [](const std::variant<int, float>& v)
    {
        if (const int* pval = std::get_if<int>(&v))
            std::cout << "variant value: " << *pval << '\n';
        else
            std::cout << "failed to get value!" << '\n';
    };
 
    std::variant<int, float> v{12}, w{3.f};
    check_value(v);
    check_value(w);
}
```

## See also
- [get(std::variant)](/cpp/utility/variant/get/)
