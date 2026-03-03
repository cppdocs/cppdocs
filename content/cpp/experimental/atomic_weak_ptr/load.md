---
title: "std::experimental::atomic_weak_ptr<T>::load"
source_path: "cpp/experimental/atomic_weak_ptr/load"
category: "experimental"
---

Atomically loads and returns the current value of the atomic_weak_ptr. Memory is affected according to the value of order.

## Declarations
```cpp
weak_ptr<T> load( std::memory_order order = std::memory_order_seq_cst ) const noexcept;
```

## Parameters
- `order`: memory order constraints to enforce

## Return value
The current value of the atomic_weak_ptr.

## See also
- [operator weak_ptr<T>](/cpp/experimental/atomic_weak_ptr/operator_weak_ptr/)
- [std::atomic_is_lock_free(std::shared_ptr)std::atomic_load(std::shared_ptr)std::atomic_load_explicit(std::shared_ptr)std::atomic_store(std::shared_ptr)std::atomic_store_explicit(std::shared_ptr)std::atomic_exchange(std::shared_ptr)std::atomic_exchange_explicit(std::shared_ptr)std::atomic_compare_exchange_weak(std::shared_ptr)std::atomic_compare_exchange_strong(std::shared_ptr)std::atomic_compare_exchange_weak_explicit(std::shared_ptr)std::atomic_compare_exchange_strong_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
