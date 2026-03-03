---
title: "std::shared_timed_mutex::try_lock_shared_until"
source_path: "cpp/thread/shared_timed_mutex/try_lock_shared_until"
category: "thread"
since: "C++14"
---

Tries to lock the mutex in shared mode. Blocks until specified timeout_time has been reached or the lock is acquired, whichever comes first. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
template< class Clock, class Duration >
bool try_lock_shared_until( const std::chrono::time_point<Clock,Duration>& timeout_time );
```
_(since C++14)_

## Parameters
- `timeout_time`: maximum time point to block until

## Return value
true if the shared lock ownership was acquired successfully, otherwise false.

## Example
This section is incompleteReason: no example

## See also
- [try_lock_until](/cpp/thread/shared_timed_mutex/try_lock_until/)
- [try_lock_shared](/cpp/thread/shared_timed_mutex/try_lock_shared/)
- [try_lock_shared_for](/cpp/thread/shared_timed_mutex/try_lock_shared_for/)
