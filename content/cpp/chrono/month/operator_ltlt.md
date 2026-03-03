---
title: "std::chrono::operator<<(std::chrono::month)"
source_path: "cpp/chrono/month/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

If !m.ok(), inserts unsigned(m) followed by " is not a valid month" to os. Otherwise, forms a [std::basic_string](/cpp/string/basic_string/)<CharT> s consisting of the abbreviated month name for the month represented by m, determined using the locale associated with os, and inserts s into os.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::chrono::month& m );
```
_(since C++20)_

## Return value
os

## Notes
This operator<< is primarily intended for debugging use. For control over formatting, use [std::format](/cpp/utility/format/format/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | the given locale was used by default | L is needed to use the given locale |

## See also
- [format](/cpp/utility/format/format/)
- [std::formatter<std::chrono::month>](/cpp/chrono/month/formatter/)
