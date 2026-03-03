---
title: "std::timed_mutex::try_lock_until"
source_path: "cpp/thread/timed_mutex/try_lock_until"
category: "thread"
since: "C++11"
---

Tries to lock the mutex. Blocks until specified timeout_time has been reached (timeout) or the lock is acquired (owns the mutex), whichever comes first. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
template< class Clock, class Duration >
bool try_lock_until( const std::chrono::time_point<Clock, Duration>& timeout_time );
```
_(since C++11)_

## Parameters
- `timeout_time`: maximum time point to block until

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2093 | C++11 | try_lock_until threw nothing | throws timeout-related exceptions |

## See also
- [lock](/cpp/thread/timed_mutex/lock/)
- [try_lock](/cpp/thread/timed_mutex/try_lock/)
- [try_lock_for](/cpp/thread/timed_mutex/try_lock_for/)
- [unlock](/cpp/thread/timed_mutex/unlock/)
- [C documentation](/c/thread/mtx_timedlock/)
