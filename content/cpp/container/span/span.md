---
title: "std::span<T,Extent>::span"
source_path: "cpp/container/span/span"
category: "container"
since: "C++20"
---

Constructs a span.

## Declarations
```cpp
constexpr span() noexcept;
```
_(since C++20)_

```cpp
template< class It >
explicit(extent != std::dynamic_extent)
constexpr span( It first, size_type count );
```
_(since C++20)_

```cpp
template< class It, class End >
explicit(extent != std::dynamic_extent)
constexpr span( It first, End last );
```
_(since C++20)_

```cpp
template< std::size_t N >
constexpr span( std::type_identity_t<element_type> (&arr)[N] ) noexcept;
```
_(since C++20)_

```cpp
template< class U, std::size_t N >
constexpr span( std::array<U, N>& arr ) noexcept;
```
_(since C++20)_

```cpp
template< class U, std::size_t N >
constexpr span( const std::array<U, N>& arr ) noexcept;
```
_(since C++20)_

```cpp
template< class R >
explicit(extent != std::dynamic_extent)
constexpr span( R&& range );
```
_(since C++20)_

```cpp
explicit(extent != std::dynamic_extent)
constexpr span( std::initializer_list<value_type> il ) noexcept;
```
_(since C++26)_

```cpp
template< class U, std::size_t N >
explicit(extent != std::dynamic_extent && N == std::dynamic_extent)
constexpr span( const std::span<U, N>& source ) noexcept;
```
_(since C++20)_

```cpp
constexpr span( const span& other ) noexcept = default;
```
_(since C++20)_

## Parameters
- `first`: iterator to the first element of the sequence
- `count`: number of elements in the sequence
- `last`: iterator past the last element of the sequence or another sentinel
- `arr`: array to construct a view for
- `range`: range to construct a view for
- `source`: another span to convert from
- `other`: another span to copy from

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_span_initializer_list
202311L
(C++26)
Constructing std::span from a std::initializer_list, (8)

## Example
```cpp
#include <array>
#include <iostream>
#include <span>
#include <vector>
 
void print_span(std::span<const int> s)
{
    for (int n : s)
        std::cout << n << ' ';
    std::cout << '\n';
}
 
int main()
{
    int c[]{1, 2, 3};
    print_span(c); // constructs from array
 
    std::array a{4, 5, 6};
    print_span(a); // constructs from std::array
 
    std::vector v{7, 8, 9};
    print_span(v); // constructs from std::vector
 
#if __cpp_lib_span_initializer_list
    print_span({0, 1, 2}); // constructs from initializer_list
#else
    print_span({{0, 1, 2}}); // ditto, a workaround
#endif
}
```

## See also
- [data](/cpp/container/span/data/)
- [size](/cpp/container/span/size/)
- [operator=](/cpp/container/span/operator/)
- [sizessize](/cpp/iterator/size/)
- [data](/cpp/iterator/data/)
