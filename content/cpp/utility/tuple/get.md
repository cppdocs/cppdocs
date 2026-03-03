---
title: "std::get(std::tuple)"
source_path: "cpp/utility/tuple/get"
header: "<tuple>"
category: "utility"
since: "C++14"
---

1-4) Extracts the Ith element from the tuple. I must be an integer value in [0,sizeof...(Types)).

## Declarations
```cpp
template< std::size_t I, class... Types >
typename std::tuple_element<I, std::tuple<Types...>>::type&
get( std::tuple<Types...>& t ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class... Types >
typename std::tuple_element<I, std::tuple<Types...>>::type&&
get( std::tuple<Types...>&& t ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class... Types >
const typename std::tuple_element<I, std::tuple<Types...>>::type&
get( const std::tuple<Types...>& t ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class... Types >
const typename std::tuple_element<I, std::tuple<Types...>>::type&&
get( const std::tuple<Types...>&& t ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class T, class... Types >
constexpr T& get( std::tuple<Types...>& t ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class... Types >
constexpr T&& get( std::tuple<Types...>&& t ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class... Types >
constexpr const T& get( const std::tuple<Types...>& t ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class... Types >
constexpr const T&& get( const std::tuple<Types...>&& t ) noexcept;
```
_(since C++14)_

## Parameters
- `t`: tuple whose contents to extract

## Return value
A reference to the selected element of t.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_tuples_by_type
201304L
(C++14)
Addressing tuples by type (5-8)

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
#include <tuple>
 
int main()
{
    auto x = std::make_tuple(1, "Foo", 3.14);
 
    // Index-based access
    std::cout << "( " << std::get<0>(x)
              << ", " << std::get<1>(x)
              << ", " << std::get<2>(x)
              << " )\n";
 
    // Type-based access (since C++14)
    std::cout << "( " << std::get<int>(x)
              << ", " << std::get<const char*>(x)
              << ", " << std::get<double>(x)
              << " )\n";
 
    const std::tuple<int, const int, double, double> y(1, 2, 6.9, 9.6);
    const int& i1 = std::get<int>(y); // OK: not ambiguous
    assert(i1 == 1);
    const int& i2 = std::get<const int>(y); // OK: not ambiguous
    assert(i2 == 2);
    // const double& d = std::get<double>(y); // Error: ill-formed (ambiguous)
 
    // Note: std::tie and structured binding can be
    // used to unpack a tuple into individual objects.
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2485 | C++11 (by index)C++14 (by type) | there are no overloads for const tuple&& | added these overloads ((4) and (8)) |

## See also
- [get(std::array)](/cpp/container/array/get/)
- [get(std::pair)](/cpp/utility/pair/get/)
- [get(std::variant)](/cpp/utility/variant/get/)
- [get(std::ranges::subrange)](/cpp/ranges/subrange/get/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
- [Structured binding](/cpp/language/structured_binding/)
