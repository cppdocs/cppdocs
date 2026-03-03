---
title: "std::common_type<std::chrono::time_point>"
source_path: "cpp/chrono/time_point/common_type"
category: "chrono"
since: "C++11"
---

Exposes the type named type, which is the common type of two [std::chrono::time_point](/cpp/chrono/time_point/)s.

## Declarations
```cpp
template< class Clock, class Duration1, class Duration2 >
struct common_type<std::chrono::time_point<Clock, Duration1>,
std::chrono::time_point<Clock, Duration2>>;
```
_(since C++11)_

## Notes
The common type of two [std::chrono::time_point](/cpp/chrono/time_point/) types is a [std::chrono::time_point](/cpp/chrono/time_point/) with the same clock as the two types and the [std::common_type](/cpp/types/common_type/) of their durations.

## Example
This section is incompleteReason: no example

## See also
- [std::common_type<std::chrono::duration>](/cpp/chrono/duration/common_type/)
- [std::common_type](/cpp/types/common_type/)
- [common_type](/cpp/types/common_type/)
