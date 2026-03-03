---
title: "std::experimental::popcount"
source_path: "cpp/experimental/simd/popcount"
header: "<experimental/simd>"
category: "experimental"
---

Returns the number of true values in the mask k.

## Declarations
```cpp
template< class T, class Abi >
int popcount( const simd_mask<T, Abi>& k ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `k`: the simd_mask to apply the reduction to

## Return value
An int in the range [0,simd_size_v<T, Abi>).

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
template<typename Abi>
int count_zeros(stdx::simd<int, Abi> v)
{
    return stdx::popcount(v == 0); // v == 0 returns a simd_mask
}
 
void println(auto rem, auto const v)
{
    std::cout << rem << ": ";
    for (std::size_t i = 0; i != v.size(); ++i)
        std::cout << v[i] << ' ';
}
 
int main()
{
    stdx::simd<int> x{8};
    println("x", x);
    std::cout << "  zeros: " << count_zeros(x) << '\n';
 
    x[3] = x[1] = false;
    println("x", x);
    std::cout << "  zeros: " << count_zeros(x) << '\n';
}
```
