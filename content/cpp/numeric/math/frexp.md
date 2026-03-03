---
title: "std::frexp, std::frexpf, std::frexpl"
source_path: "cpp/numeric/math/frexp"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Decomposes given floating point value num into a normalized fraction and an integral exponent of two.The library provides overloads of std::frexp for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
float frexp ( float num, int* exp );
double frexp ( double num, int* exp );
long double frexp ( long double num, int* exp );
```
_(until C++23)_

```cpp
constexpr /* floating-point-type */
frexp ( /* floating-point-type */ num, int* exp );
```
_(since C++23)_

```cpp
float frexpf( float num, int* exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double frexpl( long double num, int* exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double frexp ( Integer num, int* exp );
```
_(constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `exp`: pointer to integer value to store the exponent to

## Return value
If num is zero, returns zero and stores zero in *exp.

## Notes
On a binary system (where [FLT_RADIX](/cpp/types/climits/) is 2), std::frexp may be implemented as

The function std::frexp, together with its dual, [std::ldexp](/cpp/numeric/math/ldexp/), can be used to manipulate the representation of a floating-point number without direct bit manipulations.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::frexp(num, exp) has the same effect as std::frexp(static_cast<double>(num), exp).

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
    std::cout << "logb()/ilogb() make " << f / std::scalbn(1.0, i)
              << " * " << std::numeric_limits<double>::radix
              << "^" << std::ilogb(f) << '\n';
}
```

## See also
- [ldexpldexpfldexpl](/cpp/numeric/math/ldexp/)
- [logblogbflogbl](/cpp/numeric/math/logb/)
- [ilogbilogbfilogbl](/cpp/numeric/math/ilogb/)
- [modfmodffmodfl](/cpp/numeric/math/modf/)
- [C documentation](/c/numeric/math/frexp/)
