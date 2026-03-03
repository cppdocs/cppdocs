---
title: "std::shared_mutex::try_lock_shared"
source_path: "cpp/thread/shared_mutex/try_lock_shared"
category: "thread"
since: "C++17"
---

Tries to lock the mutex in shared mode. Returns immediately. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
bool try_lock_shared();
```
_(since C++17)_

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_mutex/lock/)
- [try_lock](/cpp/thread/shared_mutex/try_lock/)
- [unlock_shared](/cpp/thread/shared_mutex/unlock_shared/)
