---
title: "std::experimental::overaligned_tag, std::experimental::overaligned"
source_path: "cpp/experimental/simd/overaligned"
header: "<experimental/simd>"
category: "experimental"
---

This tag type indicates that the buffer of copy_from and copy_to is aligned to N.

## Declarations
```cpp
template< std::size_t N >
struct overaligned_tag {};
template< std::size_t N >
inline constexpr overaligned_tag<N> overaligned{};
```
_(parallelism TS v2)_

## See also
- [vector_aligned_tagvector_aligned](/cpp/experimental/simd/vector_aligned/)
- [element_aligned_tagelement_aligned](/cpp/experimental/simd/element_aligned/)
