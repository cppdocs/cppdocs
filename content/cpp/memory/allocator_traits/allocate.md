---
title: "std::allocator_traits<Alloc>::allocate"
source_path: "cpp/memory/allocator_traits/allocate"
header: "<memory>"
category: "memory"
---

Uses the allocator a to allocate n * sizeof(Alloc::value_type) bytes of uninitialized storage. An array of type Alloc::value_type[n] is created in the storage, but none of its elements are constructed.

## Declarations
```cpp
static pointer allocate( Alloc& a, size_type n );
```
_(since C++11) (constexpr since C++20)_

```cpp
static pointer allocate( Alloc& a, size_type n, const_void_pointer hint );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `a`: allocator to use
- `n`: the number of objects to allocate storage for
- `hint`: pointer to a nearby memory location

## Return value
The pointer returned by the call to a.allocate(n).

## Notes
Alloc::allocate was not required to create array object until [P0593R6](https://wg21.link/P0593R6), which made using non-default allocator for [std::vector](/cpp/container/vector/) and some other containers not well-defined according to a strict reading of the core language specification.

After calling allocate and before construction of elements, pointer arithmetic of Alloc::value_type* is well-defined within the allocated array, but the behavior is undefined if elements are accessed.

## Example
This section is incompleteReason: no example

## See also
- [allocate](/cpp/memory/allocator/allocate/)
