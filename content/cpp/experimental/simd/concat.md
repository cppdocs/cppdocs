---
title: "std::experimental::concat"
source_path: "cpp/experimental/simd/concat"
header: "<experimental/simd>"
category: "experimental"
---

Concatenates the input [simd](/cpp/experimental/simd/simd/) or [simd_mask](/cpp/experimental/simd/simd_mask/) objects.

## Declarations
```cpp
template< class T, class... Abis >
simd<T, simd_abi::deduce_t<T, (simd_size_v<T, Abis> + ...)>>
concat( const simd<T, Abis>&... vs ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, class... Abis >
simd_mask<T, simd_abi::deduce_t<T, (simd_size_v<T, Abis> + ...)>>
concat( const simd_mask<T, Abis>&... vs ) noexcept;
```
_(parallelism TS v2)_

## Return value
The concatenated result of a single [simd](/cpp/experimental/simd/simd/) or [simd_mask](/cpp/experimental/simd/simd_mask/) object.
