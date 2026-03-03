---
title: "std::experimental::simd_abi::compatible"
source_path: "cpp/experimental/simd/compatible"
header: "<experimental/simd>"
category: "experimental"
---

compatible<T> is an implementation-defined alias for an ABI tag.

## Declarations
```cpp
template< class T >
using compatible = /*implementation-defined*/;
```
_(parallelism TS v2)_

## Notes
The intent is to use the ABI tag producing the most efficient data-parallel execution for the element type T that ensures ABI compatibility between translation units on the target architecture.

## See also
- [scalar](/cpp/experimental/simd/scalar/)
- [fixed_size](/cpp/experimental/simd/fixed_size/)
- [native](/cpp/experimental/simd/native/)
- [deducededuce_t](/cpp/experimental/simd/deduce/)
