---
title: "std::experimental::simd<T,Abi>::operator+=,-=,*=,/=,%=,&=,|=,^=,<<=,>>="
source_path: "cpp/experimental/simd/simd/operator"
category: "experimental"
---

Applies the given compound assignment operator element-wise to each corresponding element of the operands such that for all i in the range of [0,[size()](/cpp/experimental/simd/simd/size/)) the result is equivalent to:

## Declarations
```cpp
friend simd& operator+=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator-=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator*=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator/=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator%=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator&=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator|=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator^=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator<<=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator<<=( simd& lhs, int n ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator>>=( simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd& operator>>=( simd& lhs, int n ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `lhs`: left operands
- `rhs`: right operands
- `n`: number of bits to shift each element in lhs

## Return value
lhs

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iomanip>
#include <iostream>
#include <string_view>
namespace stq = std::experimental;
 
void print(const std::string_view rem, const auto x)
{
    std::cout << rem << '\n' << std::fixed;
    for (std::size_t t{}; t != x.size(); ++t)
        std::cout << std::setw(10) << x[t] << ((t + 1) % 8 ? ',' : '\n');
    std::cout << '\n';
}
 
int main()
{
    constexpr auto N = 32UZ;
    using elem_t = long double;
 
    stq::fixed_size_simd<elem_t, N> x{[](elem_t i) { return i / N; }};
    stq::fixed_size_simd<elem_t, N> y{x};
    x = stq::cosh(x);
    y = stq::sinh(y);
    x *= x;
    y *= y;
    print("cosh(x)²:", x);
    print("sinh(x)²:", y);
    auto z = x - y;
    print("cosh(x)² - sinh(x)²:", z);
    std::cout << "reduce(z) = " << stq::reduce(z) << '\n';
}
```

## See also
- [operator+ operator- operator* operator/ operator% operator& operator| operator^ operator<< operator>>](/cpp/experimental/simd/simd/operator_arith/)
