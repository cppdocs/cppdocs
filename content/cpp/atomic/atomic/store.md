---
title: "std::atomic<T>::store"
source_path: "cpp/atomic/atomic/store"
category: "atomic"
since: "C++11"
---

Atomically replaces the current value with desired. Memory is affected according to the value of order.

## Declarations
```cpp
void store( T desired, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
void store( T desired, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `desired`: the value to store into the atomic variable
- `order`: memory order constraints to enforce

## Return value
(none)

## See also
- [operator=](/cpp/atomic/atomic/operator/)
- [atomic_storeatomic_store_explicit](/cpp/atomic/atomic_store/)
