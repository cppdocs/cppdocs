---
title: "std::literals::chrono_literals::operator\"\"min"
source_path: "cpp/chrono/operatormin"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Forms a [std::chrono::duration](/cpp/chrono/duration/) literal representing minutes.

## Declarations
```cpp
constexpr chrono::minutes
operator""min( unsigned long long mins );
```
_(since C++14)_

```cpp
constexpr chrono::duration</*unspecified*/, ratio<60,1>>
operator""min( long double mins );
```
_(since C++14)_

## Parameters
- `mins`: the number of minutes

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
    auto lesson = 45min;
    auto halfmin = 0.5min;
    std::cout << "One lesson is " << lesson.count() << " minutes"
                 " (" << lesson << ")\n"
              << "Half a minute is " << halfmin.count() << " minutes"
                 " (" << halfmin << ")\n";
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
