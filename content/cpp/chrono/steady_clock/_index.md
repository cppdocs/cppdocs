---
title: "std::chrono::steady_clock"
source_path: "cpp/chrono/steady_clock"
header: "<chrono>"
---

Class std::chrono::steady_clock represents a monotonic clock. The time points of this clock cannot decrease as physical time moves forward and the time between ticks of this clock is constant. This clock is not related to wall clock time (for example, it can be time since last reboot), and is most suitable for measuring intervals.

## Declarations
```cpp
class steady_clock;
```
_(since C++11)_

## See also
- [system_clock](/cpp/chrono/system_clock/)
- [high_resolution_clock](/cpp/chrono/high_resolution_clock/)
