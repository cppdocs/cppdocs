---
title: "std::experimental::to_fixed_size, std::experimental::to_native, std::experimental::to_compatible"
source_path: "cpp/experimental/simd/abi_cast"
header: "<experimental/simd>"
category: "experimental"
---

Returns a simd or simd_mask object with the same elements, but a different ABI.

## Declarations
```cpp
template< class T, class Abi >
fixed_size_simd<T, simd_size_v<T, Abi>>
to_fixed_size( const simd<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, class Abi >
fixed_size_simd_mask<T, simd_size_v<T, Abi>>
to_fixed_size( const simd_mask<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, std::size_t N >
native_simd<T>
to_native( const fixed_size_simd<T, N>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, std::size_t N >
native_simd_mask<T>
to_native( const fixed_size_simd_mask<T, N>>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, std::size_t N >
simd<T>
to_compatible( const fixed_size_simd<T, N>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class T, std::size_t N >
simd_mask<T>
to_compatible( const fixed_size_simd_mask<T, N>& v ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `v`: the input simd or simd_mask object

## Return value
The simd or simd_mask object with the specified ABI.

## Example
This section is incompleteReason: no example
