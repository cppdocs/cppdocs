---
title: "std::isnormal"
source_path: "cpp/numeric/math/isnormal"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the given floating point number num is normal, i.e. is neither zero, subnormal, infinite, nor NaN.The library provides overloads for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
bool isnormal( float num );
bool isnormal( double num );
bool isnormal( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool isnormal( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr typename /*deduced-simd-t*/<V>::mask_type
isnormal ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
bool isnormal( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `v_num`: a data-parallel object of std::basic_simd specialization where its element type is a floating-point type

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::isnormal(num) has the same effect as std::isnormal(static_cast<double>(num)).

## Example
```cpp
#include <cfloat>
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha
              << "isnormal(NaN) = " << std::isnormal(NAN) << '\n'
              << "isnormal(Inf) = " << std::isnormal(INFINITY) << '\n'
              << "isnormal(0.0) = " << std::isnormal(0.0) << '\n'
              << "isnormal(DBL_MIN/2.0) = " << std::isnormal(DBL_MIN / 2.0) << '\n'
              << "isnormal(1.0) = " << std::isnormal(1.0) << '\n';
}
```

## See also
- [fpclassify](/cpp/numeric/math/fpclassify/)
- [isfinite](/cpp/numeric/math/isfinite/)
- [isinf](/cpp/numeric/math/isinf/)
- [isnan](/cpp/numeric/math/isnan/)
- [C documentation](/c/numeric/math/isnormal/)
