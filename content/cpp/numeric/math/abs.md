---
title: "std::abs, std::labs, std::llabs, std::imaxabs"
source_path: "cpp/numeric/math/abs"
header: "<cstdlib>"
category: "numeric"
---

Computes the absolute value of the integer number num. The behavior is undefined if the result cannot be represented by the return type.

## Declarations
```cpp
int abs( int num );
```
_(constexpr since C++23)_

```cpp
long abs( long num );
```
_(constexpr since C++23)_

```cpp
long long abs( long long num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long labs( long num );
```
_(constexpr since C++23)_

```cpp
long long llabs( long long num );
```
_(since C++11) (constexpr since C++23)_

```cpp
std::intmax_t abs( std::intmax_t num );
```
_(since C++11) (constexpr since C++23)_

```cpp
std::intmax_t imaxabs( std::intmax_t num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: integer value

## Return value
The absolute value of num (i.e. |num|), if it is representable.

## Notes
In [2's complement](/cpp/language/types/#Range_of_values) systems, the absolute value of the most-negative value is out of range, e.g. for 32-bit 2's complement type int, [INT_MIN](/cpp/types/climits/) is -2147483648, but the would-be result 2147483648 is greater than [INT_MAX](/cpp/types/climits/), which is 2147483647.

## Example
```cpp
#include <climits>
#include <cstdlib>
#include <iostream>
 
int main()
{
    std::cout << std::showpos
              << "abs(+3) = " << std::abs(3) << '\n'
              << "abs(-3) = " << std::abs(-3) << '\n';
 
//  std::cout << std::abs(INT_MIN); // undefined behavior on 2's complement systems
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2192 | C++98 | overloads of std::abs wereinconsistently declared in two headers | declared these overloadsin both headers |

## See also
- [abs(float)fabsfabsffabsl](/cpp/numeric/math/fabs/)
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [abs(std::valarray)](/cpp/numeric/valarray/abs/)
- [C documentation](/c/numeric/math/abs/)
