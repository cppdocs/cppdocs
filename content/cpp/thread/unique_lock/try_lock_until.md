---
title: "std::unique_lock<Mutex>::try_lock_until"
source_path: "cpp/thread/unique_lock/try_lock_until"
category: "thread"
since: "C++11"
---

Tries to lock (i.e., takes ownership of) the associated mutex. Blocks until specified timeout_time has been reached or the lock is acquired, whichever comes first. On successful lock acquisition returns true, otherwise returns false. May block for longer than timeout_time until has been reached.

## Declarations
```cpp
template< class Clock, class Duration >
bool try_lock_until( const std::chrono::time_point<Clock, Duration>& timeout_time );
```
_(since C++11)_

## Parameters
- `timeout_time`: maximum time point to block until

## Return value
true if the ownership of the mutex has been acquired successfully, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/unique_lock/lock/)
- [try_lock](/cpp/thread/unique_lock/try_lock/)
- [try_lock_for](/cpp/thread/unique_lock/try_lock_for/)
- [TimedLockable](/cpp/named_req/timedlockable/)
- [unlock](/cpp/thread/unique_lock/unlock/)
