---
title: "operator==,!=(std::allocator)"
source_path: "cpp/memory/allocator/operator_cmp"
category: "memory"
since: "C++20"
---

Compares two default allocators. Since default allocators are stateless, two default allocators are always equal.

## Declarations
```cpp
template< class T1, class T2 >
bool operator==( const allocator<T1>& lhs, const allocator<T2>& rhs ) throw();
```
_(until C++11)_

```cpp
template< class T1, class T2 >
bool operator==( const allocator<T1>& lhs, const allocator<T2>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T1, class T2 >
constexpr bool
operator==( const allocator<T1>& lhs, const allocator<T2>& rhs ) noexcept;
```
_(since C++20)_

```cpp
template< class T1, class T2 >
bool operator!=( const allocator<T1>& lhs, const allocator<T2>& rhs ) throw();
```
_(until C++11)_

```cpp
template< class T1, class T2 >
bool operator!=( const allocator<T1>& lhs, const allocator<T2>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: default allocators to compare
