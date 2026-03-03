---
title: "std::formatter<std::chrono::month_day>"
source_path: "cpp/chrono/month_day/formatter"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Specialization of [std::formatter](/cpp/utility/format/formatter/) that defines formatting rules for std::chrono::month_day.

## Declarations
```cpp
template< class CharT >
struct formatter<std::chrono::month_day, CharT>;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <format>
#include <iostream>
 
int main()
{
    using namespace std::chrono_literals;
    constexpr std::chrono::month_day md{std::chrono::February / 29d};
 
    std::cout << "%B: " << std::format("{:%B}", md) << '\n'
              << "%d: " << std::format("{:%d}", md) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | formatter used the global locale or passed locale | default "C" locale is used when L is absent |

## See also
- [format](/cpp/utility/format/format/)
