---
title: "std::experimental::simd_abi::deduce"
source_path: "cpp/experimental/simd/deduce"
header: "<experimental/simd>"
category: "experimental"
---

The type deduce<T, N, Abis...>::type is present if and only if:

## Declarations
```cpp
template< class T, std::size_t N, class ...Abis >
struct deduce;
```
_(parallelism TS v2)_

## Notes
simd_abi::deduce is SFINAE-friendly.

The ABI tag deduced via this facility is a Quality-of-Implementation feature.
Implementations can base the choice on Abis..., but can also ignore the Abis... arguments. A simple implementation might simply return fixed_size<N> unconditionally. An optimized implementation might return an implementation-defined extended ABI tag for most inputs. Consequently, if you need an ABI tag for a certain number of elements, use [fixed_size](/cpp/experimental/simd/fixed_size/) if ABI stability is of concern, and prefer deduce_t otherwise.

## Example
This section is incompleteReason: no example

## See also
- [scalar](/cpp/experimental/simd/scalar/)
- [fixed_size](/cpp/experimental/simd/fixed_size/)
- [compatible](/cpp/experimental/simd/compatible/)
- [native](/cpp/experimental/simd/native/)
