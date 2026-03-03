---
title: "std::atomic_store, std::atomic_store_explicit"
source_path: "cpp/atomic/atomic_store"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

1,2) Atomically replaces the value pointed to by obj with the value of desired as if by obj->store(desired).

## Declarations
```cpp
template< class T >
void atomic_store( std::atomic<T>* obj,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
void atomic_store( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
void atomic_store_explicit( std::atomic<T>* obj,
typename std::atomic<T>::value_type desired,
std::memory_order order) noexcept;
```
_(since C++11)_

```cpp
template< class T >
void atomic_store_explicit( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type desired,
std::memory_order order) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `desired`: the value to store in the atomic object
- `order`: the memory synchronization ordering

## Return value
(none)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [store](/cpp/atomic/atomic/store/)
- [atomic_loadatomic_load_explicit](/cpp/atomic/atomic_load/)
- [memory_order](/cpp/atomic/memory_order/)
- [std::atomic_store(std::shared_ptr)
std::atomic_store_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [C documentation](/c/atomic/atomic_store/)
