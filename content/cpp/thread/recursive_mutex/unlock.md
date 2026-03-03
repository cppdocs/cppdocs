---
title: "std::recursive_mutex::unlock"
source_path: "cpp/thread/recursive_mutex/unlock"
category: "thread"
since: "C++11"
---

Unlocks the mutex if its level of ownership is 1 (there was exactly one more call to [lock()](/cpp/thread/recursive_mutex/lock/) than there were calls to unlock() made by this thread), reduces the level of ownership by 1 otherwise.

## Declarations
```cpp
void unlock();
```
_(since C++11)_

## Return value
(none)

## Notes
unlock() is usually not called directly: [std::unique_lock](/cpp/thread/unique_lock/) and [std::lock_guard](/cpp/thread/lock_guard/) are used to manage exclusive locking.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/recursive_mutex/lock/)
- [try_lock](/cpp/thread/recursive_mutex/try_lock/)
- [C documentation](/c/thread/mtx_unlock/)
