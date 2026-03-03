---
title: "std::tuple_size"
source_path: "cpp/utility/tuple_size"
header: "<array>"
category: "utility"
since: "C++11"
---

Provides access to the number of elements in a [tuple-like](/cpp/utility/tuple/tuple-like/) type as a compile-time constant expression.

## Declarations
```cpp
template< class T >
struct tuple_size; // not defined
```
_(since C++11)_

```cpp
template< class T >
struct tuple_size< const T >
: std::integral_constant<std::size_t, std::tuple_size<T>::value> {};
```
_(since C++11)_

```cpp
template< class T >
struct tuple_size< volatile T >
: std::integral_constant<std::size_t, std::tuple_size<T>::value> {};
```
_(since C++11) (deprecated in C++20)_

```cpp
template< class T >
struct tuple_size< const volatile T >
: std::integral_constant<std::size_t, std::tuple_size<T>::value> {};
```
_(since C++11) (deprecated in C++20)_

## Example
```cpp
#include <array>
#include <cstddef>
#include <ranges>
#include <tuple>
#include <utility>
 
template<class T, std::size_t Size> struct Arr { T data[Size]; };
 
// Program-defined specialization of std::tuple_size:
template<class T, std::size_t Size> struct std::tuple_size<Arr<T, Size>>
    : public integral_constant<std::size_t, Size> {};
 
int main()
{
    using tuple1 = std::tuple<int, char, double>;
    static_assert(3 == std::tuple_size_v<tuple1>); // uses using template (C++17)
 
    using array3x4 = std::array<std::array<int, 3>, 4>;
    static_assert(4 == std::tuple_size<array3x4>{}); // uses operator std::size_t
 
    using pair = std::pair<tuple1, array3x4>;
    static_assert(2 == std::tuple_size<pair>()); // uses operator()
 
    using sub = std::ranges::subrange<char*, char*>;
    static_assert(2 == std::tuple_size<sub>::value);
 
    using Arr5 = Arr<int, 5>;
    static_assert(5 == std::tuple_size_v<Arr5>);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2212 | C++11 | specializations for cv types were not required in some headers, which led to ambiguity | required |

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_element](/cpp/utility/tuple_element/)
- [tuple_cat](/cpp/utility/tuple/tuple_cat/)
