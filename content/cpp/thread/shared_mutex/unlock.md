---
title: "std::shared_mutex::unlock"
source_path: "cpp/thread/shared_mutex/unlock"
category: "thread"
since: "C++17"
---

Unlocks the mutex.

## Declarations
```cpp
void unlock();
```
_(since C++17)_

## Return value
(none)

## Notes
unlock() is usually not called directly: [std::unique_lock](/cpp/thread/unique_lock/) and [std::lock_guard](/cpp/thread/lock_guard/) are used to manage exclusive locking.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_mutex/lock/)
- [try_lock](/cpp/thread/shared_mutex/try_lock/)
- [C documentation](/c/thread/mtx_unlock/)
