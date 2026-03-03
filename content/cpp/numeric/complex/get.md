---
title: "std::get(std::complex)"
source_path: "cpp/numeric/complex/get"
header: "<complex>"
category: "numeric"
since: "C++26"
---

Returns the reference to real or imaginary part from a complex when I == 0 or I == 1, respectively. It is mainly provided for structured binding support.

## Declarations
```cpp
template< std::size_t I >
friend constexpr T& get( std::complex<T>& x );
```
_(since C++26)_

```cpp
template< std::size_t I >
friend constexpr const T& get( const std::complex<T>& x );
```
_(since C++26)_

```cpp
template< std::size_t I >
friend constexpr T&& get( std::complex<T>&& x );
```
_(since C++26)_

```cpp
template< std::size_t I >
friend constexpr const T&& get( const std::complex<T>&& x );
```
_(since C++26)_

## Parameters
- `x`: a complex

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
 
static_assert([z = std::complex(1.0, 2.0)]
{
#if __cpp_lib_tuple_like >= 202311L
    return std::get<0>(z) == 1.0 and std::get<1>(z) == 2.0;
#else
    return z.real() == 1.0 and z.imag() == 2.0;
#endif
}());
 
int main() {}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [get(std::tuple)](/cpp/utility/tuple/get/)
- [get(std::pair)](/cpp/utility/pair/get/)
- [get(std::array)](/cpp/container/array/get/)
