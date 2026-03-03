---
title: "std::acos, std::acosf, std::acosl"
source_path: "cpp/numeric/math/acos"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the principal value of the arc cosine of num.The library provides overloads of std::acos for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float acos ( float num );
double acos ( double num );
long double acos ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
acos ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float acosf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double acosl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
acos ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double acos ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the arc cosine of num (arccos(num)) in the range [0, π], is returned.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::acos(num) has the same effect as std::acos(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::cout << "acos(-1) = " << std::acos(-1) << '\n'
              << "acos(0.0) = " << std::acos(0.0) << '\n'
              << "2*acos(0.0) = " << 2 * std::acos(0) << '\n'
              << "acos(0.5) = " << std::acos(0.5) << '\n'
              << "3*acos(0.5) = " << 3 * std::acos(0.5) << '\n'
              << "acos(1) = " << std::acos(1) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "acos(1.1) = " << std::acos(1.1) << '\n';
 
    if (errno == EDOM)
        std::cout << "    errno == EDOM: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised" << '\n';
}
```

## See also
- [asinasinfasinl](/cpp/numeric/math/asin/)
- [atanatanfatanl](/cpp/numeric/math/atan/)
- [atan2atan2fatan2l](/cpp/numeric/math/atan2/)
- [coscosfcosl](/cpp/numeric/math/cos/)
- [acos(std::complex)](/cpp/numeric/complex/acos/)
- [acos(std::valarray)](/cpp/numeric/valarray/acos/)
- [C documentation](/c/numeric/math/acos/)
