---
title: "HUGE_VALF, HUGE_VAL, HUGE_VALL"
source_path: "cpp/numeric/math/HUGE_VAL"
header: "<cmath>"
category: "numeric"
since: "C++11"
---

The macros HUGE_VALF, HUGE_VAL and HUGE_VALL macros expand to positive floating point constant expressions which compare equal to the values returned by floating-point functions and operators in case of overflow (see [math_errhandling](/cpp/numeric/math/math_errhandling/)).

## Declarations
```cpp
#define HUGE_VALF /* implementation defined */
```
_(since C++11)_

```cpp
#define HUGE_VAL /* implementation defined */
```

```cpp
#define HUGE_VALL /* implementation defined */
```
_(since C++11)_

## Notes
On implementations that do not support floating-point infinities, these macros expand to the maximum finite number of their respective types.

C++98 added float and long double overloads of mathematical functions. There is a problem that the float overloads cannot return HUGE_VAL to indicate overflow because this macro is not guaranteed to be representable as a float.

[LWG issue 357](https://cplusplus.github.io/LWG/issue357) was raised to target this problem. LWG found that C99 has the same problem (float and long double overloads were also added in C99), and C99 introduced new macros HUGE_VALF and HUGE_VALL to solve the problem. Therefore the issue was closed and the C99 resolution was adopted in C++11.

## See also
- [INFINITY](/cpp/numeric/math/infinity/)
- [C documentation](/c/numeric/math/HUGE_VAL/)
