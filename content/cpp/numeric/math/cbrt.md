---
title: "std::cbrt, std::cbrtf, std::cbrtl"
source_path: "cpp/numeric/math/cbrt"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the cube root of num.The library provides overloads of std::cbrt for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float cbrt ( float num );
double cbrt ( double num );
long double cbrt ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
cbrt ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float cbrtf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double cbrtl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
cbrt ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double cbrt ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the cube root of num (\(\small{\sqrt[3]{num} }\)3√num), is returned.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::cbrt(num) has the same effect as std::cbrt(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
#include <limits>
 
int main()
{
    std::cout
        << "Normal use:\n"
        << "cbrt(729)       = " << std::cbrt(729) << '\n'
        << "cbrt(-0.125)    = " << std::cbrt(-0.125) << '\n'
        << "Special values:\n"
        << "cbrt(-0)        = " << std::cbrt(-0.0) << '\n'
        << "cbrt(+inf)      = " << std::cbrt(INFINITY) << '\n'
        << "Accuracy and comparison with `pow`:\n"
        << std::setprecision(std::numeric_limits<double>::max_digits10)
        << "cbrt(343)       = " << std::cbrt(343) << '\n'
        << "pow(343,1.0/3)  = " << std::pow(343, 1.0 / 3) << '\n'
        << "cbrt(-343)      = " << std::cbrt(-343) << '\n'
        << "pow(-343,1.0/3) = " << std::pow(-343, 1.0 / 3) << '\n';
}
```

## See also
- [powpowfpowl](/cpp/numeric/math/pow/)
- [sqrtsqrtfsqrtl](/cpp/numeric/math/sqrt/)
- [hypothypotfhypotl](/cpp/numeric/math/hypot/)
- [C documentation](/c/numeric/math/cbrt/)
