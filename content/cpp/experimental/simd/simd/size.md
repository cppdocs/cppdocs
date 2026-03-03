---
title: "std::experimental::simd<T,Abi>::size"
source_path: "cpp/experimental/simd/simd/size"
category: "experimental"
---

Returns the width (the number of values) of simd<T, Abi>.

## Declarations
```cpp
static constexpr size_t size() noexcept;
```
_(parallelism TS v2)_

## Example
```cpp
#include <experimental/simd>
#include <cstdint>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    stdx::native_simd<std::int32_t> a = 1;
    std::cout << a.size() << '\n';
    std::cout << reduce(a) << '\n';
}
```

## See also
- [simd_size](/cpp/experimental/simd/simd_size/)
- [size](/cpp/experimental/simd/simd_mask/size/)
