---
title: "std::atomic_load, std::atomic_load_explicit"
source_path: "cpp/atomic/atomic_load"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

1,2) Atomically obtains the value pointed to by obj as if by obj->load().

## Declarations
```cpp
template< class T >
T atomic_load( const std::atomic<T>* obj ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_load( const volatile std::atomic<T>* obj ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_load_explicit( const std::atomic<T>* obj,
std::memory_order order ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_load_explicit( const volatile std::atomic<T>* obj,
std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `order`: the memory synchronization ordering for this operation

## Return value
The value that is held by the atomic object pointed to by obj.

## See also
- [load](/cpp/atomic/atomic/load/)
- [atomic_storeatomic_store_explicit](/cpp/atomic/atomic_store/)
- [memory_order](/cpp/atomic/memory_order/)
- [std::atomic_load(std::shared_ptr)
std::atomic_load_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [C documentation](/c/atomic/atomic_load/)
