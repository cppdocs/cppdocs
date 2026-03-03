---
title: "std::experimental::minmax"
source_path: "cpp/experimental/simd/minmax"
header: "<experimental/simd>"
category: "experimental"
---

Returns both the element-wise min result and element-wise max result.

## Declarations
```cpp
template< class T, class Abi >
std::pair<simd<T, Abi>, simd<T, Abi>>
minmax( const simd<T, Abi>& a, const simd<T, Abi>& b ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `a`: the first vector of elements for minmax
- `b`: the second vector of elements for minmax

## Return value
An object r, where the ith element of r.first is [std::min](/cpp/algorithm/min/)(a[i], b[i]), and the ith element of r.second is [std::max](/cpp/algorithm/max/)(a[i], b[i]).

## Example
This section is incompleteReason: no example
