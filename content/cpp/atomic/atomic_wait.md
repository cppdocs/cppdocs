---
title: "std::atomic_wait, std::atomic_wait_explicit"
source_path: "cpp/atomic/atomic_wait"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

Performs atomic waiting operations. Behaves as if it repeatedly performs the following steps:

## Declarations
```cpp
template< class T >
void atomic_wait( const std::atomic<T>* object,
typename std::atomic<T>::value_type old );
```
_(since C++20)_

```cpp
template< class T >
void atomic_wait( const volatile std::atomic<T>* object,
typename std::atomic<T>::value_type old );
```
_(since C++20)_

```cpp
template< class T >
void atomic_wait_explicit( const std::atomic<T>* object,
typename std::atomic<T>::value_type old,
std::memory_order order );
```
_(since C++20)_

```cpp
template< class T >
void atomic_wait_explicit( const volatile std::atomic<T>* object,
typename std::atomic<T>::value_type old,
std::memory_order order );
```
_(since C++20)_

## Parameters
- `object`: pointer to the atomic object to check and wait on
- `old`: the value to check the atomic object no longer contains
- `order`: the memory synchronization ordering

## Return value
(none)

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

Due to the [ABA problem](https://en.wikipedia.org/wiki/ABA_problem), transient changes from old to another value and back to old might be missed, and not unblock.

The comparison is bitwise (similar to [std::memcmp](/cpp/string/byte/memcmp/)); no comparison operator is used. Padding bits that never participate in an object's value representation are ignored.

## Example
This section is incompleteReason: no example

## See also
- [wait](/cpp/atomic/atomic/wait/)
- [notify_one](/cpp/atomic/atomic/notify_one/)
- [notify_all](/cpp/atomic/atomic/notify_all/)
- [atomic_notify_one](/cpp/atomic/atomic_notify_one/)
- [atomic_notify_all](/cpp/atomic/atomic_notify_all/)
