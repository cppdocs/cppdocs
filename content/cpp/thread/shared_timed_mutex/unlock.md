---
title: "std::shared_timed_mutex::unlock"
source_path: "cpp/thread/shared_timed_mutex/unlock"
category: "thread"
since: "C++14"
---

Unlocks the mutex.

## Declarations
```cpp
void unlock();
```
_(since C++14)_

## Return value
(none)

## Notes
unlock() is usually not called directly: [std::unique_lock](/cpp/thread/unique_lock/) and [std::lock_guard](/cpp/thread/lock_guard/) are used to manage exclusive locking.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_timed_mutex/lock/)
- [try_lock](/cpp/thread/shared_timed_mutex/try_lock/)
- [try_lock_for](/cpp/thread/shared_timed_mutex/try_lock_for/)
- [try_lock_until](/cpp/thread/shared_timed_mutex/try_lock_until/)
- [C documentation](/c/thread/mtx_unlock/)
