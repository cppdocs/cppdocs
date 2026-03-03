---
title: "std::signbit"
source_path: "cpp/numeric/math/signbit"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the given floating point number num is negative.The library provides overloads for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
bool signbit( float num );
bool signbit( double num );
bool signbit( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool signbit( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr typename /*deduced-simd-t*/<V>::mask_type
signbit ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
bool signbit( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `v_num`: a data-parallel object of std::basic_simd specialization where its element type is a floating-point type

## Notes
This function detects the sign bit of zeroes, infinities, and NaNs. Along with [std::copysign](/cpp/numeric/math/copysign/), std::signbit is one of the only two portable ways to examine the sign of a NaN.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::signbit(num) has the same effect as std::signbit(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha
              << "signbit(+0.0) = " << std::signbit(+0.0) << '\n'
              << "signbit(-0.0) = " << std::signbit(-0.0) << '\n'
              << "signbit(+nan) = " << std::signbit(+NAN) << '\n'
              << "signbit(-nan) = " << std::signbit(-NAN) << '\n'
              << "signbit(+inf) = " << std::signbit(+INFINITY) << '\n'
              << "signbit(-inf) = " << std::signbit(-INFINITY) << '\n';
}
```

## See also
- [abs(float)fabsfabsffabsl](/cpp/numeric/math/fabs/)
- [copysigncopysignfcopysignl](/cpp/numeric/math/copysign/)
- [C documentation](/c/numeric/math/signbit/)
