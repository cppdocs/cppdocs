---
title: "std::numeric_limits<T>::signaling_NaN"
source_path: "cpp/types/numeric_limits/signaling_NaN"
category: "types"
since: "C++11"
---

Returns the special value "signaling [not-a-number](https://en.wikipedia.org/wiki/NaN)", as represented by the floating-point type T. Only meaningful if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_signaling_NaN == true. In IEEE 754, the most common binary representation of floating-point numbers, any value with all bits of the exponent set and at least one bit of the fraction set represents a NaN. It is implementation-defined which values of the fraction represent quiet or signaling NaNs, and whether the sign bit is meaningful.

## Declarations
```cpp
static T signaling_NaN() throw();
```
_(until C++11)_

```cpp
static constexpr T signaling_NaN() noexcept;
```
_(since C++11)_

## Notes
A NaN never compares equal to itself. Copying a NaN is not required, by IEEE-754, to preserve its bit representation (sign and [payload](/cpp/numeric/math/nan/)), though most implementation do.

When a signaling NaN is used as an argument to an arithmetic expression, the appropriate floating-point exception may be raised and the NaN is "quieted", that is, the expression returns a quiet NaN.

## Example
```cpp
#include <cfenv>
#include <iostream>
#include <limits>
 
#pragma STDC_FENV_ACCESS on
 
void show_fe_exceptions()
{
    int n = std::fetestexcept(FE_ALL_EXCEPT);
 
    if (n & FE_INVALID)
        std::cout << "FE_INVALID is raised\n";
    else if (n == 0)
        std::cout << "no exceptions are raised\n";
 
    std::feclearexcept(FE_ALL_EXCEPT);
}
 
int main()
{
    double snan = std::numeric_limits<double>::signaling_NaN();
    std::cout << "After sNaN was obtained, ";
    show_fe_exceptions();
 
    double qnan = snan * 2.0;
    std::cout << "After sNaN was multiplied by 2, ";
    show_fe_exceptions();
 
    double qnan2 = qnan * 2.0;
    std::cout << "After the quieted NaN was multiplied by 2, ";
    show_fe_exceptions();
 
    std::cout << "The result is " << qnan2 << '\n';
}
```

## See also
- [has_signaling_NaN](/cpp/types/numeric_limits/has_signaling_nan/)
- [quiet_NaN](/cpp/types/numeric_limits/quiet_nan/)
- [isnan](/cpp/numeric/math/isnan/)
