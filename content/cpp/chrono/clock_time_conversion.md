---
title: "std::chrono::clock_time_conversion"
source_path: "cpp/chrono/clock_time_conversion"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

std::chrono::clock_time_conversion is a trait that specifies how to convert a [std::chrono::time_point](/cpp/chrono/time_point/) of the Source clock to that of the Dest clock. It does so by providing a const-callable operator() that accepts an argument of type [std::chrono::time_point](/cpp/chrono/time_point/)<Source, Duration> and returns a [std::chrono::time_point](/cpp/chrono/time_point/)<Dest, OtherDuration> that represents an equivalent point in time. The duration of the returned time point is computed from the source duration in a manner that varies for each specialization. clock_time_conversion is normally only used indirectly, via std::chrono::clock_cast.

## Declarations
```cpp
template< class Dest, class Source >
struct clock_time_conversion {};
```
_(since C++20)_

## Parameters
- `t`: time point to convert

## Return value
The result of the conversion as described above:

## See also
- [clock_cast](/cpp/chrono/clock_cast/)
