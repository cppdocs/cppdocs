---
title: "std::chrono::operator<<(std::chrono::year_month_day)"
source_path: "cpp/chrono/year_month_day/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs a textual representation of ymd into the stream os. This first forms a [std::basic_string](/cpp/string/basic_string/)<CharT> s consisting of a textual representation of the date in the format yyyy-mm-dd (same as the one output by [formatter](/cpp/chrono/year_month_day/formatter/) with the %F specifier). Then, if !ymd.ok(), appends " is not a valid date" to s. Inserts s into os.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::year_month_day& ymd );
```
_(since C++20)_

## Return value
os

## Example
This section is incompleteReason: no example

## See also
- [format](/cpp/utility/format/format/)
- [std::formatter<std::chrono::year_month_day>](/cpp/chrono/year_month_day/formatter/)
