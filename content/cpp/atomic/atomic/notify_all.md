---
title: "std::atomic<T>::notify_all"
source_path: "cpp/atomic/atomic/notify_all"
category: "atomic"
since: "C++20"
---

Performs atomic notifying operations.

## Declarations
```cpp
void notify_all() noexcept;
```
_(since C++20) (constexpr since C++26)_

```cpp
void notify_all() volatile noexcept;
```
_(since C++20)_

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

## Example
This section is incompleteReason: no example

## See also
- [wait](/cpp/atomic/atomic/wait/)
- [atomic_waitatomic_wait_explicit](/cpp/atomic/atomic_wait/)
- [atomic_notify_one](/cpp/atomic/atomic_notify_one/)
