---
title: "std::shared_mutex::try_lock"
source_path: "cpp/thread/shared_mutex/try_lock"
category: "thread"
since: "C++17"
---

Tries to lock the mutex. Returns immediately. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
bool try_lock();
```
_(since C++17)_

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_mutex/lock/)
- [unlock](/cpp/thread/shared_mutex/unlock/)
- [C documentation](/c/thread/mtx_trylock/)
