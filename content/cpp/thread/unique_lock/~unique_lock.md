---
title: "std::unique_lock<Mutex>::~unique_lock"
source_path: "cpp/thread/unique_lock/~unique_lock"
category: "thread"
since: "C++11"
---

Destroys the lock. If *this has an associated mutex and has acquired ownership of it, the mutex is unlocked.

## Declarations
```cpp
~unique_lock();
```
_(since C++11)_
