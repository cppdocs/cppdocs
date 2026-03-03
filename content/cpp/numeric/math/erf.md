---
title: "std::erf, std::erff, std::erfl"
source_path: "cpp/numeric/math/erf"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [error function](https://en.wikipedia.org/wiki/Error_function) of num.The library provides overloads of std::erf for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float erf ( float num );
double erf ( double num );
long double erf ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
erf ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float erff( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double erfl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
erf ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double erf ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Notes
Underflow is guaranteed if |num| < [DBL_MIN](/cpp/types/climits/) * ([std::sqrt](/cpp/numeric/math/sqrt/)(π) / 2).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::erf(num) has the same effect as std::erf(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
 
double phi(double x1, double x2)
{
    return (std::erf(x2 / std::sqrt(2)) - std::erf(x1 / std::sqrt(2))) / 2;
}
 
int main()
{
    std::cout << "Normal variate probabilities:\n"
              << std::fixed << std::setprecision(2);
    for (int n = -4; n < 4; ++n)
        std::cout << '[' << std::setw(2) << n
                  << ':' << std::setw(2) << n + 1 << "]: "
                  << std::setw(5) << 100 * phi(n, n + 1) << "%\n";
 
    std::cout << "Special values:\n"
              << "erf(-0) = " << std::erf(-0.0) << '\n'
              << "erf(Inf) = " << std::erf(INFINITY) << '\n';
}
```

## See also
- [erfcerfcferfcl](/cpp/numeric/math/erfc/)
- [C documentation](/c/numeric/math/erf/)
