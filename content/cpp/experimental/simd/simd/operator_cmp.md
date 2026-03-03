---
title: "std::experimental::simd<T,Abi>::operator==,!=,<,<=,>,>="
source_path: "cpp/experimental/simd/simd/operator_cmp"
category: "experimental"
---

Applies the given comparison element-wise to each corresponding element of the operands.
Returns a [simd_mask](/cpp/experimental/simd/simd_mask/) such that for all i in the range of [0,[size()](/cpp/experimental/simd/simd/size/)) the ith element equals:

## Declarations
```cpp
friend simd_mask operator==( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd_mask operator!=( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd_mask operator<( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd_mask operator<=( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd_mask operator>( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd_mask operator>=( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `lhs`: left operands
- `rhs`: right operands

## Example
```cpp
#include <cassert>
#include <iostream>
#include <initializer_list>
#include <iterator>
 
#include <experimental/simd>
namespace stdx = std::experimental;
 
int main()
{
    using V = stdx::fixed_size_simd<int, 4>;
    using M = stdx::fixed_size_simd_mask<int, 4>;
 
    auto assert_equivalence = [](M&& x, std::initializer_list<int>&& y)
    {
        for (decltype(M::size()) i{}; i != M::size(); ++i)
            assert(x[i] == std::cbegin(y)[i]);
    };
 
    V a{2}, b, c{3};
    b[0] = 1, b[1] = 2, b[2] = 3, b[3] = 4;
 
    // a == {2, 2, 2, 2}
    // b == {1, 2, 3, 4}
    // c == {3, 3, 3, 3}
 
    assert_equivalence(a == a, {1, 1, 1, 1});
    assert_equivalence(a == b, {0, 1, 0, 0});
    assert_equivalence(b == c, {0, 0, 1, 0});
    assert_equivalence(a == c, {0, 0, 0, 0});
 
    assert_equivalence(a != a, {0, 0, 0, 0});
    assert_equivalence(a != b, {1, 0, 1, 1});
    assert_equivalence(b != c, {1, 1, 0, 1});
    assert_equivalence(a != c, {1, 1, 1, 1});
 
    assert_equivalence(a < a, {0, 0, 0, 0});
    assert_equivalence(a < b, {0, 0, 1, 1});
    assert_equivalence(b < c, {1, 1, 0, 0});
    assert_equivalence(a < c, {1, 1, 1, 1});
}
```

## See also
- [all_ofany_ofnone_ofsome_of](/cpp/experimental/simd/all_of/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [popcount](/cpp/experimental/simd/popcount/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [find_first_setfind_last_set](/cpp/experimental/simd/find_first_set/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
