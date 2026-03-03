---
title: "std::atomic_ref<T>::is_always_lock_free"
source_path: "cpp/atomic/atomic_ref/is_always_lock_free"
category: "atomic"
since: "C++20"
---

Equals true if the operations on this atomic_ref type is always lock-free and false if it is never or sometimes lock-free.

## Declarations
```cpp
static constexpr bool is_always_lock_free = /*implementation-defined*/;
```
_(since C++20)_

## See also
- [is_lock_free](/cpp/atomic/atomic_ref/is_lock_free/)
