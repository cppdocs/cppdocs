---
title: "std::counting_semaphore<LeastMaxValue>::try_acquire_until"
source_path: "cpp/thread/counting_semaphore/try_acquire_until"
category: "thread"
since: "C++20"
---

Tries to atomically decrement the internal counter by 1 if it is greater than 0; otherwise blocks until it is greater than 0 and can successfully decrement the internal counter, or the abs_time time point has been passed.

## Declarations
```cpp
template< class Clock, class Duration >
bool try_acquire_until( const std::chrono::time_point<Clock, Duration>& abs_time );
```
_(since C++20)_

## Parameters
- `abs_time`: the earliest time the function must wait until in order to fail

## Return value
true if it decremented the internal counter, otherwise false.

## Notes
In practice the function may take longer than abs_time to fail.

## See also
- [release](/cpp/thread/counting_semaphore/release/)
- [acquire](/cpp/thread/counting_semaphore/acquire/)
- [try_acquire](/cpp/thread/counting_semaphore/try_acquire/)
- [try_acquire_for](/cpp/thread/counting_semaphore/try_acquire_for/)
