---
title: "std::get(std::array)"
source_path: "cpp/container/array/get"
header: "<array>"
category: "container"
---

Extracts the Ith element from the array using [tuple-like](/cpp/utility/tuple/tuple-like/) interface.

## Declarations
```cpp
template< std::size_t I, class T, std::size_t N >
T& get( std::array<T,N>& a ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class T, std::size_t N >
T&& get( std::array<T,N>&& a ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class T, std::size_t N >
const T& get( const std::array<T,N>& a ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class T, std::size_t N >
const T&& get( const std::array<T,N>&& a ) noexcept;
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `a`: array whose contents to extract

## Return value
A reference to the Ith element of a.

## Example
```cpp
#include <array>
#include <iostream>
 
constexpr std::array v{1, 2, 3};
static_assert(get<0>(v) == 1 && get<1>(v) == 2 && get<2>(v) == 3);
 
int main()
{
    std::array<int, 3> a;
 
    // set values:
    get<0>(a) = 1, get<1>(a) = 2, get<2>(a) = 3;
 
    // get values:
    std::cout << '(' << get<0>(a) << ',' << get<1>(a) << ',' << get<2>(a) << ")\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2485 | C++11 | there are no overloads for const array&& | the overloads are added |

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [operator[]](/cpp/container/array/operator_at/)
- [at](/cpp/container/array/at/)
- [get(std::tuple)](/cpp/utility/tuple/get/)
- [get(std::pair)](/cpp/utility/pair/get/)
- [get(std::variant)](/cpp/utility/variant/get/)
- [get(std::ranges::subrange)](/cpp/ranges/subrange/get/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
