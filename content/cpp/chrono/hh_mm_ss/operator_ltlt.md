---
title: "std::chrono::operator<<(std::chrono::hh_mm_ss)"
source_path: "cpp/chrono/hh_mm_ss/operator"
aliases:
  - "/cpp/chrono/hh_mm_ss/operator/"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Outputs t into the stream os.

## Declarations
```cpp
template< class CharT, class Traits, class Duration >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::hh_mm_ss<Duration>& t );
```
_(since C++20)_

## Parameters
- `os`: the output stream
- `t`: the time of day to be output

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
- [std::formatter<std::chrono::hh_mm_ss>](/cpp/chrono/hh_mm_ss/formatter/)
