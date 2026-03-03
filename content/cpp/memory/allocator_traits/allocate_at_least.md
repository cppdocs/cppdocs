---
title: "std::allocator_traits<Alloc>::allocate_at_least"
source_path: "cpp/memory/allocator_traits/allocate_at_least"
category: "memory"
since: "C++23"
---

allocate_at_least calls a.allocate_at_least(n) and returns its result if the call is well-formed, otherwise, it is equivalent to return {a.allocate(n), n};.

## Declarations
```cpp
static constexpr std::allocation_result<pointer, size_type>
allocate_at_least( Alloc& a, size_type n );
```
_(since C++23)_

## Parameters
- `a`: an allocator used for allocating storage
- `n`: the lower bound of number of objects to allocate storage for

## Return value
a.allocate_at_least(n) if it is well-formed.

## Notes
The allocate_at_least member function of [Allocator](/cpp/named_req/allocator/) types are mainly provided for contiguous containers, e.g. [std::vector](/cpp/container/vector/) and [std::basic_string](/cpp/string/basic_string/), in order to reduce reallocation by making their capacity match the actually allocated size when possible. Because allocate_at_least provides a fallback mechanism, it can be directly used where appropriate.

Given an allocator object a of type Alloc, let result denote the value returned from [std::allocator_traits](/cpp/memory/allocator_traits/)<Alloc>::allocate_at_least(a, n), the storage should be deallocated by a.deallocate(result.ptr, m) (typically called via [std::allocator_traits](/cpp/memory/allocator_traits/)<Alloc>::deallocate(a, result.ptr, m)) in order to avoid memory leak.

The argument m used in deallocation must be not less than n and not greater than result.count, otherwise, the behavior is undefined. Note that n is always equal to result.count if the allocator does not provide allocate_at_least, which means that m is required to be equal to n.

## Example
This section is incompleteReason: no example

## See also
- [allocate_at_least](/cpp/memory/allocator/allocate_at_least/)
