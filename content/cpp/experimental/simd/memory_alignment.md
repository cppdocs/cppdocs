---
title: "std::experimental::memory_alignment"
source_path: "cpp/experimental/simd/memory_alignment"
header: "<experimental/simd>"
category: "experimental"
---

If is_simd_mask_v<T> is true and U is bool, or if is_simd_v<T> is true and U is a vectorizable type, provides the member constant value equal to the minimum alignment of a pointer passed to a load constructor, copy_from function, or copy_to function. For any other types T and U, there is no member value.

## Declarations
```cpp
template< class T, class U = typename T::value_type >
struct memory_alignment;
```
_(parallelism TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [vector_aligned_tagvector_aligned](/cpp/experimental/simd/vector_aligned/)
- [(constructor)](/cpp/experimental/simd/simd/simd/)
- [simd](/cpp/experimental/simd/simd/)
- [copy_from](/cpp/experimental/simd/simd/copy_from/)
- [simd](/cpp/experimental/simd/simd/)
- [copy_to](/cpp/experimental/simd/simd/copy_to/)
- [simd](/cpp/experimental/simd/simd/)
- [(constructor)](/cpp/experimental/simd/simd_mask/simd_mask/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [copy_from](/cpp/experimental/simd/simd_mask/copy_from/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [copy_to](/cpp/experimental/simd/simd_mask/copy_to/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
