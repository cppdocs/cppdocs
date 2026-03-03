---
title: "std::shared_lock<Mutex>::try_lock"
source_path: "cpp/thread/shared_lock/try_lock"
category: "thread"
since: "C++14"
---

Tries to lock the associated mutex in shared mode without blocking. Effectively calls mutex()->try_lock_shared().

## Declarations
```cpp
bool try_lock();
```
_(since C++14)_

## Return value
true if the ownership of the mutex has been acquired successfully, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_lock/lock/)
- [try_lock](/cpp/thread/unique_lock/try_lock/)
- [try_lock_for](/cpp/thread/shared_lock/try_lock_for/)
- [try_lock_until](/cpp/thread/shared_lock/try_lock_until/)
- [unlock](/cpp/thread/shared_lock/unlock/)
