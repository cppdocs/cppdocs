---
title: "std::chrono::operator<<(std::chrono::zoned_time)"
source_path: "cpp/chrono/zoned_time/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs tp to the stream os, as if by [std::format](/cpp/utility/format/format/)(os.getloc(), fmt, tp), where fmt is "{:L%F %T %Z}" if CharT is char, or L"{:L%F %T %Z}" if CharT is wchar_t.

## Declarations
```cpp
template< class CharT, class Traits, class Duration, class TimeZonePtr >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::zoned_time<Duration, TimeZonePtr>& tp );
```
_(since C++20)_

## Parameters
- `os`: output stream
- `tp`: zoned_time to output

## Return value
os

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | the given locale was used by default | L is needed to use the given locale |

## See also
- [std::formatter<std::chrono::zoned_time>](/cpp/chrono/zoned_time/formatter/)
