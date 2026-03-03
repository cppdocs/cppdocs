---
title: "std::experimental::atomic_shared_ptr<T>::operator shared_ptr<T>"
source_path: "cpp/experimental/atomic_shared_ptr/operator"
category: "experimental"
---

Atomically loads and returns the current value of the atomic_shared_ptr. Equivalent to load().

## Declarations
```cpp
operator shared_ptr<T>() const noexcept;
```

## Return value
The current value of the atomic_shared_ptr.

## See also
- [load](/cpp/experimental/atomic_shared_ptr/load/)
