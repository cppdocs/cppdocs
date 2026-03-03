---
title: "std::allocator<T>::allocate"
source_path: "cpp/memory/allocator/allocate"
category: "memory"
since: "C++20"
---

Allocates n * sizeof(T) bytes of uninitialized storage by calling ::[operator new](/cpp/memory/new/operator_new/)([std::size_t](/cpp/types/size_t/)) or ::[operator new](/cpp/memory/new/operator_new/)([std::size_t](/cpp/types/size_t/), [std::align_val_t](/cpp/memory/new/align_val_t/))(since C++17), but it is unspecified when and how this function is called. The pointer hint may be used to provide locality of reference: the allocator, if supported by the implementation, will attempt to allocate the new memory block as close as possible to hint.

## Declarations
```cpp
pointer allocate( size_type n, const void* hint = 0 );
```
_(until C++17)_

```cpp
T* allocate( std::size_t n, const void* hint );
```
_(since C++17) (deprecated) (removed in C++20)_

```cpp
T* allocate( std::size_t n );
```
_(since C++17) (until C++20)_

```cpp
constexpr T* allocate( std::size_t n );
```
_(since C++20)_

## Parameters
- `n`: the number of objects to allocate storage for
- `hint`: pointer to a nearby memory location

## Return value
Pointer to the first element of an array of n objects of type T whose elements have not been constructed yet.

## Notes
The "unspecified when and how" wording makes it possible to [combine or optimize away heap allocations](/cpp/language/new/#Allocation) made by the standard library containers, even though such optimizations are disallowed for direct calls to ::operator new. For example, this is implemented by libc++ ([[1]](https://github.com/llvm-mirror/libcxx/blob/master@%7B2017-02-09%7D/include/memory#L1766-L1772) and [[2]](https://github.com/llvm-mirror/libcxx/blob/master@%7B2017-02-09%7D/include/new#L211-L217)).

After calling allocate() and before construction of elements, pointer arithmetic of T* is well-defined within the allocated array, but the behavior is undefined if elements are accessed.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 578 | C++98 | hint was required to be either 0 or apointer previously returned from allocate()and not yet passed to deallocate() | not required |
| LWG 3190 | C++11 | allocate() might allocate storage of wrong size | throws std::bad_array_new_length instead |

## See also
- [allocate](/cpp/memory/allocator_traits/allocate/)
