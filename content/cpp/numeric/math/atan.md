---
title: "std::atan, std::atanf, std::atanl"
source_path: "cpp/numeric/math/atan"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the principal value of the arc tangent of num.The library provides overloads of std::atan for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float atan ( float num );
double atan ( double num );
long double atan ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
atan ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float atanf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double atanl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
atan ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double atan ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/atan.html) that in case of underflow, num is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/cpp/types/climits/#Limits_of_floating-point_types), [FLT_MIN](/cpp/types/climits/), and [LDBL_MIN](/cpp/types/climits/) is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::atan(num) has the same effect as std::atan(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << "atan(1) = " << std::atan(1) << '\n'
              << "4*atan(1) = " << 4 * std::atan(1) << '\n';
 
    // special values
    std::cout << "atan(Inf) = " << std::atan(INFINITY) << '\n'
              << "2*atan(Inf) = " << 2 * std::atan(INFINITY) << '\n'
              << "atan(-0.0) = " << std::atan(-0.0) << '\n'
              << "atan(+0.0) = " << std::atan(0) << '\n';
}
```

## See also
- [asinasinfasinl](/cpp/numeric/math/asin/)
- [acosacosfacosl](/cpp/numeric/math/acos/)
- [atan2atan2fatan2l](/cpp/numeric/math/atan2/)
- [tantanftanl](/cpp/numeric/math/tan/)
- [atan(std::complex)](/cpp/numeric/complex/atan/)
- [atan(std::valarray)](/cpp/numeric/valarray/atan/)
- [C documentation](/c/numeric/math/atan/)
