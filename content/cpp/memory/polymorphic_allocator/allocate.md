---
title: "std::pmr::polymorphic_allocator<T>::allocate"
source_path: "cpp/memory/polymorphic_allocator/allocate"
category: "memory"
since: "C++17"
---

Allocates storage for n objects of type T using the underlying memory resource. Equivalent to return static_cast<T*>(resource()->allocate(n * sizeof(T), alignof(T)));.

## Declarations
```cpp
T* allocate( std::size_t n );
```
_(since C++17)_

## Parameters
- `n`: the number of objects to allocate storage for

## Return value
A pointer to the allocated storage.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3038 | C++17 | allocate might allocate storage of wrong size | throws length_error instead |
| LWG 3237 | C++17 | the exception thrown by allocate was inconsistent with std::allocator::allocate | made consistent |

## See also
- [allocate_bytes](/cpp/memory/polymorphic_allocator/allocate_bytes/)
- [allocate_object](/cpp/memory/polymorphic_allocator/allocate_object/)
- [new_object](/cpp/memory/polymorphic_allocator/new_object/)
- [allocate](/cpp/memory/allocator_traits/allocate/)
- [allocate](/cpp/memory/memory_resource/allocate/)
