---
title: "std::shared_lock<Mutex>::mutex"
source_path: "cpp/thread/shared_lock/mutex"
category: "thread"
since: "C++14"
---

Returns a pointer to the associated mutex, or a null pointer if there is no associated mutex.

## Declarations
```cpp
mutex_type* mutex() const noexcept;
```
_(since C++14)_

## Return value
Pointer to the associated mutex or a null pointer if there is no associated mutex.

## Example
This section is incompleteReason: no example
