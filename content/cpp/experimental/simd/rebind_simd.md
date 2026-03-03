---
title: "std::experimental::rebind_simd, std::experimental::resize_simd"
source_path: "cpp/experimental/simd/rebind_simd"
header: "<experimental/simd>"
category: "experimental"
---

Creates a [simd](/cpp/experimental/simd/simd/) or [simd_mask](/cpp/experimental/simd/simd_mask/) type with a different element type or size. The new type likely uses an ABI tag type different from V::abi_type.

## Declarations
```cpp
template< class T, class V >
struct rebind_simd;
```
_(parallelism TS v2)_

```cpp
template< int N, class V >
struct resize_simd;
```
_(parallelism TS v2)_

## Example
```cpp
#include <experimental/simd>
#include <iostream>
 
namespace stdx = std::experimental;
using floatv = stdx::native_simd<float>;
 
// use double precision internally
floatv dp(floatv x)
{
    using doublev = stdx::rebind_simd_t<double, floatv>;
    return stdx::static_simd_cast<floatv>(stdx::simd_cast<doublev>(x) - 1.234);
}
 
template<class T>
stdx::resize_simd_t<T::size() / 2, T> partial_reduction(T x)
{
    auto [lo, hi] = stdx::split<stdx::resize_simd_t<T::size() / 2, T>>(x);
    return lo + hi;
}
 
int main() 
{
    floatv x([](auto i) { return 1.234f + std::numeric_limits<float>::epsilon() * i; });
    x = dp(x);
    const auto y = partial_reduction(x);
    for (unsigned i = 0; i < y.size(); ++i)
        std::cout << y[i] << ' ';
    std::cout << '\n';
}
```

## See also
- [deducededuce_t](/cpp/experimental/simd/deduce/)
