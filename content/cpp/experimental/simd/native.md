---
title: "std::experimental::simd_abi::native"
source_path: "cpp/experimental/simd/native"
header: "<experimental/simd>"
category: "experimental"
---

native<T> is an implementation-defined alias for an ABI tag. This is the primary ABI tag to use for efficient explicit vectorization.

## Declarations
```cpp
template< class T >
using native = /*implementation-defined*/;
```
_(parallelism TS v2)_

## Notes
The intent is to use the ABI tag producing the most efficient data-parallel execution for the element type T that is supported on the currently targeted system. For target architectures without ISA extensions, the native<T> and compatible<T> aliases will likely be the same. For target architectures with ISA extensions, compiler flags may influence the native<T> alias while compatible<T> will be the same independent of such flags.

## See also
- [scalar](/cpp/experimental/simd/scalar/)
- [fixed_size](/cpp/experimental/simd/fixed_size/)
- [compatible](/cpp/experimental/simd/compatible/)
- [deducededuce_t](/cpp/experimental/simd/deduce/)
