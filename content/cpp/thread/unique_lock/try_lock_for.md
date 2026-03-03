---
title: "std::unique_lock<Mutex>::try_lock_for"
source_path: "cpp/thread/unique_lock/try_lock_for"
category: "thread"
since: "C++11"
---

Tries to lock (i.e., takes ownership of) the associated mutex. Blocks until specified timeout_duration has elapsed or the lock is acquired, whichever comes first. On successful lock acquisition returns true, otherwise returns false. Effectively calls mutex()->try_lock_for(timeout_duration).

## Declarations
```cpp
template< class Rep, class Period >
bool try_lock_for( const std::chrono::duration<Rep, Period>& timeout_duration );
```
_(since C++11)_

## Parameters
- `timeout_duration`: maximum duration to block for

## Return value
true if the ownership of the mutex has been acquired successfully, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/unique_lock/lock/)
- [try_lock](/cpp/thread/unique_lock/try_lock/)
- [try_lock_for](/cpp/thread/shared_lock/try_lock_for/)
- [try_lock_until](/cpp/thread/unique_lock/try_lock_until/)
- [TimedLockable](/cpp/named_req/timedlockable/)
- [unlock](/cpp/thread/unique_lock/unlock/)
