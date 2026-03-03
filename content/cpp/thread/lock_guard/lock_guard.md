---
title: "std::lock_guard<Mutex>::lock_guard"
source_path: "cpp/thread/lock_guard/lock_guard"
category: "thread"
since: "C++11"
---

Acquires ownership of the given mutex m.

## Declarations
```cpp
explicit lock_guard( mutex_type& m );
```
_(since C++11)_

```cpp
lock_guard( mutex_type& m, std::adopt_lock_t t );
```
_(since C++11)_

```cpp
lock_guard( const lock_guard& ) = delete;
```
_(since C++11)_

## Parameters
- `m`: mutex to acquire ownership of
- `t`: tag parameter used to select non-locking version of the constructor
