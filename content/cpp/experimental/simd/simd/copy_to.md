---
title: "std::experimental::simd<T,Abi>::copy_to"
source_path: "cpp/experimental/simd/simd/copy_to"
category: "experimental"
---

The store function copies all elements of a [simd](/cpp/experimental/simd/simd/) such that the i-th element is converted to U and subsequently written to mem[i] for all i in the range of [0,[size()](/cpp/experimental/simd/simd/size/)).

## Declarations
```cpp
template< class U, class Flags >
void copy_to( U* mem, Flags flags );
```
_(parallelism TS v2)_

## Parameters
- `mem`: a pointer into an array where [mem, mem + size()) is a valid range
- `flags`: if of type vector_aligned_tag, the load constructor may assume mem to point to storage aligned by memory_alignment_v<simd, U>

## Example
```cpp
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    alignas(stdx::memory_alignment_v<stdx::native_simd<int>>)
        std::array<int, stdx::native_simd<int>::size()> mem = {};
 
    stdx::native_simd<int> a = 7;
    a.copy_to(&mem[0], stdx::vector_aligned);
 
    for (int e : mem)
        std::cout << e << ' ';
    std::cout << '\n';
}
```

## See also
- [element_aligned_tagelement_aligned](/cpp/experimental/simd/element_aligned/)
- [vector_aligned_tagvector_aligned](/cpp/experimental/simd/vector_aligned/)
- [overaligned_tagoveraligned](/cpp/experimental/simd/overaligned/)
- [memory_alignment](/cpp/experimental/simd/memory_alignment/)
- [vector_aligned](/cpp/experimental/simd/vector_aligned/)
- [copy_from](/cpp/experimental/simd/simd/copy_from/)
- [simd](/cpp/experimental/simd/simd/)
