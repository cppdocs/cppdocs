---
title: "std::unique_lock<Mutex>::release"
source_path: "cpp/thread/unique_lock/release"
category: "thread"
since: "C++11"
---

Breaks the association of the associated mutex, if any, and *this.

## Declarations
```cpp
mutex_type* release() noexcept;
```
_(since C++11)_

## Return value
Pointer to the associated mutex or a null pointer if there was no associated mutex.

## Example
This section is incompleteReason: no example

## See also
- [unlock](/cpp/thread/unique_lock/unlock/)
