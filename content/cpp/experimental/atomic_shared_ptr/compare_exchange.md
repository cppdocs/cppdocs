---
title: "std::experimental::atomic_shared_ptr<T>::compare_exchange_strong, std::experimental::atomic_shared_ptr<T>::compare_exchange_weak"
source_path: "cpp/experimental/atomic_shared_ptr/compare_exchange"
category: "experimental"
---

Atomically compares the underlying shared_ptr in *this with expected, and if they are equivalent, replaces the former with desired (performs read-modify-write operation). Otherwise, loads the actual value stored in *this into expected (performs load operation). The replacement is performed as if by the copy or move assignment operator of shared_ptr, as appropriate.

## Declarations
```cpp
bool compare_exchange_weak( std::shared_ptr<T>& expected, const std::shared_ptr<T>& desired,
std::memory_order success, std::memory_order failure ) noexcept;
```

```cpp
bool compare_exchange_weak( std::shared_ptr<T>& expected, std::shared_ptr<T>&& desired,
std::memory_order success, std::memory_order failure ) noexcept;
```

```cpp
bool compare_exchange_weak( std::shared_ptr<T>& expected, const std::shared_ptr<T>& desired,
std::memory_order order = std::memory_order_seq_cst ) noexcept;
```

```cpp
bool compare_exchange_weak( std::shared_ptr<T>& expected, std::shared_ptr<T>&& desired,
std::memory_order order = std::memory_order_seq_cst ) noexcept;
```

```cpp
bool compare_exchange_strong( std::shared_ptr<T>& expected, const std::shared_ptr<T>& desired,
std::memory_order success, std::memory_order failure ) noexcept;
```

```cpp
bool compare_exchange_strong( std::shared_ptr<T>& expected, std::shared_ptr<T>&& desired,
std::memory_order success, std::memory_order failure ) noexcept;
```

```cpp
bool compare_exchange_strong( std::shared_ptr<T>& expected, const std::shared_ptr<T>& desired,
std::memory_order order = std::memory_order_seq_cst ) noexcept;
```

```cpp
bool compare_exchange_strong( std::shared_ptr<T>& expected, std::shared_ptr<T>&& desired,
std::memory_order order = std::memory_order_seq_cst ) noexcept;
```

## Parameters
- `expected`: reference to the value expected to be found in the atomic object
- `desired`: the value to store in the atomic object if it is as expected
- `success`: the memory synchronization ordering for the read-modify-write operation if the comparison succeeds. All values are permitted
- `failure`: the memory synchronization ordering for the load operation if the comparison fails. Cannot be std::memory_order_release or std::memory_order_acq_rel and cannot specify stronger ordering than success
- `order`: the memory synchronization ordering for both operations

## Return value
true if the underlying atomic value was changed, false otherwise.

## Notes
The weak forms (1-4) of the functions are allowed to fail spuriously, that is, act as if *this and expected are not equivalent even when they are. When a compare-and-exchange is in a loop, the weak version will yield better performance on some platforms.

## See also
- [std::atomic_is_lock_free(std::shared_ptr)std::atomic_load(std::shared_ptr)std::atomic_load_explicit(std::shared_ptr)std::atomic_store(std::shared_ptr)std::atomic_store_explicit(std::shared_ptr)std::atomic_exchange(std::shared_ptr)std::atomic_exchange_explicit(std::shared_ptr)std::atomic_compare_exchange_weak(std::shared_ptr)std::atomic_compare_exchange_strong(std::shared_ptr)std::atomic_compare_exchange_weak_explicit(std::shared_ptr)std::atomic_compare_exchange_strong_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
