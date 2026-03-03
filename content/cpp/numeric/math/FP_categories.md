---
title: "FP_NORMAL, FP_SUBNORMAL, FP_ZERO, FP_INFINITE, FP_NAN"
source_path: "cpp/numeric/math/FP_categories"
header: "<cmath>"
category: "numeric"
since: "C++11"
---

The FP_NORMAL, FP_SUBNORMAL, FP_ZERO, FP_INFINITE, FP_NAN macros each represent a distinct category of floating-point numbers. They all expand to an integer constant expression.

## Declarations
```cpp
#define FP_NORMAL /* implementation defined */
```
_(since C++11)_

```cpp
#define FP_SUBNORMAL /* implementation defined */
```
_(since C++11)_

```cpp
#define FP_ZERO /* implementation defined */
```
_(since C++11)_

```cpp
#define FP_INFINITE /* implementation defined */
```
_(since C++11)_

```cpp
#define FP_NAN /* implementation defined */
```
_(since C++11)_

## Example
```cpp
#include <cfloat>
#include <cmath>
#include <iostream>
 
auto show_classification(double x)
{
    switch (std::fpclassify(x))
    {
        case FP_INFINITE:
            return "Inf";
        case FP_NAN:
            return "NaN";
        case FP_NORMAL:
            return "normal";
        case FP_SUBNORMAL:
            return "subnormal";
        case FP_ZERO:
            return "zero";
        default:
            return "unknown";
    }
}
 
int main()
{
    std::cout << "1.0/0.0 is " << show_classification(1 / 0.0) << '\n'
              << "0.0/0.0 is " << show_classification(0.0 / 0.0) << '\n'
              << "DBL_MIN/2 is " << show_classification(DBL_MIN / 2) << '\n'
              << "-0.0 is " << show_classification(-0.0) << '\n'
              << "1.0 is " << show_classification(1.0) << '\n';
}
```

## See also
- [fpclassify](/cpp/numeric/math/fpclassify/)
- [C documentation](/c/numeric/math/FP_categories/)
