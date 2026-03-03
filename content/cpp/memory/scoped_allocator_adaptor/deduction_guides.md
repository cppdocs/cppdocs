---
title: "deduction guides for std::scoped_allocator_adaptor"
source_path: "cpp/memory/scoped_allocator_adaptor/deduction_guides"
header: "<scoped_allocator>"
category: "memory"
since: "C++17"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/) to make it possible to deduce its outer allocator.

## Declarations
```cpp
template< class OuterAlloc, class... InnerAllocs >
scoped_allocator_adaptor( OuterAlloc, InnerAllocs... )
-> scoped_allocator_adaptor<OuterAlloc, InnerAllocs...>;
```
_(since C++17)_

## Example
This section is incompleteReason: no example
