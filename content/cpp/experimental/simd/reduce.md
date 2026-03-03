---
title: "std::experimental::reduce, std::experimental::hmin, std::experimental::hmax"
source_path: "cpp/experimental/simd/reduce"
header: "<experimental/simd>"
category: "experimental"
---

1) Reduces all values in v over binary_op.

## Declarations
```cpp
template< class T, class Abi, class BinaryOperation = std::plus<> >
T reduce( const simd<T, Abi>& v, BinaryOperation binary_op = {} );
```
_(parallelism TS v2)_

```cpp
template< class M, class V, class BinaryOperation >
typename V::value_type
reduce( const const_where_expression<M, V>& x,
typename V::value_type identity_element, BinaryOperation binary_op = {} );
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
reduce( const const_where_expression<M, V>& x, std::plus<> binary_op ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
reduce( const const_where_expression<M, V>& x, std::multiplies<> binary_op ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
reduce( const const_where_expression<M, V>& x, std::bit_and<> binary_op ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
reduce( const const_where_expression<M, V>& x, std::bit_or<> binary_op ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
reduce( const const_where_expression<M, V>& x, std::bit_xor<> binary_op ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, class Abi >
T hmin( const simd<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
hmin( const const_where_expression<M, V>& x ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, class Abi >
T hmax( const simd<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class M, class V >
typename V::value_type
hmax( const const_where_expression<M, V>& x ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `v`: the simd vector to apply the reduction to
- `x`: the return value of a where expression to apply the reduction to
- `identity_element`: a value that acts as identity element for binary_op; binary_op(identity_element, a) == a must hold for all finite a of type V::value_type
- `binary_op`: binary FunctionObject that will be applied in unspecified order to arguments of type V::value_type or simd<V::value_type, A>, with unspecified ABI tag A. binary_op(v, v) must be convertible to V

## Return value
The result of operation of the type:

## Example
```cpp
#include <array>
#include <cassert>
#include <cstddef>
#include <experimental/simd>
#include <functional>
#include <iostream>
#include <numeric>
namespace stdx = std::experimental;
 
int main()
{
    using V = stdx::native_simd<double>;
 
    alignas(stdx::memory_alignment_v<V>) std::array<V::value_type, 1024> data;
    std::iota(data.begin(), data.end(), 0);
 
    V::value_type acc{};
    for (std::size_t i = 0; i < data.size(); i += V::size())
        acc += stdx::reduce(V(&data[i], stdx::vector_aligned), std::plus{});
    std::cout << "sum of data = " << acc << '\n';
 
    using W = stdx::fixed_size_simd<int, 4>;
    alignas(stdx::memory_alignment_v<W>) std::array<int, 4> arr{2, 5, 4, 1};
    auto w = W(&arr[0], stdx::vector_aligned);
    assert(stdx::hmin(w) == 1 and stdx::hmax(w) == 5);
}
```

## See also
- [reduce](/cpp/algorithm/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
