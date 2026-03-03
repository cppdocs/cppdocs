---
title: "std::chrono::operator<<(std::chrono::month_weekday)"
source_path: "cpp/chrono/month_weekday/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs a textual representation of mwd into os, as if by

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::month_weekday& mwd );
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
- [std::formatter<std::chrono::month>](/cpp/chrono/month/formatter/)
