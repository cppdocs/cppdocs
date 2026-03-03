---
title: "std::shared_lock<Mutex>::try_lock_for"
source_path: "cpp/thread/shared_lock/try_lock_for"
category: "thread"
since: "C++14"
---

Tries to lock the associated mutex in shared mode. Blocks until specified timeout_duration has elapsed or the lock is acquired, whichever comes first. On successful lock acquisition returns true, otherwise returns false. Effectively calls mutex()->try_lock_shared_for(timeout_duration).

## Declarations
```cpp
template< class Rep, class Period >
bool try_lock_for( const std::chrono::duration<Rep,Period>& timeout_duration );
```
_(since C++14)_

## Parameters
- `timeout_duration`: maximum duration to block for

## Return value
true if the ownership of the mutex has been acquired successfully, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [try_lock_for](/cpp/thread/unique_lock/try_lock_for/)
- [TimedLockable](/cpp/named_req/timedlockable/)
- [lock](/cpp/thread/shared_lock/lock/)
- [try_lock](/cpp/thread/shared_lock/try_lock/)
- [try_lock_until](/cpp/thread/shared_lock/try_lock_until/)
- [unlock](/cpp/thread/shared_lock/unlock/)
