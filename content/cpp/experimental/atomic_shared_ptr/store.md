---
title: "std::experimental::atomic_shared_ptr<T>::store"
source_path: "cpp/experimental/atomic_shared_ptr/store"
category: "experimental"
---

Atomically replaces the current value with desired. Memory is affected according to the value of order.

## Declarations
```cpp
void store( shared_ptr<T> desired, std::memory_order order = std::memory_order_seq_cst ) noexcept;
```

## Parameters
- `desired`: the shared_ptr to store into the atomic variable
- `order`: memory order constraints to enforce

## Return value
(none)

## See also
- [operator=](/cpp/experimental/atomic_shared_ptr/operator/)
- [std::atomic_is_lock_free(std::shared_ptr)std::atomic_load(std::shared_ptr)std::atomic_load_explicit(std::shared_ptr)std::atomic_store(std::shared_ptr)std::atomic_store_explicit(std::shared_ptr)std::atomic_exchange(std::shared_ptr)std::atomic_exchange_explicit(std::shared_ptr)std::atomic_compare_exchange_weak(std::shared_ptr)std::atomic_compare_exchange_strong(std::shared_ptr)std::atomic_compare_exchange_weak_explicit(std::shared_ptr)std::atomic_compare_exchange_strong_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
