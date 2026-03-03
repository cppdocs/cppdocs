---
title: "std::experimental::erased_type"
source_path: "cpp/experimental/erased_type"
header: "<experimental/utility>"
category: "experimental"
---

The class erased_type is an empty struct that serves as a placeholder for a type in situations where the actual type is determined at runtime. For example, in classes that use [type-erased allocators](/cpp/experimental/memory/), the nested typedef allocator_type is an alias for erased_type.

## Declarations
```cpp
struct erased_type { };
```
_(library fundamentals TS) (removed in library fundamentals TS v3)_

## Notes
erased_type is removed in LFTS v3 because [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<> is preferable for type erasure.
