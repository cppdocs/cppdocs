---
title: "std::atomic_flag_wait, std::atomic_flag_wait_explicit"
source_path: "cpp/atomic/atomic_flag_wait"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

Performs atomic waiting operations.

## Declarations
```cpp
void atomic_flag_wait( const atomic_flag* object, bool old ) noexcept;
```
_(since C++20)_

```cpp
void atomic_flag_wait( const volatile atomic_flag* object,
bool old ) noexcept;
```
_(since C++20)_

```cpp
void atomic_flag_wait_explicit( const atomic_flag* object,
bool old, std::memory_order order ) noexcept;
```
_(since C++20)_

```cpp
void atomic_flag_wait_explicit( const volatile atomic_flag* object,
bool old, std::memory_order order ) noexcept;
```
_(since C++20)_

## Parameters
- `object`: pointer to the atomic flag to check and wait on
- `old`: the value to check the atomic flag no longer contains
- `order`: the memory synchronization ordering

## Return value
(none)

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
