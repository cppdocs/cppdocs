---
title: "std::shared_mutex::unlock_shared"
source_path: "cpp/thread/shared_mutex/unlock_shared"
category: "thread"
since: "C++17"
---

Releases the mutex from shared ownership by the calling thread.

## Declarations
```cpp
void unlock_shared();
```
_(since C++17)_

## Return value
(none)

## Notes
unlock_shared() is usually not called directly: [std::shared_lock](/cpp/thread/shared_lock/) is used to manage shared locking.

## Example
This section is incompleteReason: no example

## See also
- [lock_shared](/cpp/thread/shared_mutex/lock_shared/)
- [unlock](/cpp/thread/shared_mutex/unlock/)
