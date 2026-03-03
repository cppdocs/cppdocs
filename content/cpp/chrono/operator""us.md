---
title: "std::literals::chrono_literals::operator\"\"us"
source_path: "cpp/chrono/operatorus"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Forms a [std::chrono::duration](/cpp/chrono/duration/) literal representing microseconds.

## Declarations
```cpp
constexpr std::chrono::microseconds
operator""us( unsigned long long us );
```
_(since C++14)_

```cpp
constexpr std::chrono::duration</*unspecified*/, std::micro>
operator""us( long double us );
```
_(since C++14)_

## Parameters
- `us`: the number of microseconds

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
    auto d1 = 250us;
    std::chrono::microseconds d2 = 1ms;
    std::cout << d1 << " = " << d1.count() << " microseconds\n"
              << 1ms << " = " << d2.count() << " microseconds\n";
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
