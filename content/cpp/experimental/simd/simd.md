---
title: "std::experimental::simd"
source_path: "cpp/experimental/simd/simd"
header: "<experimental/simd>"
category: "experimental"
---

The class template simd is a data-parallel type. The width of a given simd instantiation is a constant expression, determined by the template parameters.

## Declarations
```cpp
template< class T, class Abi = simd_abi::compatible<T> >
class simd;
```
_(parallelism TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [valarray](/cpp/numeric/valarray/)
