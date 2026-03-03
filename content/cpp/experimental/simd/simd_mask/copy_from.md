---
title: "std::experimental::simd_mask<T,Abi>::copy_from"
source_path: "cpp/experimental/simd/simd_mask/copy_from"
category: "experimental"
---

The load function replaces all elements of a [simd_mask](/cpp/experimental/simd/simd_mask/) such that the i-th element is assigned with mem[i] for all i in the range of [0,[size()](/cpp/experimental/simd/simd_mask/size/)).

## Declarations
```cpp
template<class Flags>
void copy_from( const bool* mem, Flags flags );
```
_(parallelism TS v2)_

## Parameters
- `mem`: a pointer into an array where [mem, mem + size()) is a valid range
- `flags`: if of type vector_aligned_tag, the load constructor may assume mem to point to storage aligned by memory_alignment_v<simd_mask>

## See also
- [element_aligned_tagelement_aligned](/cpp/experimental/simd/element_aligned/)
- [vector_aligned_tagvector_aligned](/cpp/experimental/simd/vector_aligned/)
- [overaligned_tagoveraligned](/cpp/experimental/simd/overaligned/)
- [memory_alignment](/cpp/experimental/simd/memory_alignment/)
- [vector_aligned](/cpp/experimental/simd/vector_aligned/)
- [(constructor)](/cpp/experimental/simd/simd_mask/simd_mask/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [copy_to](/cpp/experimental/simd/simd_mask/copy_to/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [copy_from](/cpp/experimental/simd/simd/copy_from/)
- [simd](/cpp/experimental/simd/simd/)
