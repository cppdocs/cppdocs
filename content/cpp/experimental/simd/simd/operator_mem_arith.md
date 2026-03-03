---
title: "std::experimental::simd<T,Abi>::operator++, std::experimental::simd<T,Abi>::operator--"
source_path: "cpp/experimental/simd/simd/operator"
category: "experimental"
---

Applies the increment or decrement operator on each element of the simd.

## Declarations
```cpp
simd& operator++() noexcept;
```
_(parallelism TS v2)_

```cpp
simd operator++( int ) noexcept;
```
_(parallelism TS v2)_

```cpp
simd& operator--() noexcept;
```
_(parallelism TS v2)_

```cpp
simd operator--( int ) noexcept;
```
_(parallelism TS v2)_

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
void print(auto rem, auto const& a)
{
    std::cout << rem << ": ";
    for (std::size_t i{}; i != std::size(a); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
 
int main()
{
    stdx::native_simd<int> p = -2;
    print('p', p);
 
    ++p;
    print('p', p);
 
    auto q = p--;
    print('p', p);
    print('q', q);
}
```
