---
title: "std::formatter<std::chrono::file_time>"
source_path: "cpp/chrono/file_clock/formatter"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Specialization of [std::formatter](/cpp/utility/format/formatter/) that defines formatting rules for a std::chrono::file_time.

## Declarations
```cpp
template< class Duration, class CharT >
struct formatter<std::chrono::file_time<Duration>, CharT>;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <format>
#include <iostream>
 
int main()
{
    std::chrono::time_point<std::chrono::utc_clock> epoch;
 
    std::cout << std::format("The time of the Unix epoch was {0:%F}T{0:%R%z}.", epoch)
              << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | formatter used the global locale or passed locale | default "C" locale is used when L is absent |

## See also
- [format](/cpp/utility/format/format/)
