---
title: "std::complex<T>::operator="
source_path: "cpp/numeric/complex/operator"
category: "numeric"
since: "C++20"
---

Assigns new values to the contents.

## Declarations
```cpp
All specializations
```

```cpp
complex& operator=( const complex& cx );
```
_(until C++20)_

```cpp
constexpr complex& operator=( const complex& cx );
```
_(since C++20)_

```cpp
template< class X >
complex& operator=( const std::complex<X>& cx );
```
_(until C++20)_

```cpp
template< class X >
constexpr complex& operator=( const std::complex<X>& cx );
```
_(since C++20)_

```cpp
Primary template complex<T>
```

```cpp
complex& operator=( const T& x );
```
_(until C++20)_

```cpp
constexpr complex& operator=( const T& x );
```
_(since C++20)_

```cpp
Specializations for standard floating-point types complex<F> (until C++23)
```

```cpp
complex& operator=( F x );
```
_(until C++20)_

```cpp
constexpr complex& operator=( F x );
```
_(since C++20) (until C++23)_

## Parameters
- `x`: value to assign
- `cx`: complex value to assign

## Return value
*this

## Notes
The copy assignment operator is required to be [trivial](/cpp/language/as_operator/#Trivial_copy_assignment_operator) since C++23, but implementations generally make it trivial in all modes.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3935 | C++98 | the description of overload (2) was missing | added |

## See also
- [(constructor)](/cpp/numeric/complex/complex/)
- [operator""ifoperator""ioperator""il](/cpp/numeric/complex/operatori/)
- [std::complex](/cpp/numeric/complex/)
