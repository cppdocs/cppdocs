---
title: "std::shared_lock<Mutex>::operator bool"
source_path: "cpp/thread/shared_lock/operator_bool"
category: "thread"
since: "C++14"
---

Checks whether *this owns a locked mutex or not. Effectively calls [owns_lock()](/cpp/thread/shared_lock/owns_lock/).

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++14)_

## Return value
true if *this has an associated mutex and has acquired shared ownership of it, false otherwise.

## See also
- [owns_lock](/cpp/thread/shared_lock/owns_lock/)
