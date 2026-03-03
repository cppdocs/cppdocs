---
title: "deduction guides for std::span"
source_path: "cpp/container/span/deduction_guides"
header: "<span>"
category: "container"
since: "C++26"
---

The following [deduction guides](/cpp/language/ctad/) are provided for span.

## Declarations
```cpp
template< class It, class EndOrSize >
span( It, EndOrSize ) -> span<std::remove_reference_t<std::iter_reference_t<It>>>;
```
_(since C++20) (until C++26)_

```cpp
template< class It, class EndOrSize >
span( It, EndOrSize ) -> span<std::remove_reference_t<std::iter_reference_t<It>>,
/*maybe-static-ext*/<EndOrSize>>;
```
_(since C++26)_

```cpp
template< class T, std::size_t N >
span( T (&)[N] ) -> span<T, N>;
```
_(since C++20)_

```cpp
template< class T, std::size_t N >
span( std::array<T, N>& ) -> span<T, N>;
```
_(since C++20)_

```cpp
template< class T, std::size_t N >
span( const std::array<T, N>& ) -> span<const T, N>;
```
_(since C++20)_

```cpp
template< class R >
span( R&& ) -> span<std::remove_reference_t<std::ranges::range_reference_t<R>>>;
```
_(since C++20)_

## Example
```cpp
#include <array>
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <span>
#include <string_view>
#include <vector>
 
void print(std::string_view rem = "", std::size_t size_of = 0, std::size_t extent = 0)
{
    if (rem.empty())
    {
        std::cout << "name │ sizeof │ extent\n"
                     "─────┼────────┼────────\n";
        return;
    }
    std::cout << std::setw(4) << rem << " │ " << std::setw(6) << size_of << " │ ";
    if (extent == std::dynamic_extent)
        std::cout << "dynamic";
    else
        std::cout << extent;
    std::cout << '\n';
}
 
int main()
{
    int a[]{1, 2, 3, 4, 5};
 
    print();
    std::span s1{std::begin(a), std::end(a)}; // guide (1)
    print("s1", sizeof s1, s1.extent);
 
    std::span s2{std::begin(a), 3}; // guide (1)
    print("s2", sizeof s2, s2.extent);
 
#if __cplusplus > 202302L
    std::span s3{std::begin(a), std::integral_constant<std::size_t, 2>{}}; // guide (1)
    print("s3", sizeof s3, s3.extent);
#endif // C++26
 
    std::span s4{a}; // guide (2)
    print("s4", sizeof s4, s4.extent);
 
    std::span<int> s5{a}; // does not use a guide, makes a dynamic span
    print("s5", sizeof s5, s5.extent);
 
    std::array arr{6, 7, 8};
    std::span s6{arr}; // guide (3)
    print("s6", sizeof s6, s6.extent);
    s6[0] = 42; // OK, element_type is 'int'
 
    const std::array arr2{9, 10, 11};
    std::span s7{arr2}; // guide (4)
    print("s7", sizeof s7, s7.extent);
    // s7[0] = 42; // Error: element_type is 'const int'
 
    std::vector v{66, 69, 99};
    std::span s8{v}; // guide (5)
    print("s8", sizeof s8, s8.extent);
}
```
