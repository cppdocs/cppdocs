---
title: "std::experimental::find_first_set, std::experimental::find_last_set"
source_path: "cpp/experimental/simd/find_first_set"
header: "<experimental/simd>"
category: "experimental"
---

1) Returns the lowest index i where k[i] is true.

## Declarations
```cpp
template< class T, class Abi >
int find_first_set( const simd_mask<T, Abi>& k );
```
_(parallelism TS v2)_

```cpp
template< class T, class Abi >
int find_last_set( const simd_mask<T, Abi>& k );
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
int find(stdx::simd_mask<Abi> const& v)
{
    if (stdx::any_of(v))
        return find_first_set(v);
    return -1;
}
 
int main()
{
    stdx::simd_mask<short> a{0};
    a[2] = a[a.size() - 2] = 1;
 
    for (std::size_t i = 0; i < a.size(); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
 
    std::cout << "find_first_set: " << stdx::find_first_set(a) << '\n';
    std::cout << "find_last_set: " << stdx::find_last_set(a) << '\n';
    std::cout << "find: " << find(a) << '\n';
    a[2] = 0;
    std::cout << "find: " << find(a) << '\n';
    a[a.size() - 2] = 0;
    std::cout << "find: " << find(a) << '\n';
}
```
