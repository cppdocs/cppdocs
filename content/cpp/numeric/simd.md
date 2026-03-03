---
title: "Data-parallel types (SIMD) (since C++26)"
source_path: "cpp/numeric/simd"
category: "numeric"
since: "C++26"
---

The library provides data-parallel types and operations on these types: portable types for explicitly stating data-parallelism and structuring data through data-parallel execution resources where available, such as [SIMD](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data) registers and instructions or execution units that are driven by a common instruction decoder.

## Declarations
```cpp
using /*simd-size-type*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< std::size_t Bytes >
using /*integer-from*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class T, class Abi >
constexpr /*simd-size-type*/ /*simd-size-v*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class T >
constexpr std::size_t /*mask-element-size*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class T >
concept /*constexpr-wrapper-like*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class T >
using /*deduced-simd-t*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class V, class T >
using /*make-compatible-simd-t*/ = /* see description */;
```
_(exposition only*)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_simd
202411L
(C++26)
Data-parallel types and operations

## Example
```cpp
#include <iostream>
#include <simd>
#include <string_view>
 
void println(std::string_view name, auto const& a)
{
    std::cout << name << ": ";
    for (std::size_t i{}; i != a.size(); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
 
template<class A>
constexpr std::basic_simd<int, A> my_abs(std::basic_simd<int, A> x)
{
    return std::simd_select(x < 0, -x, x);
}
 
int main()
{
    constexpr std::simd<int> a = 1;
    println("a", a);
 
    constexpr std::simd<int> b([](int i) { return i - 2; });
    println("b", b);
 
    constexpr auto c = a + b;
    println("c", c);
 
    constexpr auto d = my_abs(c);
    println("d", d);
 
    constexpr auto e = d * d;
    println("e", e);
 
    constexpr auto inner_product = std::reduce(e);
    std::cout << "inner product: " << inner_product << '\n';
 
    constexpr std::simd<double, 16> x([](int i) { return i; });
    println("x", x);
    // overloaded math functions are defined in <simd>
    println("cos²(x) + sin²(x)", std::pow(std::cos(x), 2) + std::pow(std::sin(x), 2));
}
```

## See also
- [valarray](/cpp/numeric/valarray/)
