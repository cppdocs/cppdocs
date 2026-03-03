---
title: "std::atomic_ref<T>::wait"
source_path: "cpp/atomic/atomic_ref/wait"
category: "atomic"
---

Performs atomic waiting operations. Behaves as if it repeatedly performs the following steps:

## Declarations
```cpp
void wait( value_type old, std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `old`: the value to check the atomic_ref's object no longer contains
- `order`: memory order constraints to enforce

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

Due to the [ABA problem](https://en.wikipedia.org/wiki/ABA_problem), transient changes from old to another value and back to old might be missed, and not unblock.

The comparison is bitwise (similar to [std::memcmp](/cpp/string/byte/memcmp/)); no comparison operator is used. Padding bits that never participate in an object's value representation are ignored.

## Example
This section is incompleteReason: no example

## See also
- [notify_one](/cpp/atomic/atomic_ref/notify_one/)
- [notify_all](/cpp/atomic/atomic_ref/notify_all/)
- [atomic_notify_one](/cpp/atomic/atomic_notify_one/)
- [atomic_notify_all](/cpp/atomic/atomic_notify_all/)
