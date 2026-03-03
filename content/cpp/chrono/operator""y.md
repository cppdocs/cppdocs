---
title: "std::literals::chrono_literals::operator\"\"y"
source_path: "cpp/chrono/operatory"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Forms a std::chrono::year literal representing a year in the [proleptic Gregorian calendar](https://en.wikipedia.org/wiki/proleptic_Gregorian_calendar).

## Declarations
```cpp
constexpr std::chrono::year operator""y( unsigned long long y ) noexcept;
```
_(since C++20)_

## Parameters
- `y`: the year value

## Return value
A std::chrono::year initialized from int(y). If y is not in the range [-32767,32767], the stored value is unspecified.

## Notes
This operator is declared in the namespace std::literals::chrono_literals, where both literals and chrono_literals are [inline namespaces](/cpp/language/namespace/#Inline_namespaces). Access to this operator can be gained with:

In addition, within the namespace std::chrono, the directive using namespace literals::chrono_literals; is provided by the [standard library](/cpp/standard_library/), so that if a programmer uses using namespace std::chrono; to gain access to the classes in the [chrono library](/cpp/chrono/), the corresponding literal operators become visible as well.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::literals;
 
    std::cout << int(2020y)  << '\t' << 2020y  << '\n'
              << int(-220y)  << '\t' << -220y  << '\n'
              << int(3000y)  << '\t' << 3000y  << '\n'
              << int(32768y) << '\t' << 32768y << '\n'  // unspecified
              << int(65578y) << '\t' << 65578y << '\n'; // unspecified
}
```

## See also
- [(constructor)](/cpp/chrono/year/year/)
