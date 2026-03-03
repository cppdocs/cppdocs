---
title: "std::sqrt(std::valarray)"
source_path: "cpp/numeric/valarray/sqrt"
header: "<valarray>"
category: "numeric"
---

For each element in va computes the square root of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> sqrt( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing square roots of the values in va.

## Notes
Unqualified function (sqrt) is used to perform the computation. If such function is not available, [std::sqrt](/cpp/numeric/math/sqrt/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cassert>
#include <complex>
#include <cstddef>
#include <iostream>
#include <numbers>
#include <valarray>
 
using CD = std::complex<double>;
using VA = std::valarray<CD>;
 
// return all n complex roots out of a given complex number x
VA root(CD x, unsigned n)
{
    const double mag = std::pow(std::abs(x), 1.0 / n);
    const double step = 2.0 * std::numbers::pi / n;
    double phase = std::arg(x) / n;
    VA v(n);
    for (std::size_t i{}; i != n; ++i, phase += step)
        v[i] = std::polar(mag, phase);
    return v;
}
 
// return n complex roots of each element in v; in the output valarray first
// goes the sequence of all n roots of v[0], then all n roots of v[1], etc.
VA root(VA v, unsigned n)
{
    VA o(v.size() * n);
    VA t(n);
    for (std::size_t i = 0; i != v.size(); ++i)
    {
        t = root(v[i], n);
        for (unsigned j = 0; j != n; ++j)
            o[n * i + j] = t[j];
    }
    return o;
}
 
// floating-point numbers comparator that tolerates given rounding error
inline bool is_equ(CD x, CD y, double tolerance = 0.000'000'001)
{
    return std::abs(std::abs(x) - std::abs(y)) < tolerance;
}
 
int main()
{
    // input coefficients for polynomial x³ + p·x + q
    const VA p{1, 2, 3, 4, 5, 6, 7, 8};
    const VA q{1, 2, 3, 4, 5, 6, 7, 8};
 
    // the solver
    const VA d = std::sqrt(std::pow(q / 2, 2) + std::pow(p / 3, 3));
    const VA u = root(-q / 2 + d, 3);
    const VA n = root(-q / 2 - d, 3);
 
    // allocate memory for roots: 3 * number of input cubic polynomials
    VA x[3];
    for (std::size_t t = 0; t != 3; ++t)
        x[t].resize(p.size());
 
    auto is_proper_root = [](CD a, CD b, CD p) { return is_equ(a * b + p / 3.0, 0.0); };
 
    // sieve out 6 out of 9 generated roots, leaving only 3 proper roots (per polynomial)
    for (std::size_t i = 0; i != p.size(); ++i)
        for (std::size_t j = 0, r = 0; j != 3; ++j)
            for (std::size_t k = 0; k != 3; ++k)
                if (is_proper_root(u[3 * i + j], n[3 * i + k], p[i]))
                    x[r++][i] = u[3 * i + j] + n[3 * i + k];
 
    std::cout << "Depressed cubic equation:   Root 1: \t\t Root 2: \t\t Root 3:\n";
    for (std::size_t i = 0; i != p.size(); ++i)
    {
        std::cout << "x³ + " << p[i] << "·x + " << q[i] << " = 0  "
                  << std::fixed << x[0][i] << "  " << x[1][i] << "  " << x[2][i]
                  << std::defaultfloat << '\n';
 
        assert(is_equ(std::pow(x[0][i], 3) + x[0][i] * p[i] + q[i], 0.0));
        assert(is_equ(std::pow(x[1][i], 3) + x[1][i] * p[i] + q[i], 0.0));
        assert(is_equ(std::pow(x[2][i], 3) + x[2][i] * p[i] + q[i], 0.0));
    }
}
```

## See also
- [pow(std::valarray)](/cpp/numeric/valarray/pow/)
- [std::pow](/cpp/numeric/math/pow/)
- [sqrtsqrtfsqrtl](/cpp/numeric/math/sqrt/)
- [sqrt(std::complex)](/cpp/numeric/complex/sqrt/)
