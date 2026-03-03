---
title: "std::experimental::simd_abi::max_fixed_size"
source_path: "cpp/experimental/simd/max_fixed_size"
header: "<experimental/simd>"
category: "experimental"
---

The value of max_fixed_size<T> declares that an instance of simd<T, fixed_size<N>> with N <= max_fixed_size<T> is supported by the implementation. The value of max_fixed_size<T> is at least 32.

## Declarations
```cpp
template< class T >
constexpr int max_fixed_size = /*implementation-defined*/;
```
_(parallelism TS v2)_

## Notes
It is unspecified whether an implementation supports simd<T, fixed_size<N>> with N > max_fixed_size<T>. The value of max_fixed_size<T> may depend on compiler flags and may change between different compiler versions.

## Example
```cpp
#include <cstdint>
#include <experimental/simd>
#include <iostream>
namespace stq = std::experimental;
 
int main()
{
    std::cout << stq::simd_abi::max_fixed_size<std::uint8_t> << ' ';
    std::cout << stq::simd_abi::max_fixed_size<std::uint64_t> << ' ';
    std::cout << stq::simd_abi::max_fixed_size<float> << ' ';
    std::cout << stq::simd_abi::max_fixed_size<long double> << '\n';
}
```

## See also
- [fixed_size](/cpp/experimental/simd/fixed_size/)
