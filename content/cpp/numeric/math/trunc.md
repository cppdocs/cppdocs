---
title: "std::trunc, std::truncf, std::truncl"
source_path: "cpp/numeric/math/trunc"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the nearest integer not greater in magnitude than num.The library provides overloads of std::trunc for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float trunc ( float num );
double trunc ( double num );
long double trunc ( long double num );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
trunc ( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
float truncf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double truncl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
trunc ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double trunc ( Integer num );
```
_(constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the nearest integer value not greater in magnitude than num (in other words, num rounded towards zero) is returned.

## Notes
[FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) may be (but isn't required to be) raised when truncating a non-integer finite value.

The largest representable floating-point values are exact integers in all standard floating-point formats, so this function never overflows on its own; however the result may overflow any integer type (including [std::intmax_t](/cpp/types/integer/)), when stored in an integer variable.

The [implicit conversion](/cpp/language/implicit_cast/) from floating-point to integral types also rounds towards zero, but is limited to the values that can be represented by the target type.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::trunc(num) has the same effect as std::trunc(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <initializer_list>
#include <iostream>
 
int main()
{
    const auto data = std::initializer_list<double>
    {
        +2.7, -2.9, +0.7, -0.9, +0.0, 0.0, -INFINITY, +INFINITY, -NAN, +NAN
    };
 
    std::cout << std::showpos;
    for (double const x : data)
        std::cout << "trunc(" << x << ") == " << std::trunc(x) << '\n';
}
```

## See also
- [floorfloorffloorl](/cpp/numeric/math/floor/)
- [ceilceilfceill](/cpp/numeric/math/ceil/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/cpp/numeric/math/round/)
- [C documentation](/c/numeric/math/trunc/)
