---
title: "operator==,!=,<,<=,>,>=(std::experimental::observer_ptr)"
source_path: "cpp/experimental/observer_ptr/operator_cmp"
category: "experimental"
---

Compares the pointer values of two observer_ptrs, or an observer_ptr and nullptr.

## Declarations
```cpp
template< class W1, class W2 >
bool operator==( const observer_ptr<W1>& p1, const observer_ptr<W2>& p2 );
```
_(library fundamentals TS v2)_

```cpp
template< class W1, class W2 >
bool operator!=( const observer_ptr<W1>& p1, const observer_ptr<W2>& p2 );
```
_(library fundamentals TS v2)_

```cpp
template< class W >
bool operator==( const observer_ptr<W>& p, std::nullptr_t ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
template< class W >
bool operator==( std::nullptr_t, const observer_ptr<W>& p ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
template< class W >
bool operator!=( const observer_ptr<W>& p, std::nullptr_t ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
template< class W >
bool operator!=( std::nullptr_t, const observer_ptr<W>& p ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
template< class W1, class W2 >
bool operator<( const observer_ptr<W1>& p1, const observer_ptr<W2>& p2 );
```
_(library fundamentals TS v2)_

```cpp
template< class W1, class W2 >
bool operator>( const observer_ptr<W1>& p1, const observer_ptr<W2>& p2 );
```
_(library fundamentals TS v2)_

```cpp
template< class W1, class W2 >
bool operator<=( const observer_ptr<W1>& p1, const observer_ptr<W2>& p2 );
```
_(library fundamentals TS v2)_

```cpp
template< class W1, class W2 >
bool operator>=( const observer_ptr<W1>& p1, const observer_ptr<W2>& p2 );
```
_(library fundamentals TS v2)_

## Parameters
- `p, p1, p2`: observer_ptrs to compare
