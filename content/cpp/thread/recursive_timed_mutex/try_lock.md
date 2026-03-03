---
title: "std::recursive_timed_mutex::try_lock"
source_path: "cpp/thread/recursive_timed_mutex/try_lock"
category: "thread"
since: "C++11"
---

Tries to lock the mutex. Returns immediately. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
bool try_lock() noexcept;
```
_(since C++11)_

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/recursive_timed_mutex/lock/)
- [try_lock_for](/cpp/thread/recursive_timed_mutex/try_lock_for/)
- [try_lock_until](/cpp/thread/recursive_timed_mutex/try_lock_until/)
- [unlock](/cpp/thread/recursive_timed_mutex/unlock/)
- [C documentation](/c/thread/mtx_trylock/)
