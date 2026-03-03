---
title: "std::shared_timed_mutex::try_lock_shared_for"
source_path: "cpp/thread/shared_timed_mutex/try_lock_shared_for"
category: "thread"
since: "C++14"
---

Tries to lock the mutex in shared mode. Blocks until specified timeout_duration has elapsed or the shared lock is acquired, whichever comes first. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
template< class Rep, class Period >
bool try_lock_shared_for( const std::chrono::duration<Rep,Period>& timeout_duration );
```
_(since C++14)_

## Parameters
- `timeout_duration`: maximum duration to block for

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
This section is incompleteReason: no example

## See also
- [try_lock_shared](/cpp/thread/shared_timed_mutex/try_lock_shared/)
- [try_lock_shared_until](/cpp/thread/shared_timed_mutex/try_lock_shared_until/)
- [try_lock_for](/cpp/thread/shared_timed_mutex/try_lock_for/)
