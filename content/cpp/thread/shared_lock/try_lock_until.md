---
title: "std::shared_lock<Mutex>::try_lock_until"
source_path: "cpp/thread/shared_lock/try_lock_until"
category: "thread"
since: "C++14"
---

Tries to lock the associated mutex in shared mode. Blocks until specified timeout_time has been reached or the lock is acquired, whichever comes first. On successful lock acquisition returns true, otherwise returns false. May block for longer than until timeout_time has been reached.

## Declarations
```cpp
template< class Clock, class Duration >
bool try_lock_until( const std::chrono::time_point<Clock,Duration>& timeout_time );
```
_(since C++14)_

## Parameters
- `timeout_time`: maximum time point to block until

## Return value
true if the ownership of the mutex has been acquired successfully, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_lock/lock/)
- [try_lock](/cpp/thread/shared_lock/try_lock/)
- [try_lock_for](/cpp/thread/shared_lock/try_lock_for/)
- [unlock](/cpp/thread/shared_lock/unlock/)
- [try_lock_until](/cpp/thread/unique_lock/try_lock_until/)
- [TimedLockable](/cpp/named_req/timedlockable/)
