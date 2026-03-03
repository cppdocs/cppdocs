---
title: "std::experimental::atomic_weak_ptr<T>::exchange"
source_path: "cpp/experimental/atomic_weak_ptr/exchange"
category: "experimental"
---

Atomically replaces the underlying weak_ptr with desired. The operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
weak_ptr<T> exchange( weak_ptr<T> desired, std::memory_order order = std::memory_order_seq_cst ) noexcept;
```

## Parameters
- `desired`: value to assign
- `order`: memory order constraints to enforce

## Return value
The value of the atomic variable before the call.

## See also
- [std::atomic_is_lock_free(std::shared_ptr)std::atomic_load(std::shared_ptr)std::atomic_load_explicit(std::shared_ptr)std::atomic_store(std::shared_ptr)std::atomic_store_explicit(std::shared_ptr)std::atomic_exchange(std::shared_ptr)std::atomic_exchange_explicit(std::shared_ptr)std::atomic_compare_exchange_weak(std::shared_ptr)std::atomic_compare_exchange_strong(std::shared_ptr)std::atomic_compare_exchange_weak_explicit(std::shared_ptr)std::atomic_compare_exchange_strong_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
