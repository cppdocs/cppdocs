---
title: "std::chrono::operator<<(std::chrono::local_time)"
source_path: "cpp/chrono/local_t/operator"
aliases:
  - "/cpp/chrono/local_t/operator/"
category: "chrono"
since: "C++20"
---

Outputs tp into the stream os, as if by os << [std::chrono::sys_time](/cpp/chrono/system_clock/)<Duration>(tp.time_since_epoch());.

## Declarations
```cpp
template< class CharT, class Traits, class Duration >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::local_time<Duration>& tp );
```
_(since C++20)_

## Return value
os

## See also
- [operator<<(std::chrono::sys_time)](/cpp/chrono/system_clock/operator_ltlt/)
