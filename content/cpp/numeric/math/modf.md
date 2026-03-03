---
title: "std::modf, std::modff, std::modfl"
source_path: "cpp/numeric/math/modf"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Decomposes given floating point value num into integral and fractional parts, each having the same type and sign as num. The integral part (in floating-point format) is stored in the object pointed to by iptr.The library provides overloads of std::modf for all cv-unqualified floating-point types as the type of the parameter num and the pointed-to type of iptr.(since C++23)

## Declarations
```cpp
float modf ( float num, float* iptr );
double modf ( double num, double* iptr );
long double modf ( long double num, long double* iptr );
```
_(until C++23)_

```cpp
constexpr /* floating-point-type */
modf ( /* floating-point-type */ num,
/* floating-point-type */* iptr );
```
_(since C++23)_

```cpp
float modff( float num, float* iptr );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double modfl( long double num, long double* iptr );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double modf ( Integer num, double* iptr );
```
_(constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `iptr`: pointer to floating-point value to store the integral part to

## Return value
If no errors occur, returns the fractional part of num with the same sign as num. The integral part is put into the value pointed to by iptr.

## Notes
This function behaves as if implemented as follows:

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::modf(num, iptr) has the same effect as std::modf(static_cast<double>(num), iptr).

## Example
```cpp
#include <cmath>
#include <iostream>
#include <limits>
 
int main()
{
    double f = 123.45;
    std::cout << "Given the number " << f << " or " << std::hexfloat
              << f << std::defaultfloat << " in hex,\n";
 
    double f3;
    double f2 = std::modf(f, &f3);
    std::cout << "modf() makes " << f3 << " + " << f2 << '\n';
 
    int i;
    f2 = std::frexp(f, &i);
    std::cout << "frexp() makes " << f2 << " * 2^" << i << '\n';
 
    i = std::ilogb(f);
    std::cout << "logb()/ilogb() make " << f / std::scalbn(1.0, i) << " * "
              << std::numeric_limits<double>::radix
              << "^" << std::ilogb(f) << '\n';
 
    // special values
    f2 = std::modf(-0.0, &f3);
    std::cout << "modf(-0) makes " << f3 << " + " << f2 << '\n';
    f2 = std::modf(-INFINITY, &f3);
    std::cout << "modf(-Inf) makes " << f3 << " + " << f2 << '\n';
}
```

## See also
- [trunctruncftruncl](/cpp/numeric/math/trunc/)
- [C documentation](/c/numeric/math/modf/)
