---
title: "std::experimental::element_aligned_tag, std::experimental::element_aligned"
source_path: "cpp/experimental/simd/element_aligned"
header: "<experimental/simd>"
category: "experimental"
---

This tag type indicates that the buffer of copy_from and copy_to is aligned to its element alignment.

## Declarations
```cpp
struct element_aligned_tag {};
inline constexpr element_aligned_tag element_aligned{};
```
_(parallelism TS v2)_

## See also
- [vector_aligned_tagvector_aligned](/cpp/experimental/simd/vector_aligned/)
- [overaligned_tagoveraligned](/cpp/experimental/simd/overaligned/)
