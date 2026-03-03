---
title: "std::sqrt(std::complex)"
source_path: "cpp/numeric/complex/sqrt"
header: "<complex>"
category: "numeric"
---

Computes the square root of the complex number z with a branch cut along the negative real axis.

## Declarations
```cpp
template< class T >
std::complex<T> sqrt( const std::complex<T>& z );
```

## Parameters
- `z`: complex number to take the square root of

## Return value
If no errors occur, returns the square root of z, in the range of the right half-plane, including the imaginary axis ([0; +∞) along the real axis and (−∞; +∞) along the imaginary axis).

## Notes
The semantics of this function are intended to be consistent with the C function [csqrt](/c/numeric/complex/csqrt/).

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << "Square root of -4 is "
              << std::sqrt(std::complex<double>(-4.0, 0.0)) << '\n'
              << "Square root of (-4,-0) is "
              << std::sqrt(std::complex<double>(-4.0, -0.0))
              << " (the other side of the cut)\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2597 | C++98 | specification mishandles signed zero imaginary parts | erroneous requirement removed |

## See also
- [pow(std::complex)](/cpp/numeric/complex/pow/)
- [sqrtsqrtfsqrtl](/cpp/numeric/math/sqrt/)
- [sqrt(std::valarray)](/cpp/numeric/valarray/sqrt/)
- [std::sqrt](/cpp/numeric/math/sqrt/)
- [C documentation](/c/numeric/complex/csqrt/)
