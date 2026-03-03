---
title: "std::experimental::atomic_weak_ptr<T>::operator weak_ptr<T>"
source_path: "cpp/experimental/atomic_weak_ptr/operator"
category: "experimental"
---

Atomically loads and returns the current value of the atomic_weak_ptr. Equivalent to load().

## Declarations
```cpp
operator weak_ptr<T>() const noexcept;
```

## Return value
The current value of the atomic_weak_ptr.

## See also
- [load](/cpp/experimental/atomic_weak_ptr/load/)
