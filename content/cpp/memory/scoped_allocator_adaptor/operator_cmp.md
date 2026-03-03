---
title: "operator==,!=(std::scoped_allocator_adaptor)"
source_path: "cpp/memory/scoped_allocator_adaptor/operator_cmp"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

Compares two scoped allocator adaptors. Two such allocators are equal if:

## Declarations
```cpp
template< class OuterAlloc1, class OuterAlloc2, class... InnerAllocs >
bool operator==( const scoped_allocator_adaptor<OuterAlloc1, InnerAllocs...>& lhs,
const scoped_allocator_adaptor<OuterAlloc2, InnerAllocs...>& rhs ) noexcept;
```
_(since C++11)_

```cpp
template< class OuterAlloc1, class OuterAlloc2, class... InnerAllocs >
bool operator!=( const scoped_allocator_adaptor<OuterAlloc1, InnerAllocs...>& lhs,
const scoped_allocator_adaptor<OuterAlloc2, InnerAllocs...>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: scoped allocator adaptors to compare
