---
title: "std::tuple_size<std::complex>"
source_path: "cpp/numeric/complex/tuple_size"
header: "<complex>"
category: "numeric"
since: "C++26"
---

The partial specialization of [std::tuple_size](/cpp/utility/tuple_size/) for [std::complex](/cpp/numeric/complex/) provides a compile-time way to obtain the number of components of a complex, which is always 2, using tuple-like syntax. It is provided for structured binding support.

## Declarations
```cpp
template< class T >
struct tuple_size<std::complex<T>>
: std::integral_constant<std::size_t, 2> {};
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_tuple_like
202311L
(C++26)
Add tuple protocol to std::complex

## Example
```cpp
#include <complex>
 
static_assert(std::tuple_size_v<std::complex<float>> == 2);
 
static_assert([]
{
    using namespace std::literals;
    auto [re, im] = -1.5 + 2.5i;
    return re == -1.5 && im == 2.5;
}());
 
static_assert([]
{
    using namespace std::literals;
    auto z = std::complex<double>{};
    auto& [re, im] = z;
    re = 1.0;
    im = 2.0;
    return z == 1.0 + 2.0i;
}());
 
int main() {}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_size](/cpp/utility/tuple_size/)
- [std::tuple_element<std::complex>](/cpp/numeric/complex/tuple_element/)
- [std::complex](/cpp/numeric/complex/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
