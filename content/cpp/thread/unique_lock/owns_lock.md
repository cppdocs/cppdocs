---
title: "std::unique_lock<Mutex>::owns_lock"
source_path: "cpp/thread/unique_lock/owns_lock"
category: "thread"
since: "C++11"
---

Checks whether *this owns a locked mutex or not.

## Declarations
```cpp
bool owns_lock() const noexcept;
```
_(since C++11)_

## Return value
true if *this has an associated mutex and has acquired ownership of it, false otherwise.

## See also
- [operator bool](/cpp/thread/unique_lock/operator_bool/)
