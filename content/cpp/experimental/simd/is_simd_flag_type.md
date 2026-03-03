---
title: "std::experimental::is_simd_flag_type"
source_path: "cpp/experimental/simd/is_simd_flag_type"
header: "<experimental/simd>"
category: "experimental"
---

If T is a valid type for the second argument to copy_from, copy_to or the corresponding load constructors of simd or simd_mask, provides the member constant value equal true. For any other type, value is false.

## Declarations
```cpp
template< class T >
struct is_simd_flag_type;
```
_(parallelism TS v2)_

## Example
```cpp
#include <experimental/simd>
#include <iostream>
 
int main()
{
    namespace stdx = std::experimental;
    std::cout << std::boolalpha
              << stdx::is_simd_flag_type_v<stdx::element_aligned_tag> << '\n'
              << stdx::is_simd_flag_type_v<int> << '\n';
}
```

## See also
- [is_abi_tag](/cpp/experimental/simd/is_abi_tag/)
