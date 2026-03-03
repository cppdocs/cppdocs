---
title: "std::literals::chrono_literals::operator\"\"h"
source_path: "cpp/chrono/operatorh"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Forms a [std::chrono::duration](/cpp/chrono/duration/) literal representing hours.

## Declarations
```cpp
constexpr std::chrono::hours
operator""h( unsigned long long hrs );
```
_(since C++14)_

```cpp
constexpr std::chrono::duration</*unspecified*/, std::ratio<3600,1>>
operator""h( long double hrs );
```
_(since C++14)_

## Parameters
- `hrs`: the number of hours

## Return value
The [std::chrono::duration](/cpp/chrono/duration/) literal.

## Notes
This operator is declared in the namespace std::literals::chrono_literals, where both literals and chrono_literals are [inline namespaces](/cpp/language/namespace/#Inline_namespaces). Access to this operator can be gained with:

In addition, within the namespace std::chrono, the directive using namespace literals::chrono_literals; is provided by the [standard library](/cpp/standard_library/), so that if a programmer uses using namespace std::chrono; to gain access to the classes in the [chrono library](/cpp/chrono/), the corresponding literal operators become visible as well.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
    auto day = 24h;
    auto halfhour = 0.5h;
    std::cout << "one day is " << day.count() << " hours (" << day << ")\n"
              << "half an hour is " << halfhour.count() << " hours ("
              << halfhour << ")\n";
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
