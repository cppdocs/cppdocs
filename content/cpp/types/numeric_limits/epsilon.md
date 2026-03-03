---
title: "std::numeric_limits<T>::epsilon"
source_path: "cpp/types/numeric_limits/epsilon"
category: "types"
since: "C++11"
---

Returns the machine epsilon, that is, the difference between 1.0 and the next value representable by the floating-point type T. It is only meaningful if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_integer == false.

## Declarations
```cpp
static T epsilon() throw();
```
_(until C++11)_

```cpp
static constexpr T epsilon() noexcept;
```
_(since C++11)_

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <limits>
#include <type_traits>
 
template <class T>
std::enable_if_t<not std::numeric_limits<T>::is_integer, bool>
equal_within_ulps(T x, T y, std::size_t n)
{
    // Since `epsilon()` is the gap size (ULP, unit in the last place)
    // of floating-point numbers in interval [1, 2), we can scale it to
    // the gap size in interval [2^e, 2^{e+1}), where `e` is the exponent
    // of `x` and `y`.
 
    // If `x` and `y` have different gap sizes (which means they have
    // different exponents), we take the smaller one. Taking the bigger
    // one is also reasonable, I guess.
    const T m = std::min(std::fabs(x), std::fabs(y));
 
    // Subnormal numbers have fixed exponent, which is `min_exponent - 1`.
    const int exp = m < std::numeric_limits<T>::min()
                  ? std::numeric_limits<T>::min_exponent - 1
                  : std::ilogb(m);
 
    // We consider `x` and `y` equal if the difference between them is
    // within `n` ULPs.
    return std::fabs(x - y) <= n * std::ldexp(std::numeric_limits<T>::epsilon(), exp);
}
 
int main()
{
    double x = 0.3;
    double y = 0.1 + 0.2;
    std::cout << std::hexfloat;
    std::cout << "x = " << x << '\n';
    std::cout << "y = " << y << '\n';
    std::cout << (x == y ? "x == y" : "x != y") << '\n';
    for (std::size_t n = 0; n <= 10; ++n)
        if (equal_within_ulps(x, y, n))
        {
            std::cout << "x equals y within " << n << " ulps" << '\n';
            break;
        }
}
```

## See also
- [nextafternextafterfnextafterlnexttowardnexttowardfnexttowardl](/cpp/numeric/math/nextafter/)
