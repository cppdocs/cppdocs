---
title: "std::experimental::atomic_weak_ptr<T>::operator="
source_path: "cpp/experimental/atomic_weak_ptr/operator"
category: "experimental"
---

1) Atomically assigns a value desired to the atomic variable. Equivalent to store(desired).

## Declarations
```cpp
void operator=( weak_ptr<T> desired ) noexcept;
```

```cpp
void operator=( const atomic_weak_ptr& ) = delete;
```

## Parameters
- `desired`: value to assign

## Notes
Unlike most assignment operators, the assignment operators for atomic_weak_ptr returns void.

## See also
- [(constructor)](/cpp/experimental/atomic_weak_ptr/atomic_weak_ptr/)
- [store](/cpp/experimental/atomic_weak_ptr/store/)
- [std::atomic_is_lock_free(std::shared_ptr)std::atomic_load(std::shared_ptr)std::atomic_load_explicit(std::shared_ptr)std::atomic_store(std::shared_ptr)std::atomic_store_explicit(std::shared_ptr)std::atomic_exchange(std::shared_ptr)std::atomic_exchange_explicit(std::shared_ptr)std::atomic_compare_exchange_weak(std::shared_ptr)std::atomic_compare_exchange_strong(std::shared_ptr)std::atomic_compare_exchange_weak_explicit(std::shared_ptr)std::atomic_compare_exchange_strong_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
