---
title: "std::atomic_notify_one"
source_path: "cpp/atomic/atomic_notify_one"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

Performs atomic notifying operations.

## Declarations
```cpp
template< class T >
void atomic_notify_one( std::atomic<T>* object );
```
_(since C++20)_

```cpp
template< class T >
void atomic_notify_one( volatile std::atomic<T>* object );
```
_(since C++20)_

## Parameters
- `object`: pointer to the atomic object to notify

## Return value
(none)

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

## Example
This section is incompleteReason: no example

## See also
- [notify_one](/cpp/atomic/atomic/notify_one/)
- [notify_all](/cpp/atomic/atomic/notify_all/)
- [atomic_notify_all](/cpp/atomic/atomic_notify_all/)
- [atomic_waitatomic_wait_explicit](/cpp/atomic/atomic_wait/)
