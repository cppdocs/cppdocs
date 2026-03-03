---
title: "operator==, !=, <, <=, >, >=, <=>(std::optional)"
source_path: "cpp/utility/optional/operator_cmp"
header: "<optional>"
category: "utility"
since: "C++17"
---

Performs comparison operations on optional objects.

## Declarations
```cpp
Compare two optional objects
```

```cpp
template< class T, class U >
constexpr bool operator==( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator!=( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator<( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator<=( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator>( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator>=( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++17)_

```cpp
template< class T, std::three_way_comparable_with<T> U >
constexpr std::compare_three_way_result_t<T, U>
operator<=>( const optional<T>& lhs, const optional<U>& rhs );
```
_(since C++20)_

```cpp
Compare an optional object with a nullopt
```

```cpp
template< class T >
constexpr bool operator==( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++17)_

```cpp
template< class T >
constexpr bool operator==( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator!=( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator!=( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator<( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator<( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator<=( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator<=( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator>( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator>( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator>=( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr bool operator>=( std::nullopt_t, const optional<T>& opt ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class T >
constexpr std::strong_ordering
operator<=>( const optional<T>& opt, std::nullopt_t ) noexcept;
```
_(since C++20)_

```cpp
Compare an optional object with a value
```

```cpp
template< class T, class U >
constexpr bool operator==( const optional<T>& opt, const U& value );
```
_(since C++17)_

```cpp
template< class U, class T >
constexpr bool operator==( const U& value, const optional<T>& opt );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator!=( const optional<T>& opt, const U& value );
```
_(since C++17)_

```cpp
template< class U, class T >
constexpr bool operator!=( const U& value, const optional<T>& opt );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator<( const optional<T>& opt, const U& value );
```
_(since C++17)_

```cpp
template< class U, class T >
constexpr bool operator<( const U& value, const optional<T>& opt );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator<=( const optional<T>& opt, const U& value );
```
_(since C++17)_

```cpp
template< class U, class T >
constexpr bool operator<=( const U& value, const optional<T>& opt );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator>( const optional<T>& opt, const U& value );
```
_(since C++17)_

```cpp
template< class U, class T >
constexpr bool operator>( const U& value, const optional<T>& opt );
```
_(since C++17)_

```cpp
template< class T, class U >
constexpr bool operator>=( const optional<T>& opt, const U& value );
```
_(since C++17)_

```cpp
template< class U, class T >
constexpr bool operator>=( const U& value, const optional<T>& opt );
```
_(since C++17)_

```cpp
template< class T, std::three_way_comparable_with<T> U >
constexpr std::compare_three_way_result_t<T, U>
operator<=>( const optional<T>& opt, const U& value );
```
_(since C++20)_

## Parameters
- `lhs, rhs, opt`: an optional object to compare
- `value`: value to compare to the contained value

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constrained_equality
202403L
(C++26)
constrained comparison operators for std::optional

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2945 | C++17 | order of template parameters inconsistent for compare-with-T cases | made consistent |
