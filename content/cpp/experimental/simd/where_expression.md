---
title: "std::experimental::where_expression"
source_path: "cpp/experimental/simd/where_expression"
header: "<experimental/simd>"
category: "experimental"
---

The class template where_expression abstracts the notion of selected elements
of a given lvalue of arithmetic or data-parallel type. Selected elements are the elements of the lvalue (of type V) for which the corresponding element of the mask (of type M) is true. Operators applied to objects of type where_expression<M, V> are applied only to selected elements. All other elements are left unchanged.

## Declarations
```cpp
template< class M, class V >
class where_expression;
```
_(parallelism TS v2)_

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
void print(auto const& a)
{
    for (std::size_t i{}; i != std::size(a); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
 
template<class A>
stdx::simd<int, A> my_abs(stdx::simd<int, A> x)
{
    where(x < 0, x) = -x;
    return x;
}
 
int main()
{
    const stdx::native_simd<int> a([](int i) { return i - 2; });
    print(a);
    const auto b = my_abs(a);
    print(b);
}
```
