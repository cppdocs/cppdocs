---
title: "std::chrono::operator<<(std::chrono::year_month)"
source_path: "cpp/chrono/year_month/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs a textual representation of ym into the stream os, as if by

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::chrono::year_month& ym );
```
_(since C++20)_

## Return value
os

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | the given locale was used by default | L is needed to use the given locale |

## See also
- [format](/cpp/utility/format/format/)
- [std::formatter<std::chrono::year_month>](/cpp/chrono/year_month/formatter/)
