---
title: "std::formatter<std::chrono::duration>"
source_path: "cpp/chrono/duration/formatter"
header: "<chrono>"
category: "chrono"
---

Specialization of [std::formatter](/cpp/utility/format/formatter/) that defines formatting rules for a [std::chrono::duration](/cpp/chrono/duration/). The duration is interpreted as the time of day since midnight.

## Declarations
```cpp
template< class Rep, class Period, class CharT >
struct formatter<std::chrono::duration<Rep, Period>, CharT>;
```

## Example
This section is incompleteReason: no example

## See also
- [format](/cpp/utility/format/format/)
