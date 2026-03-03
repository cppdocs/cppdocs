---
title: "std::variant_size, std::variant_size_v"
source_path: "cpp/utility/variant/variant_size"
header: "<variant>"
category: "utility"
since: "C++17"
---

Provides access to the number of alternatives in a possibly cv-qualified variant as a compile-time constant expression.

## Declarations
```cpp
template< class T >
struct variant_size; /* undefined */
```
_(since C++17)_

```cpp
template< class... Types >
struct variant_size<std::variant<Types...>>
: std::integral_constant<std::size_t, sizeof...(Types)> {};
```
_(since C++17)_

```cpp
template< class T >
class variant_size<const T>;
```
_(since C++17)_

```cpp
template< class T >
class variant_size<volatile T>;
```
_(since C++17) (deprecated in C++20)_

```cpp
template< class T >
class variant_size<const volatile T>;
```
_(since C++17) (deprecated in C++20)_

## Notes
All specializations of std::variant_size satisfy [UnaryTypeTrait](/cpp/named_req/unarytypetrait/) with base characteristic [std::integral_constant](/cpp/types/integral_constant/)<[std::size_t](/cpp/types/size_t/), N> for some N.

## Example
```cpp
#include <any>
#include <variant>
 
static_assert(std::variant_size_v<std::variant<>> == 0);
static_assert(std::variant_size_v<std::variant<int>> == 1);
static_assert(std::variant_size_v<std::variant<int, int>> == 2);
static_assert(std::variant_size_v<std::variant<int, int, int>> == 3);
static_assert(std::variant_size_v<std::variant<int, float, double>> == 3);
static_assert(std::variant_size_v<std::variant<std::monostate, void>> == 2);
static_assert(std::variant_size_v<std::variant<const int, const float>> == 2);
static_assert(std::variant_size_v<std::variant<std::variant<std::any>>> == 1);
 
int main() {}
```

## See also
- [variant_alternativevariant_alternative_t](/cpp/utility/variant/variant_alternative/)
- [std::tuple_size<std::tuple>](/cpp/utility/tuple/tuple_size/)
