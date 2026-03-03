---
title: "std::atomic_flag::operator="
source_path: "cpp/atomic/atomic_flag/operator"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

[std::atomic_flag](/cpp/atomic/atomic_flag/) is not assignable, its assignment operators are deleted.

## Declarations
```cpp
atomic_flag& operator=( const atomic_flag& ) = delete;
```
_(since C++11)_

```cpp
atomic_flag& operator=( const atomic_flag& ) volatile = delete;
```
_(since C++11)_
