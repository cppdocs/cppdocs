---
title: "std::experimental::simd<T,Abi>::operator+,-,*,/,%,&,|,^,<<,>>"
source_path: "cpp/experimental/simd/simd/operator"
category: "experimental"
aliases:
  - "/cpp/experimental/simd/simd/operator/"
---

Applies the given binary operator element-wise to each corresponding element of the operands. Returns a [simd](/cpp/experimental/simd/simd/) such that for all i in the range of [0,[size()](/cpp/experimental/simd/simd/size/)) the ith element is equal to:

## Declarations
```cpp
friend simd operator+( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator-( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator*( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator/( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator%( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator&( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator|( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator^( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator<<( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator<<( const simd& lhs, int n ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator>>( const simd& lhs, const simd& rhs ) noexcept;
```
_(parallelism TS v2)_

```cpp
friend simd operator>>( const simd& lhs, int n ) noexcept;
```
_(parallelism TS v2)_

## Parameters
- `lhs`: left operands
- `rhs`: right operands
- `n`: number of bits to shift each element in lhs

## Return value
A [simd](/cpp/experimental/simd/simd/) as described above.

## Example
This section is incompleteReason: no example

## See also
- [operator+= operator-= operator*= operator/= operator%= operator&= operator|= operator^= operator<<= operator>>=](/cpp/experimental/simd/simd/operator_compound/)
