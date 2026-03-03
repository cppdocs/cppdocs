---
title: "std::shared_lock<Mutex>::owns_lock"
source_path: "cpp/thread/shared_lock/owns_lock"
category: "thread"
since: "C++14"
---

Checks whether *this owns a locked mutex or not.

## Declarations
```cpp
bool owns_lock() const noexcept;
```
_(since C++14)_

## Return value
true if *this has an associated mutex and has acquired shared ownership of it, false otherwise.

## See also
- [operator bool](/cpp/thread/shared_lock/operator_bool/)
