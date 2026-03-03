---
title: "std::tan, std::tanf, std::tanl"
source_path: "cpp/numeric/math/tan"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the tangent of num (measured in radians).The library provides overloads of std::tan for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float tan ( float num );
double tan ( double num );
long double tan ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
tan ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float tanf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double tanl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
tan ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double tan ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value representing angle in radians

## Return value
If no errors occur, the tangent of num (tan(num)) is returned.

## Notes
The case where the argument is infinite is not specified to be a domain error in C (to which C++ defers), but it is defined as a [domain error in POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tan.html).

The function has mathematical poles at π(1/2 + n); however no common floating-point representation is able to represent π/2 exactly, thus there is no value of the argument for which a pole error occurs.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::tan(num) has the same effect as std::tan(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
const double pi = std::acos(-1); // or C++20's std::numbers::pi
 
int main()
{
    // typical usage
    std::cout << "tan(1*pi/4) = " << std::tan(1*pi/4) << '\n' // 45°
              << "tan(3*pi/4) = " << std::tan(3*pi/4) << '\n' // 135°
              << "tan(5*pi/4) = " << std::tan(5*pi/4) << '\n' // -135°
              << "tan(7*pi/4) = " << std::tan(7*pi/4) << '\n'; // -45°
 
    // special values
    std::cout << "tan(+0) = " << std::tan(0.0) << '\n'
              << "tan(-0) = " << std::tan(-0.0) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "tan(INFINITY) = " << std::tan(INFINITY) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [sinsinfsinl](/cpp/numeric/math/sin/)
- [coscosfcosl](/cpp/numeric/math/cos/)
- [atanatanfatanl](/cpp/numeric/math/atan/)
- [tan(std::complex)](/cpp/numeric/complex/tan/)
- [tan(std::valarray)](/cpp/numeric/valarray/tan/)
- [C documentation](/c/numeric/math/tan/)
