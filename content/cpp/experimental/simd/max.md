---
title: "std::experimental::max"
source_path: "cpp/experimental/simd/max"
header: "<experimental/simd>"
category: "experimental"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
template< class T, class Abi >
simd<T, Abi> max( const simd<T, Abi>& a, const simd<T, Abi>& b ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `a`: the first vector of elements for max
- `b`: the second vector of elements for max

## Return value
The result of binary element-wise application of [std::max](/cpp/algorithm/max/)(a[i], b[i]) for all i ∈ [0,size()).

## Example
This section is incompleteReason: no example
