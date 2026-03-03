---
title: "std::tuple_element<std::complex>"
source_path: "cpp/numeric/complex/tuple_element"
header: "<complex>"
category: "numeric"
since: "C++26"
---

The partial specializations of [std::tuple_element](/cpp/utility/tuple_element/) for [std::complex](/cpp/numeric/complex/) provide compile-time access to the underlying real and imaginary number type of a complex, using tuple-like syntax. They are provided for structured binding support. The program is ill-formed if I >= 2.

## Declarations
```cpp
template< std::size_t I, class T >
struct tuple_element<I, std::complex<T>>;
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
#include <type_traits>
 
static_assert([z = std::complex<float>()]
{
    using T = decltype(z);
    return
#if __cpp_lib_tuple_like >= 202311L
        std::is_same_v<std::tuple_element_t<0, T>, float> &&
        std::is_same_v<std::tuple_element_t<1, T>, float> &&
#endif
        std::is_same_v<T::value_type, float>;
}());
 
int main() {}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_element](/cpp/utility/tuple_element/)
- [std::tuple_size<std::complex>](/cpp/numeric/complex/tuple_size/)
- [std::complex](/cpp/numeric/complex/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
