---
title: "std::experimental::atomic_weak_ptr<T>::is_lock_free"
source_path: "cpp/experimental/atomic_weak_ptr/is_lock_free"
category: "experimental"
---

Checks whether the atomic operations on all objects of this type are lock-free.

## Declarations
```cpp
bool is_lock_free() const noexcept;
```

## Return value
true if the atomic operations on the objects of this type are lock-free, false otherwise.

## See also
- [std::atomic_is_lock_free(std::shared_ptr)std::atomic_load(std::shared_ptr)std::atomic_load_explicit(std::shared_ptr)std::atomic_store(std::shared_ptr)std::atomic_store_explicit(std::shared_ptr)std::atomic_exchange(std::shared_ptr)std::atomic_exchange_explicit(std::shared_ptr)std::atomic_compare_exchange_weak(std::shared_ptr)std::atomic_compare_exchange_strong(std::shared_ptr)std::atomic_compare_exchange_weak_explicit(std::shared_ptr)std::atomic_compare_exchange_strong_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
