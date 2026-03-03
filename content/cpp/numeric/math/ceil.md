---
title: "std::ceil, std::ceilf, std::ceill"
source_path: "cpp/numeric/math/ceil"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the least integer value not less than num.The library provides overloads of std::ceil for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float ceil ( float num );
double ceil ( double num );
long double ceil ( long double num );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
ceil ( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
float ceilf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double ceill( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
ceil ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double ceil ( Integer num );
```
_(constexpr since C++23)_

## Parameters
- `num`: floating point or integer value

## Return value
If no errors occur, the smallest integer value not less than num, that is ⌈num⌉, is returned.

## Notes
[FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) may be (but is not required to be) raised when rounding a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so this function never overflows on its own; however the result may overflow any integer type (including [std::intmax_t](/cpp/types/integer/)), when stored in an integer variable. It is for this reason that the return type is floating-point not integral.

This function (for double argument) behaves as if (except for the freedom to not raise [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/)) implemented by the following code:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::ceil(num) has the same effect as std::ceil(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::fixed
              << "ceil(+2.4) = " << std::ceil(+2.4) << '\n'
              << "ceil(-2.4) = " << std::ceil(-2.4) << '\n'
              << "ceil(-0.0) = " << std::ceil(-0.0) << '\n'
              << "ceil(-Inf) = " << std::ceil(-INFINITY) << '\n';
}
```

## See also
- [floorfloorffloorl](/cpp/numeric/math/floor/)
- [trunctruncftruncl](/cpp/numeric/math/trunc/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/cpp/numeric/math/round/)
- [nearbyintnearbyintfnearbyintl](/cpp/numeric/math/nearbyint/)
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/cpp/numeric/math/rint/)
- [C documentation](/c/numeric/math/ceil/)
