---
title: "std::atomic_flag_notify_all"
source_path: "cpp/atomic/atomic_flag_notify_all"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

Performs atomic notifying operations.

## Declarations
```cpp
void atomic_flag_notify_all( std::atomic_flag* object ) noexcept;
```
_(since C++20)_

```cpp
void atomic_flag_notify_all( volatile std::atomic_flag* object ) noexcept;
```
_(since C++20)_

## Parameters
- `object`: pointer to the atomic_flag object to notify

## Return value
(none)

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

## Example
This section is incompleteReason: no example

## See also
- [notify_one](/cpp/atomic/atomic_flag/notify_one/)
- [notify_all](/cpp/atomic/atomic_flag/notify_all/)
- [atomic_flag_waitatomic_flag_wait_explicit](/cpp/atomic/atomic_flag_wait/)
- [atomic_flag_notify_one](/cpp/atomic/atomic_flag_notify_one/)
