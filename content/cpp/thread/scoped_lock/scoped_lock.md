---
title: "std::scoped_lock<MutexTypes...>::scoped_lock"
source_path: "cpp/thread/scoped_lock/scoped_lock"
category: "thread"
since: "C++17"
---

Acquires ownership of the given mutexes m.

## Declarations
```cpp
explicit scoped_lock( MutexTypes&... m );
```
_(since C++17)_

```cpp
scoped_lock( std::adopt_lock_t, MutexTypes&... m );
```
_(since C++17)_

```cpp
scoped_lock( const scoped_lock& ) = delete;
```
_(since C++17)_

## Parameters
- `m`: mutexes to acquire ownership of

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0739R0 | C++17 | adopt_lock_t parameter was last, impeding class template argument deduction | moved to first |
