---
title: "std::experimental::simd<T,Abi>::operator[]"
source_path: "cpp/experimental/simd/simd/operator_at"
category: "experimental"
---

The subscript operators allow reading and writing single elements of a simd.

## Declarations
```cpp
reference operator[]( std::size_t i );
```
_(parallelism TS v2)_

```cpp
value_type operator[]( std::size_t i ) const;
```
_(parallelism TS v2)_

## Parameters
- `i`: the element index. Required to be less than size()

## Example
```cpp
#include <cstddef>
#include <cstdint>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    const stdx::native_simd<std::int64_t> a = 3;
    for (std::size_t i = 0; i != a.size(); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
```
