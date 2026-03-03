---
title: "std::make_obj_using_allocator"
source_path: "cpp/memory/make_obj_using_allocator"
header: "<memory>"
category: "memory"
since: "C++20"
---

Creates an object of the given type T by means of [uses-allocator construction](/cpp/memory/uses_allocator/).

## Declarations
```cpp
template< class T, class Alloc, class... Args >
constexpr T make_obj_using_allocator( const Alloc& alloc, Args&&... args );
```
_(since C++20)_

## Parameters
- `alloc`: the allocator to use
- `args`: the arguments to pass to T's constructor

## Return value
The newly-created object of type T.

## Example
This section is incompleteReason: no example

## See also
- [uses_allocator_construction_args](/cpp/memory/uses_allocator_construction_args/)
- [uninitialized_construct_using_allocator](/cpp/memory/uninitialized_construct_using_allocator/)
