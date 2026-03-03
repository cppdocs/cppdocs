---
title: "std::pow(std::valarray)"
source_path: "cpp/numeric/valarray/pow"
header: "<valarray>"
category: "numeric"
---

Raises a value to a power.

## Declarations
```cpp
template< class T >
std::valarray<T> pow( const std::valarray<T>& base, const std::valarray<T>& exp );
```

```cpp
template< class T >
std::valarray<T> pow( const std::valarray<T>& base,
const typename std::valarray<T>::value_type& vexp );
```

```cpp
template< class T >
std::valarray<T> pow( const typename std::valarray<T>::value_type& vbase,
const std::valarray<T>& exp );
```

## Parameters
- `base`: numeric array containing the values of the base
- `exp`: numeric array containing the values of the exponent
- `vbase`: a value defining the base
- `vexp`: a value defining the exponent

## Return value
A numeric array containing the results of exponentiation.

## Notes
Unqualified function (pow) is used to perform the computation. If such function is not available, [std::pow](/cpp/numeric/math/pow/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <valarray>
 
class show
{
    friend std::ostream& operator<<(std::ostream& os, show const& r)
    {
        constexpr char const* sup[]
        {
            "\u2070", "\u00B9", "\u00B2", "\u00B3", "\u2074",
            "\u2075", "\u2076", "\u2077", "\u2078", "\u2079"
        };
 
        for (std::size_t n = 0; n != r.bases.size(); ++n)
        {
            os << std::left << r.bases[n] << std::left;
            if (n < r.exponents.size())
                os << sup[r.exponents[n] % 10] << ' ';
            else
                os << "  ";
        }
 
        if (r.results.size() != 0)
        {
            os << '=';
            for (std::size_t n = 0; n != r.results.size(); ++n)
                os << ' ' << r.results[n];
        }
 
        return os << '\n';
    }
 
public:
    std::valarray<int> bases{}, exponents{}, results{};
};
 
int main()
{
    constexpr int base{2};
    constexpr int exponent{5};
    const std::valarray<int> bases{1, 2, 3, 4, 5, 6, 7};
    const std::valarray<int> exponents{0, 1, 2, 3, 4, 5, 6};
    const std::valarray<int> powers1 = std::pow(bases, exponents);
    const std::valarray<int> powers2 = std::pow(bases, exponent);
    const std::valarray<int> powers3 = std::pow(base, exponents);
 
    std::cout
        << "pow(const std::valarray<T>& base, const std::valarray<T>& exp); (1)\n"
        << "base : " << show{bases}
        << "exp  : " << show{exponents}
        << "pow  : " << show{bases, exponents, powers1}
        << '\n'
        << "pow(const std::valarray<T>& base, const value_type& vexp); (2)\n"
        << "base : " << show{bases}
        << "vexp : " << exponent << '\n'
        << "pow  : " << show{bases, std::valarray<int>(exponent, bases.size()), powers2}
        << '\n'
        << "pow(const value_type& vbase, const std::valarray<T>& exp); (3)\n"
        << "vbase: " << base << '\n'
        << "exp  : " << show{exponents}
        << "pow  : " << show{std::valarray<int>(base, bases.size()), exponents, powers3};
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3074 | C++98 | T is deduced from both the scalar and the valarray for (2,3), disallowing mixed-type calls | only deduce T from the valarray |

## See also
- [sqrt(std::valarray)](/cpp/numeric/valarray/sqrt/)
- [std::sqrt](/cpp/numeric/math/sqrt/)
- [powpowfpowl](/cpp/numeric/math/pow/)
- [pow(std::complex)](/cpp/numeric/complex/pow/)
