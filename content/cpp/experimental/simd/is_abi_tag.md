---
title: "std::experimental::is_abi_tag"
source_path: "cpp/experimental/simd/is_abi_tag"
header: "<experimental/simd>"
category: "experimental"
---

If T is an ABI tag in the simd_abi namespace, provides the member constant value equal true. For any other type, value is false.

## Declarations
```cpp
template< class T >
struct is_abi_tag;
```
_(parallelism TS v2)_

## Example
```cpp
#include <experimental/simd>
 
static_assert(std::experimental::is_abi_tag_v<stdx::simd_abi::scalar>);
static_assert(!std::experimental::is_abi_tag_v<int>);
 
int main() {}
```

## See also
- [is_simd_flag_type](/cpp/experimental/simd/is_simd_flag_type/)
