---
title: "std::experimental::simd<T,Abi>::operator!,~,+,-"
source_path: "cpp/experimental/simd/simd/operator"
category: "experimental"
---

Applies the given unary operator on each element of the [simd](/cpp/experimental/simd/simd/).

## Declarations
```cpp
mask_type operator!() const noexcept;
```
_(parallelism TS v2)_

```cpp
simd operator~() const noexcept;
```
_(parallelism TS v2)_

```cpp
simd operator+() const noexcept;
```
_(parallelism TS v2)_

```cpp
simd operator-() const noexcept;
```
_(parallelism TS v2)_

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
#include <string_view>
namespace stdx = std::experimental;
 
void println(std::string_view op, const stdx::native_simd_mask<int> x)
{
    std::cout << op << ": ";
    for (std::size_t i = 0; i < x.size(); ++i)
        std::cout << std::boolalpha << x[i] << ' ';
    std::cout << '\n';
}
 
void println(std::string_view op, const stdx::native_simd<int> x)
{
    std::cout << op << ": ";
    for (std::size_t i = 0; i < x.size(); ++i)
        std::cout << x[i] << ' ';
    std::cout << '\n';
}
 
int main()
{
    const stdx::native_simd<int> a([](int i) { return i; });
 
    println("  a", a);
    println(" !a", !a);
    println(" ~a", ~a);
    println("~~a", ~~a);
    println(" +a", +a);
    println(" -a", -a);
    println("+-a", +-a);
}
```
