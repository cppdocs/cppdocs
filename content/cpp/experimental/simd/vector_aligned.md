---
title: "std::experimental::vector_aligned_tag, std::experimental::vector_aligned"
source_path: "cpp/experimental/simd/vector_aligned"
header: "<experimental/simd>"
category: "experimental"
---

This tag type indicates that the buffer of copy_from and copy_to is aligned to memory_alignment_v<T, U>, where the copy operation operates on the simd/simd_mask type T, and the buffer with element type U.

## Declarations
```cpp
struct vector_aligned_tag {};
inline constexpr vector_aligned_tag vector_aligned{};
```
_(parallelism TS v2)_

## Notes
This tag type allows to implement vector-aligned load and store.

## See also
- [element_aligned_tagelement_aligned](/cpp/experimental/simd/element_aligned/)
- [overaligned_tagoveraligned](/cpp/experimental/simd/overaligned/)
- [memory_alignment](/cpp/experimental/simd/memory_alignment/)
