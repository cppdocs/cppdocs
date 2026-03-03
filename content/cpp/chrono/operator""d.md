---
title: "std::literals::chrono_literals::operator\"\"d"
source_path: "cpp/chrono/operatord"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Forms a std::chrono::day literal representing a day of the month in the calendar.

## Declarations
```cpp
constexpr std::chrono::day operator ""d( unsigned long long d ) noexcept;
```
_(since C++20)_

## Parameters
- `d`: the day value

## Return value
A std::chrono::day storing d. If d > 255, the stored value is unspecified.

## Notes
This operator is declared in the namespace std::literals::chrono_literals, where both literals and chrono_literals are [inline namespaces](/cpp/language/namespace/#Inline_namespaces). Access to this operator can be gained with:

In addition, within the namespace std::chrono, the directive using namespace literals::chrono_literals; is provided by the [standard library](/cpp/standard_library/), so that if a programmer uses using namespace std::chrono; to gain access to the classes in the [chrono library](/cpp/chrono/), the corresponding literal operators become visible as well.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::literals::chrono_literals;
 
    std::cout << static_cast<unsigned>(42d) << '\t' << 42d << '\n'
              << static_cast<unsigned>(256d) << '\t' << 256d << '\n' // unspecified
              << static_cast<unsigned>(298d) << '\t' << 298d << '\n'; // unspecified
}
```

## See also
- [(constructor)](/cpp/chrono/day/day/)
- [operator unsigned](/cpp/chrono/day/operator_unsigned/)
