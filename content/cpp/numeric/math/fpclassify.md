---
title: "std::fpclassify"
source_path: "cpp/numeric/math/fpclassify"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Categorizes floating point value num into the following categories: zero, subnormal, normal, infinite, NAN, or implementation-defined category.The library provides overloads of std::fpclassify for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
int fpclassify( float num );
int fpclassify( double num );
int fpclassify( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr int fpclassify( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
int fpclassify( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
one of [FP_INFINITE](/cpp/numeric/math/fp_categories/), [FP_NAN](/cpp/numeric/math/fp_categories/), [FP_NORMAL](/cpp/numeric/math/fp_categories/), [FP_SUBNORMAL](/cpp/numeric/math/fp_categories/), [FP_ZERO](/cpp/numeric/math/fp_categories/) or implementation-defined type, specifying the category of num.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::fpclassify(num) has the same effect as std::fpclassify(static_cast<double>(num)).

## Example
```cpp
#include <cfloat>
#include <cmath>
#include <iostream>
 
auto show_classification(double x)
{
    switch (std::fpclassify(x))
    {
        case FP_INFINITE:
            return "Inf";
        case FP_NAN:
            return "NaN";
        case FP_NORMAL:
            return "normal";
        case FP_SUBNORMAL:
            return "subnormal";
        case FP_ZERO:
            return "zero";
        default:
            return "unknown";
    }
}
 
int main()
{
    std::cout << "1.0/0.0 is " << show_classification(1 / 0.0) << '\n'
              << "0.0/0.0 is " << show_classification(0.0 / 0.0) << '\n'
              << "DBL_MIN/2 is " << show_classification(DBL_MIN / 2) << '\n'
              << "-0.0 is " << show_classification(-0.0) << '\n'
              << "1.0 is " << show_classification(1.0) << '\n';
}
```

## See also
- [isfinite](/cpp/numeric/math/isfinite/)
- [isinf](/cpp/numeric/math/isinf/)
- [isnan](/cpp/numeric/math/isnan/)
- [isnormal](/cpp/numeric/math/isnormal/)
- [numeric_limits](/cpp/types/numeric_limits/)
- [C documentation](/c/numeric/math/fpclassify/)
