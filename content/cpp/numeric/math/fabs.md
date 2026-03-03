---
title: "std::abs(float), std::fabs, std::fabsf, std::fabsl"
source_path: "cpp/numeric/math/fabs"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-4) Computes the absolute value of the floating-point value num.The library provides overloads of std::abs and std::fabs for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
float abs( float num );
double abs( double num );
long double abs( long double num );
```
_(until C++23)_

```cpp
constexpr /* floating-point-type */
abs( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
float fabs ( float num );
double fabs ( double num );
long double fabs ( long double num );
```
_(until C++23)_

```cpp
constexpr /* floating-point-type */
fabs ( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
float fabsf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double fabsl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double fabs ( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
If successful, returns the absolute value of arg (|arg|). The value returned is exact and does not depend on any rounding modes.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::fabs(num) has the same effect as std::fabs(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << "abs(+3.0) = " << std::abs(+3.0) << '\n'
              << "abs(-3.0) = " << std::abs(-3.0) << '\n';
 
    // special values
    std::cout << "abs(-0.0) = " << std::abs(-0.0) << '\n'
              << "abs(-Inf) = " << std::abs(-INFINITY) << '\n'
              << "abs(-NaN) = " << std::abs(-NAN) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2192 | C++98 | overloads of std::abs wereinconsistently declared in two headers | declared these overloadsin both headers |
| LWG 2735 | C++11 | overloads of std::abs for integer typesreturning double was erroneously required | removed the requirement |

## See also
- [abs(int)labsllabs](/cpp/numeric/math/abs/)
- [copysigncopysignfcopysignl](/cpp/numeric/math/copysign/)
- [signbit](/cpp/numeric/math/signbit/)
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [abs(std::valarray)](/cpp/numeric/valarray/abs/)
- [C documentation](/c/numeric/math/fabs/)
