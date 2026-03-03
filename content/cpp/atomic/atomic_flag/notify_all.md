---
title: "std::atomic_flag::notify_all"
source_path: "cpp/atomic/atomic_flag/notify_all"
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
- [wait](/cpp/atomic/atomic_flag/wait/)
- [atomic_flag_waitatomic_flag_wait_explicit](/cpp/atomic/atomic_flag_wait/)
- [atomic_flag_notify_one](/cpp/atomic/atomic_flag_notify_one/)
