---
title: "std::nan, std::nanf, std::nanl"
source_path: "cpp/numeric/math/nan"
header: "<cmath>"
category: "numeric"
since: "C++11"
---

Converts the character string arg into the corresponding quiet NaN value, as if by calling [std::strtof](/cpp/string/byte/strtof/), [std::strtod](/cpp/string/byte/strtof/), or [std::strtold](/cpp/string/byte/strtof/), respectively.

## Declarations
```cpp
float nanf( const char* arg );
```
_(since C++11)_

```cpp
double nan ( const char* arg );
```
_(since C++11)_

```cpp
long double nanl( const char* arg );
```
_(since C++11)_

## Parameters
- `arg`: narrow character string identifying the contents of a NaN

## Return value
The quiet NaN value that corresponds to the identifying string arg or zero if the implementation does not support quiet NaNs.

## Example
```cpp
#include <cmath>
#include <cstdint>
#include <cstring>
#include <iostream>
 
int main()
{
    double f1 = std::nan("1");
    std::uint64_t f1n; std::memcpy(&f1n, &f1, sizeof f1);
    std::cout << "nan(\"1\") = " << f1 << " (" << std::hex << f1n << ")\n";
 
    double f2 = std::nan("2");
    std::uint64_t f2n; std::memcpy(&f2n, &f2, sizeof f2);
    std::cout << "nan(\"2\") = " << f2 << " (" << std::hex << f2n << ")\n";
}
```

## See also
- [isnan](/cpp/numeric/math/isnan/)
- [NAN]()
- [has_quiet_NaN](/cpp/types/numeric_limits/has_quiet_nan/)
- [has_signaling_NaN](/cpp/types/numeric_limits/has_signaling_nan/)
- [quiet_NaN](/cpp/types/numeric_limits/quiet_nan/)
- [signaling_NaN](/cpp/types/numeric_limits/signaling_nan/)
- [C documentation](/c/numeric/math/nan/)
