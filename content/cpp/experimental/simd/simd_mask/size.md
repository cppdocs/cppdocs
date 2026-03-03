---
title: "std::experimental::simd_mask<T,Abi>::size"
source_path: "cpp/experimental/simd/simd_mask/size"
category: "experimental"
---

Returns the width (the number of values) of simd_mask<T, Abi>.

## Declarations
```cpp
static constexpr size_t size() noexcept;
```
_(parallelism TS v2)_

## Example
```cpp
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    stdx::native_simd_mask<int> a { true };
    std::cout << a.size() << '\n';
    std::cout << popcount(a) << '\n';
}
```

## See also
- [simd_size](/cpp/experimental/simd/simd_size/)
- [size](/cpp/experimental/simd/simd/size/)
