---
title: "std::experimental::simd_cast, std::experimental::static_simd_cast"
source_path: "cpp/experimental/simd/simd_cast"
header: "<experimental/simd>"
category: "experimental"
---

Cast a simd object to another simd object. If V is T, returns simd<T, Abi>; otherwise, if V is a scalar type, returns simd<V, simd_abi::fixed_size<simd<T, Abi>::size()>>. Otherwise, V must be a simd type, and the function returns V.

## Declarations
```cpp
template< class V, class T, class Abi >
/*see below*/ simd_cast( const simd<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class V, class T, class Abi >
/*see below*/ static_simd_cast( const simd<T, Abi>& v ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `v`: the input simd object

## Return value
A simd object with the i-th element initialized to static_cast<To>(v[i]), where To is the output element type as specified.

## Notes
The TS specification is missing simd_cast and static_simd_cast overloads for simd_mask. The libstdc++ implementation provides the missing overloads in the std::experimental::__proposed namespace. If you already use the

shortcut, you might be interested to use

instead. Alternatively, libstdc++ implements a __cvt() member function in simd_mask, which allows implicit conversion of the mask. See also: [https://github.com/VcDevel/std-simd/issues/41](https://github.com/VcDevel/std-simd/issues/41)

## Example
This section is incompleteReason: no example
