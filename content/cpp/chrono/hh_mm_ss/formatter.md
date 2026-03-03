---
title: "std::formatter<std::chrono::hh_mm_ss>"
source_path: "cpp/chrono/hh_mm_ss/formatter"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Specialization of [std::formatter](/cpp/utility/format/formatter/) that defines formatting rules for a [std::chrono::hh_mm_ss](/cpp/chrono/hh_mm_ss/).

## Declarations
```cpp
template< class CharT >
struct formatter<std::chrono::hh_mm_ss, CharT>;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <format>
#include <iostream>
using namespace std::literals;
 
int main()
{
    std::chrono::hh_mm_ss c{16h + 32min + 10s};
 
    std::cout << "%R: " << std::format("{:%R}", c) << '\n'
              << "%T: " << std::format("{:%T}", c) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | formatter used the global locale or passed locale | default "C" locale is used when L is absent |

## See also
- [format](/cpp/utility/format/format/)
