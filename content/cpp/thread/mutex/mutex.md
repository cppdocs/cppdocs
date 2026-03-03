---
title: "std::mutex::mutex"
source_path: "cpp/thread/mutex/mutex"
category: "thread"
since: "C++11"
---

1) Constructs the mutex. The mutex is in unlocked state after the constructor completes.

## Declarations
```cpp
constexpr mutex() noexcept;
```
_(since C++11)_

```cpp
mutex( const mutex& ) = delete;
```
_(since C++11)_

## Notes
Because the default constructor is constexpr, static mutexes are initialized as part of [static non-local initialization](/cpp/language/initialization/#Non-local_variables), before any dynamic non-local initialization begins. This makes it safe to lock a mutex in a constructor of any static object.

## See also
- [C documentation](/c/thread/mtx_init/)
