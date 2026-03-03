---
title: "std::literals::chrono_literals::operator\"\"ns"
source_path: "cpp/chrono/operatorns"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Forms a [std::chrono::duration](/cpp/chrono/duration/) literal representing nanoseconds.

## Declarations
```cpp
constexpr std::chrono::nanoseconds
operator""ns( unsigned long long nsec );
```
_(since C++14)_

```cpp
constexpr std::chrono::duration</*unspecified*/, std::nano>
operator""ns( long double nsec );
```
_(since C++14)_

## Parameters
- `nsec`: the number of nanoseconds

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
    auto d1{250ns};
    std::chrono::nanoseconds d2{1us};
    std::cout << d1 << " = " << d1.count() << " nanoseconds\n"
              << d2 << " = " << d2.count() << " nanoseconds\n";
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
