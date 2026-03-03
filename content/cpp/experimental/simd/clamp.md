---
title: "std::experimental::clamp"
source_path: "cpp/experimental/simd/clamp"
header: "<experimental/simd>"
category: "experimental"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
template< class T, class Abi >
simd<T, Abi>
clamp( const simd<T, Abi>& v, const simd<T, Abi>& lo, const simd<T, Abi>& hi );
```
_(parallelism TS v2)_

## Parameters
- `v`: the elements to clamp
- `lo, hi`: the boundaries to clamp v to

## Return value
The result of element-wise application of [std::clamp](/cpp/algorithm/clamp/)(v[i], lo[i], hi[i]) for all i ∈ [0,size()).

## Example
```cpp
#include <cstddef>
#include <cstdint>
#include <experimental/simd>
#include <iomanip>
#include <iostream>
namespace stdx = std::experimental;
 
void println(auto rem, auto const v)
{
    std::cout << rem << ": ";
    for (std::size_t i = 0; i != v.size(); ++i)
        std::cout << std::setw(4) << v[i] << ' ';
    std::cout << '\n';
}
 
int main()
{
    stdx::fixed_size_simd<int, 8> a{[](int i) {
        static constexpr auto c = {-129, -128, -1, 0, 42, 127, 128, 255};
        return c.begin()[i];
    }};
    println("a", a);
 
    stdx::fixed_size_simd<int, 8> lo1{INT8_MIN};
    stdx::fixed_size_simd<int, 8> hi1{INT8_MAX};
    const auto b = stdx::clamp(a, lo1, hi1);
    println("b", b);
 
    stdx::fixed_size_simd<int, 8> lo2{0};
    stdx::fixed_size_simd<int, 8> hi2{UINT8_MAX};
    const auto c = stdx::clamp(a, lo2, hi2);
    println("c", c);
}
```

## See also
- [clamp](/cpp/algorithm/clamp/)
