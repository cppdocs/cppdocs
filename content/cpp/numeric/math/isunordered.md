---
title: "std::isunordered"
source_path: "cpp/numeric/math/isunordered"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the floating point numbers x and y are unordered, that is, one or both are NaN and thus cannot be meaningfully compared with each other.The library provides overloads for all cv-unqualified floating-point types as the type of the parameters x and y.(since C++23)

## Declarations
```cpp
bool isunordered( float x, float y );
bool isunordered( double x, double y );
bool isunordered( long double x, long double y );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool isunordered( /* floating-point-type */ x,
/* floating-point-type */ y );
```
_(since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
bool isunordered( Arithmetic1 x, Arithmetic2 y );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values

## Return value
true if either x or y is NaN, false otherwise.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::isunordered(num1, num2) has the same effect as std::isunordered(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
 
#define SHOW_UNORDERED(x, y) \
    std::cout << std::boolalpha << "isunordered(" \
              << #x << ", " << #y << "): " \
              << std::isunordered(x, y) << '\n'
 
int main()
{
    SHOW_UNORDERED(10, 01);
    SHOW_UNORDERED(INFINITY, NAN);
    SHOW_UNORDERED(INFINITY, INFINITY);
    SHOW_UNORDERED(NAN, NAN);
}
```

## See also
- [fpclassify](/cpp/numeric/math/fpclassify/)
- [isnan](/cpp/numeric/math/isnan/)
- [C documentation](/c/numeric/math/isunordered/)
