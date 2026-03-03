---
title: "std::isgreater"
source_path: "cpp/numeric/math/isgreater"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the floating point number x is greater than the floating-point number y, without setting floating-point exceptions.The library provides overloads for all cv-unqualified floating-point types as the type of the parameters x and y.(since C++23)

## Declarations
```cpp
bool isgreater( float x, float y );
bool isgreater( double x, double y );
bool isgreater( long double x, long double y );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool isgreater( /* floating-point-type */ x,
/* floating-point-type */ y );
```
_(since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
bool isgreater( Arithmetic1 x, Arithmetic2 y );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values

## Return value
true if x > y, false otherwise.

## Notes
The built-in operator> for floating-point numbers may set [FE_INVALID](/cpp/numeric/fenv/fe_exceptions/) if one or both of the arguments is NaN. This function is a "quiet" version of operator>.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::isgreater(num1, num2) has the same effect as std::isgreater(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## See also
- [greater](/cpp/utility/functional/greater/)
- [isless](/cpp/numeric/math/isless/)
- [C documentation](/c/numeric/math/isgreater/)
