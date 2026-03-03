---
title: "std::uninitialized_construct_using_allocator"
source_path: "cpp/memory/uninitialized_construct_using_allocator"
header: "<memory>"
category: "memory"
since: "C++20"
---

Creates an object of the given type T by means of [uses-allocator construction](/cpp/memory/uses_allocator/) at the uninitialized memory location indicated by p.

## Declarations
```cpp
template< class T, class Alloc, class... Args >
constexpr T* uninitialized_construct_using_allocator( T* p,
const Alloc& alloc,
Args&&... args );
```
_(since C++20)_

## Parameters
- `p`: the memory location where the object will be placed
- `alloc`: the allocator to use
- `args`: the arguments to pass to T's constructor

## Return value
Pointer to the newly-created object of type T.

## Example
This section is incompleteReason: no example

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
- [make_obj_using_allocator](/cpp/memory/make_obj_using_allocator/)
