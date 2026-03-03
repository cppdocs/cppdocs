---
title: "std::shared_timed_mutex::lock_shared"
source_path: "cpp/thread/shared_timed_mutex/lock_shared"
category: "thread"
since: "C++14"
---

Acquires shared ownership of the mutex. If another thread is holding the mutex in exclusive ownership, a call to lock_shared will block execution until shared ownership can be acquired.

## Declarations
```cpp
void lock_shared();
```
_(since C++14)_

## Return value
(none)

## Notes
lock_shared() is usually not called directly: [std::shared_lock](/cpp/thread/shared_lock/) is used to manage shared locking.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_timed_mutex/lock/)
- [try_lock_shared](/cpp/thread/shared_timed_mutex/try_lock_shared/)
- [unlock_shared](/cpp/thread/shared_timed_mutex/unlock_shared/)
