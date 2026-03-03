---
title: "operator==,!=,<,<=,>,>=(std::experimental::propagate_const)"
source_path: "cpp/experimental/propagate_const/operator_cmp"
category: "experimental"
---

Compares the wrapped pointers of two propagate_consts, or between a propagate_const and nullptr, or between a propagate_const and another object.

## Declarations
```cpp
template< class T >
constexpr bool operator==( const propagate_const<T>& pt, nullptr_t );
```
_(library fundamentals TS v2)_

```cpp
template< class T >
constexpr bool operator==( nullptr_t, const propagate_const<T>& pt );
```
_(library fundamentals TS v2)_

```cpp
template< class T >
constexpr bool operator!=( const propagate_const<T>& pt, nullptr_t );
```
_(library fundamentals TS v2)_

```cpp
template< class T >
constexpr bool operator!=( nullptr_t, const propagate_const<T>& pt );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator==( const propagate_const<T>& pt, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator!=( const propagate_const<T>& pt, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator<( const propagate_const<T>& pt, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator>( const propagate_const<T>& pt, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator<=( const propagate_const<T>& pt, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator>=( const propagate_const<T>& pt, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator==( const propagate_const<T>& pt, const U& u );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator!=( const propagate_const<T>& pt, const U& u );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator==( const T& t, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator!=( const T& t, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator<( const propagate_const<T>& pt, const U& u );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator>( const propagate_const<T>& pt, const U& u );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator<=( const propagate_const<T>& pt, const U& u );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator>=( const propagate_const<T>& pt, const U& u );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator<( const T& t, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator>( const T& t, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator<=( const T& t, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class T, class U >
constexpr bool operator>=( const T& t, const propagate_const<U>& pu );
```
_(library fundamentals TS v2)_

## Parameters
- `pt, pu`: propagate_consts to compare
- `t, u`: other objects to compare

## Return value
Let t_ denote the underlying pointer-like object wrapped by a propagate_const.
