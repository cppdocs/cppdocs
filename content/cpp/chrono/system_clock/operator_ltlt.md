---
title: "std::chrono::operator<<(std::chrono::sys_time)"
source_path: "cpp/chrono/system_clock/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs tp into the stream os.

## Declarations
```cpp
template< class CharT, class Traits, class Duration >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::sys_time<Duration>& tp );
```
_(since C++20)_

```cpp
template< class CharT, class Traits, class Duration >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::sys_days& tp );
```
_(since C++20)_

## Return value
os

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | the given locale was used by default | L is needed to use the given locale |

## See also
- [std::formatter<std::chrono::sys_time>](/cpp/chrono/system_clock/formatter/)
- [format](/cpp/utility/format/format/)
- [operator<<](/cpp/chrono/year_month_day/operator_ltlt/)
