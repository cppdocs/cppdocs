---
title: "std::experimental::simd_mask<T,Abi>::operator[]"
source_path: "cpp/experimental/simd/simd_mask/operator_at"
category: "experimental"
---

The subscript operators allow reading and writing single elements of a simd_mask.

## Declarations
```cpp
reference operator[]( size_t i );
```
_(parallelism TS v2)_

```cpp
bool operator[]( size_t i ) const;
```
_(parallelism TS v2)_

## Parameters
- `i`: the element index. Required to be less than size()

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    stdx::native_simd_mask<int> a{true};
    a[1] = 0;
    for (std::size_t i = 0; i != a.size(); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
```
