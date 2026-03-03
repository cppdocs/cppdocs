---
title: "std::chrono::operator<<(std::chrono::weekday)"
source_path: "cpp/chrono/weekday/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

If !wd.ok(), inserts wd.c_encoding() followed by " is not a valid weekday" into os. Otherwise, forms a [std::basic_string](/cpp/string/basic_string/)<CharT> s consisting of the abbreviated weekday name for the weekday represented by wd, determined using the locale associated with os, and inserts s into os.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::chrono::weekday& wd );
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
- [std::formatter<std::chrono::weekday>](/cpp/chrono/weekday/formatter/)
