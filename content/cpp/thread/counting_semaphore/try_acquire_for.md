---
title: "std::counting_semaphore<LeastMaxValue>::try_acquire_for"
source_path: "cpp/thread/counting_semaphore/try_acquire_for"
category: "thread"
since: "C++20"
---

Tries to atomically decrement the internal counter by 1 if it is greater than 0; otherwise blocks until it is greater than 0 and can successfully decrement the internal counter, or the rel_time duration has been exceeded.

## Declarations
```cpp
template< class Rep, class Period >
bool try_acquire_for( const std::chrono::duration<Rep, Period>& rel_time );
```
_(since C++20)_

## Parameters
- `rel_time`: the minimum duration the function must wait for it to fail

## Return value
true if it decremented the internal counter, otherwise false.

## Notes
In practice the function may take longer than rel_time to fail.

## See also
- [release](/cpp/thread/counting_semaphore/release/)
- [acquire](/cpp/thread/counting_semaphore/acquire/)
- [try_acquire](/cpp/thread/counting_semaphore/try_acquire/)
- [try_acquire_until](/cpp/thread/counting_semaphore/try_acquire_until/)
