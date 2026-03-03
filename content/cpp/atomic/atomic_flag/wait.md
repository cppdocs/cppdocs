---
title: "std::atomic_flag::wait"
source_path: "cpp/atomic/atomic_flag/wait"
category: "atomic"
since: "C++20"
---

Performs atomic waiting operations. Behaves as if it repeatedly performs the following steps:

## Declarations
```cpp
void wait( bool old, std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(since C++20) (constexpr since C++26)_

```cpp
void wait( bool old,
std::memory_order order =
std::memory_order_seq_cst ) const volatile noexcept;
```
_(since C++20)_

## Parameters
- `old`: the value to check the atomic_flag's object no longer contains
- `order`: memory order constraints to enforce

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

Due to the [ABA problem](https://en.wikipedia.org/wiki/ABA_problem), transient changes from old to another value and back to old might be missed, and not unblock.

## Example
This section is incompleteReason: no example

## See also
- [notify_one](/cpp/atomic/atomic_flag/notify_one/)
- [notify_all](/cpp/atomic/atomic_flag/notify_all/)
- [atomic_flag_notify_one](/cpp/atomic/atomic_flag_notify_one/)
- [atomic_flag_notify_all](/cpp/atomic/atomic_flag_notify_all/)
