---
title: "std::atomic_ref<T>::notify_one"
source_path: "cpp/atomic/atomic_ref/notify_one"
category: "atomic"
---

Performs atomic notifying operations.

## Declarations
```cpp
void notify_one() const noexcept;
```
_(constexpr since C++26)_

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | notify_one was meaningless for const T | constrained to accept only non-const T |

## See also
- [wait](/cpp/atomic/atomic_ref/wait/)
- [atomic_waitatomic_wait_explicit](/cpp/atomic/atomic_wait/)
- [atomic_notify_one](/cpp/atomic/atomic_notify_one/)
