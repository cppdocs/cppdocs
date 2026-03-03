---
title: "std::floor, std::floorf, std::floorl"
source_path: "cpp/numeric/math/floor"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the largest integer value not greater than num.The library provides overloads of std::floor for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float floor ( float num );
double floor ( double num );
long double floor ( long double num );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
floor ( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
float floorf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double floorl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
floor ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double floor ( Integer num );
```
_(constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the largest integer value not greater than num, that is ⌊num⌋, is returned.

## Notes
[FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) may be (but isn't required to be) raised when rounding a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so this function never overflows on its own; however the result may overflow any integer type (including [std::intmax_t](/cpp/types/integer/)), when stored in an integer variable.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::floor(num) has the same effect as std::floor(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::fixed
              << "floor(+2.7) = " << std::floor(+2.7) << '\n'
              << "floor(-2.7) = " << std::floor(-2.7) << '\n'
              << "floor(-0.0) = " << std::floor(-0.0) << '\n'
              << "floor(-Inf) = " << std::floor(-INFINITY) << '\n';
}
```

## See also
- [ceilceilfceill](/cpp/numeric/math/ceil/)
- [trunctruncftruncl](/cpp/numeric/math/trunc/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/cpp/numeric/math/round/)
- [C documentation](/c/numeric/math/floor/)
