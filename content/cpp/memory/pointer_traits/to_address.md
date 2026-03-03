---
title: "std::pointer_traits<Ptr>::to_address"
source_path: "cpp/memory/pointer_traits/to_address"
header: "<memory>"
category: "memory"
---

Constructs a raw pointer that references the same object as its pointer-like (["fancy pointer"](/cpp/named_req/allocator/#Fancy_pointers)) argument.

## Declarations
```cpp
static element_type* to_address( pointer p ) noexcept;
```
_(since C++20) (optional member of program-defined specialization)_

## Parameters
- `p`: fancy pointer/pointer-like object

## Return value
A raw pointer of the type element_type* that references the same memory location as the argument p.

## See also
- [pointer_to](/cpp/memory/pointer_traits/pointer_to/)
- [to_address](/cpp/memory/to_address/)
