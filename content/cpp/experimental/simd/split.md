---
title: "std::experimental::split, split_by"
source_path: "cpp/experimental/simd/split"
header: "<experimental/simd>"
category: "experimental"
---

Splits the input simd or simd_mask object into multiple simd or simd_mask objects.

## Declarations
```cpp
template< std::size_t... Sizes, class T, class Abi >
std::tuple<simd<T, simd_abi::deduce_t<T, Sizes>>...>
split( const simd<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< std::size_t... Sizes, class T, class Abi >
std::tuple<simd_mask<T, simd_abi::deduce_t<T, Sizes>>...>
split( const simd_mask<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class V, class Abi >
std::array<V, simd_size_v<typename V::value_type, Abi> / V::size()>
split( const simd<typename V::value_type, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class V, class Abi >
std::array<V, simd_size_v<typename V::value_type, Abi> / V::size()>
split( const simd_mask<typename V::value_type, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< size_t N, class T, class A >
array<resize_simd<simd_size_v<T, A> / N, simd<T, A>>, N>
split_by( const simd<T, A>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< size_t N, class T, class A >
array<resize_simd<simd_size_v<T, A> / N, simd_mask<T, A>>, N>
split_by( const simd_mask<T, A>& v ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `v`: the input simd or simd_mask object

## Example
This section is incompleteReason: no example
