---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::operator="
source_path: "cpp/memory/scoped_allocator_adaptor/operator"
header: "<scoped_allocator>"
category: "memory"
---

1) Explicitly defaulted copy assignment operator that copy assigns the base class (OuterAlloc, the outer allocator) and all inner allocators.

## Declarations
```cpp
scoped_allocator_adaptor& operator=( const scoped_allocator_adaptor& other ) = default;
```

```cpp
scoped_allocator_adaptor& operator=( scoped_allocator_adaptor&& other ) = default;
```

## Parameters
- `other`: another std::scoped_allocator_adaptor
