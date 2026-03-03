---
title: "std::experimental::simd_size"
source_path: "cpp/experimental/simd/simd_size"
header: "<experimental/simd>"
category: "experimental"
---

If T is a vectorizable type and is_abi_tag_v<Abi> is true, provides the member constant value equal to the width (number of elements) of simd<T, Abi>, irrespective of whether simd<T, Abi> is supported or not. For any other types T and Abi, there is no member value.

## Declarations
```cpp
template< class T, class Abi = simd_abi::compatible<T> >
struct simd_size;
```
_(parallelism TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [size](/cpp/experimental/simd/simd/size/)
- [size](/cpp/experimental/simd/simd_mask/size/)
