---
title: "operator==, !=, <, <=, >, >=(std::experimental::optional)"
source_path: "cpp/experimental/optional/operator_cmp"
header: "<experimental/optional>"
category: "experimental"
---

Performs comparison operations on optional objects.

## Declarations
```cpp
Compare two optional objects
```

```cpp
template< class T >
constexpr bool operator==( const optional<T>& lhs, const optional<T>& rhs );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator!=( const optional<T>& lhs, const optional<T>& rhs );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<( const optional<T>& lhs, const optional<T>& rhs );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<=( const optional<T>& lhs, const optional<T>& rhs );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>( const optional<T>& lhs, const optional<T>& rhs );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>=( const optional<T>& lhs, const optional<T>& rhs );
```
_(library fundamentals TS)_

```cpp
Compare an optional object with a nullopt
```

```cpp
template< class T >
constexpr bool operator==( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator==( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator!=( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator!=( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<=( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<=( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>=( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>=( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(library fundamentals TS)_

```cpp
Compare an optional object with a T
```

```cpp
template< class T >
constexpr bool operator==( const optional<T>& opt, const T& value );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator==( const T& value, const optional<T>& opt );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator!=( const optional<T>& opt, const T& value );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator!=( const T& value, const optional<T>& opt );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<( const optional<T>& opt, const T& value );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<( const T& value, const optional<T>& opt );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<=( const optional<T>& opt, const T& value );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator<=( const T& value, const optional<T>& opt );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>( const optional<T>& opt, const T& value );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>( const T& value, const optional<T>& opt );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>=( const optional<T>& opt, const T& value );
```
_(library fundamentals TS)_

```cpp
template< class T >
constexpr bool operator>=( const T& value, const optional<T>& opt );
```
_(library fundamentals TS)_

## Parameters
- `lhs, rhs, opt`: an optional object to compare
- `value`: value to compare to the contained value
