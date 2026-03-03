---
title: "std::asin, std::asinf, std::asinl"
source_path: "cpp/numeric/math/asin"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the principal value of the arc sine of num.The library provides overloads of std::asin for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float asin ( float num );
double asin ( double num );
long double asin ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
asin ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float asinf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double asinl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
asin ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double asin ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If a domain error occurs, an implementation-defined value is returned (NaN where supported).

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::asin(num) has the same effect as std::asin(static_cast<double>(num)).

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
    std::cout << "asin(1.0) = " << asin(1) << '\n'
              << "2*asin(1.0) = " << 2 * asin(1) << '\n'
              << "asin(-0.5) = " << asin(-0.5) << '\n'
              << "6*asin(-0.5) =" << 6 * asin(-0.5) << '\n';
 
    // special values
    std::cout << "asin(0.0) = " << asin(0) << " asin(-0.0)=" << asin(-0.0) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "asin(1.1) = " << asin(1.1) << '\n';
 
    if (errno == EDOM)
        std::cout << "    errno == EDOM: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised" << '\n';
}
```

## See also
- [acosacosfacosl](/cpp/numeric/math/acos/)
- [atanatanfatanl](/cpp/numeric/math/atan/)
- [atan2atan2fatan2l](/cpp/numeric/math/atan2/)
- [sinsinfsinl](/cpp/numeric/math/sin/)
- [asin(std::complex)](/cpp/numeric/complex/asin/)
- [asin(std::valarray)](/cpp/numeric/valarray/asin/)
- [C documentation](/c/numeric/math/asin/)
