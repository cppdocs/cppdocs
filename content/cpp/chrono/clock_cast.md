---
title: "std::chrono::clock_cast"
source_path: "cpp/chrono/clock_cast"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Converts the time point t of a clock Source to an equivalent time point of the clock Dest, using [std::chrono::system_clock](/cpp/chrono/system_clock/) and/or std::chrono::utc_clock as intermediaries if necessary.

## Declarations
```cpp
template< class Dest, class Source, class Duration >
auto clock_cast( const std::chrono::time_point<Source, Duration>& t );
```
_(since C++20)_

## Return value
The result of the conversion, determined as described above.

## Example
This section is incompleteReason: no example

## See also
- [clock_time_conversion](/cpp/chrono/clock_time_conversion/)
