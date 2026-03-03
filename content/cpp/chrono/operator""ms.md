---
title: "std::literals::chrono_literals::operator\"\"ms"
source_path: "cpp/chrono/operatorms"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Forms a [std::chrono::duration](/cpp/chrono/duration/) literal representing milliseconds.

## Declarations
```cpp
constexpr std::chrono::milliseconds
operator""ms( unsigned long long ms );
```
_(since C++14)_

```cpp
constexpr std::chrono::duration</*unspecified*/, std::milli>
operator""ms( long double ms );
```
_(since C++14)_

## Parameters
- `ms`: the number of milliseconds

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
    constexpr auto d1{250ms};
    constexpr std::chrono::milliseconds d2{1s};
    std::cout << d1 << " = " << d1.count() << " milliseconds\n"
              << d2 << " = " << d2.count() << " milliseconds\n";
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
