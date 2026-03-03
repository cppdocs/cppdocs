---
title: "std::chrono::operator<<(std::chrono::gps_time)"
source_path: "cpp/chrono/gps_clock/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs tp into the stream os, as if by os << [std::format](/cpp/utility/format/format/)(os.getloc(), STATICALLY-WIDEN("{:L%F %T}"), tp), where STATICALLY_WIDEN<CharT>("{:L%F %T}") is "{:L%F %T}" if CharT is char, and L"{:L%F %T}" if CharT is wchar_t.

## Declarations
```cpp
template< class CharT, class Traits, class Duration >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::gps_time<Duration>& tp );
```
_(since C++20)_

## Return value
os

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | the given locale was used by default | L is needed to use the given locale |

## See also
- [std::formatter<std::chrono::gps_time>](/cpp/chrono/gps_clock/formatter/)
- [format](/cpp/utility/format/format/)
