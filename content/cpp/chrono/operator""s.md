---
title: "std::literals::chrono_literals::operator\"\"s"
source_path: "cpp/chrono/operators"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Forms a [std::chrono::duration](/cpp/chrono/duration/) literal representing seconds.

## Declarations
```cpp
constexpr std::chrono::seconds
operator""s( unsigned long long secs );
```
_(since C++14)_

```cpp
constexpr std::chrono::duration</*unspecified*/>
operator""s( long double secs );
```
_(since C++14)_

## Parameters
- `secs`: the number of seconds

## Return value
The [std::chrono::duration](/cpp/chrono/duration/) literal.

## Notes
This operator is declared in the namespace std::literals::chrono_literals, where both literals and chrono_literals are [inline namespaces](/cpp/language/namespace/#Inline_namespaces). Access to this operator can be gained with:

In addition, within the namespace std::chrono, the directive using namespace literals::chrono_literals; is provided by the [standard library](/cpp/standard_library/), so that if a programmer uses using namespace std::chrono; to gain access to the classes in the [chrono library](/cpp/chrono/), the corresponding literal operators become visible as well.

[std::string](/cpp/string/basic_string/) also defines operator""s, to represent literal objects of type std::string, but it is a string literal: 10s is ten seconds, but "10"s is a two-character string.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
 
    std::chrono::seconds halfmin = 30s;
    std::cout << "Half a minute is " << halfmin.count() << " seconds"
        " (" << halfmin << ").\n"
        "A minute and a second is " << (1min + 1s).count() << " seconds.\n";
 
    std::chrono::duration moment = 0.1s;
    std::cout << "A moment is " << moment.count() << " seconds"
        " (" << moment << ").\n"
        "And thrice as much is " << (moment + 0.2s).count() << " seconds.\n";
}
```

## See also
- [(constructor)](/cpp/chrono/duration/duration/)
