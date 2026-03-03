---
title: "std::experimental::simd_mask"
source_path: "cpp/experimental/simd/simd_mask"
header: "<experimental/simd>"
category: "experimental"
---

The class template simd_mask is a data-parallel type with the element type bool. The width of a given simd_mask instantiation is a constant expression, determined by the template parameters. Specifically, simd_mask<T, Abi>::size() is always simd<T, Abi>::size().

## Declarations
```cpp
template< class T, class Abi = simd_abi::compatible<T> >
class simd_mask;
```
_(parallelism TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [simd](/cpp/experimental/simd/simd/)
- [mask_array](/cpp/numeric/valarray/mask_array/)
