---
title: "std::basic_simd, std::simd"
source_path: "cpp/numeric/simd/basic_simd"
header: "<simd>"
category: "numeric"
since: "C++26"
---

1) std::basic_simd specialization is a data-parallel type. The default ABI tag is determined by the implementation at compile-time.

## Declarations
```cpp
template< class T, class Abi = /*native-abi*/<T> >
class basic_simd;
```
_(since C++26)_

```cpp
template< class T, /*simd-size-type*/ N = /*simd-size-v*/<T, /*native-abi*/<T>> >
using simd = basic_simd<T, /*deduce-abi-t*/<T, N>>;
```
_(since C++26)_

## Notes
Implementations are recommended to support explicit conversions between enabled specializations of basic_simd and appropriate implementation-defined types. These appropriate types are non-standard vector types which are available in the implementation.

## Example
This section is incompleteReason: no example

## See also
- [valarray](/cpp/numeric/valarray/)
