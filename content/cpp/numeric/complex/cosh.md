---
title: "std::cosh(std::complex)"
source_path: "cpp/numeric/complex/cosh"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex hyperbolic cosine of a complex value z.

## Declarations
```cpp
template< class T >
complex<T> cosh( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, complex hyperbolic cosine of z is returned.

## Notes
Hyperbolic cosine is an entire function in the complex plane and has no branch cuts. It is periodic with respect to the imaginary component, with period 2πi.

## See also
- [sinh(std::complex)](/cpp/numeric/complex/sinh/)
- [tanh(std::complex)](/cpp/numeric/complex/tanh/)
- [acosh(std::complex)](/cpp/numeric/complex/acosh/)
- [coshcoshfcoshl](/cpp/numeric/math/cosh/)
- [cosh(std::valarray)](/cpp/numeric/valarray/cosh/)
- [std::cosh](/cpp/numeric/math/cosh/)
- [C documentation](/c/numeric/complex/ccosh/)
