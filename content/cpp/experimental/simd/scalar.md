---
title: "std::experimental::simd_abi::scalar"
source_path: "cpp/experimental/simd/scalar"
header: "<experimental/simd>"
category: "experimental"
---

With the scalar ABI tag, data-parallel types are equivalent to a single element type. However, the full [simd](/cpp/experimental/simd/simd/) and [simd_mask](/cpp/experimental/simd/simd_mask/) interface is supported and thus eases development of generic code.

## Declarations
```cpp
using scalar = /*unspecified*/;
```
_(parallelism TS v2)_

## Notes
scalar is not an alias to fixed_size<1>.

## See also
- [fixed_size](/cpp/experimental/simd/fixed_size/)
- [compatible](/cpp/experimental/simd/compatible/)
- [native](/cpp/experimental/simd/native/)
- [deducededuce_t](/cpp/experimental/simd/deduce/)
