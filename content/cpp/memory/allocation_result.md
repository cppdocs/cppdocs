---
title: "std::allocation_result"
source_path: "cpp/memory/allocation_result"
header: "<memory>"
category: "memory"
since: "C++23"
---

allocation_result specializations are returned from the allocate_at_least member function of appropriate [Allocator](/cpp/named_req/allocator/) types (e.g. [std::allocator::allocate_at_least](/cpp/memory/allocator/allocate_at_least/)) and [std::allocator_traits::allocate_at_least](/cpp/memory/allocator_traits/allocate_at_least/).

## Declarations
```cpp
template< class Pointer, class SizeType = std::size_t >
struct allocation_result;
```
_(since C++23)_

## Notes
Pointer and SizeType are a pointer to an object type and [std::make_unsigned_t](/cpp/types/make_unsigned/)<[std::ptrdiff_t](/cpp/types/ptrdiff_t/)> (which is almost always same as [std::size_t](/cpp/types/size_t/)) by default.

## Example
This section is incompleteReason: no example

## See also
- [allocate_at_least](/cpp/memory/allocator/allocate_at_least/)
- [allocate_at_least](/cpp/memory/allocator_traits/allocate_at_least/)
