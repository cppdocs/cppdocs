---
title: "operator==, !=, <, <=, >, >=, <=>(std::optional)"
source_path: "cpp/utility/optional/operator_cmp"
header: "<optional>"
category: "utility"
since: "C++17"
---

Performs comparison operations on optional objects.

## Declarations
### Compare two optional objects

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

### Compare an optional object with `std::nullopt`

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

### Compare an optional object with a value

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

## Return value
### Comparing two optionals
- `lhs == rhs`: returns `true` if both optionals contain values and the contained values compare equal, or if both optionals are disengaged. Otherwise returns `false`.
- `lhs != rhs`: returns `!(lhs == rhs)`.
- `lhs < rhs`: returns `false` if `rhs` is disengaged, `true` if `lhs` is disengaged and `rhs` is engaged, and otherwise returns `*lhs < *rhs`.
- `lhs <= rhs`: returns `!(rhs < lhs)`.
- `lhs > rhs`: returns `rhs < lhs`.
- `lhs >= rhs`: returns `!(lhs < rhs)`.
- `lhs <=> rhs`: if both optionals are engaged, returns `*lhs <=> *rhs`; otherwise disengaged optionals compare less than engaged optionals, and two disengaged optionals compare equivalent.

### Comparing an optional with `std::nullopt`
- `opt == std::nullopt` and `std::nullopt == opt`: return `true` if `opt` is disengaged and `false` otherwise.
- `opt != std::nullopt` and `std::nullopt != opt`: return `true` if `opt` contains a value and `false` otherwise.
- `opt < std::nullopt`: always returns `false`.
- `std::nullopt < opt`: returns `opt.has_value()`.
- `opt <= std::nullopt`: returns `!opt.has_value()`.
- `std::nullopt <= opt`: always returns `true`.
- `opt > std::nullopt`: returns `opt.has_value()`.
- `std::nullopt > opt`: always returns `false`.
- `opt >= std::nullopt`: always returns `true`.
- `std::nullopt >= opt`: returns `!opt.has_value()`.
- `opt <=> std::nullopt`: returns `std::strong_ordering::greater` if `opt` is engaged, otherwise `std::strong_ordering::equal`.

### Comparing an optional with a value
- `opt == value` and `value == opt`: return `true` if `opt` is engaged and `*opt == value`; otherwise return `false`.
- `opt != value` and `value != opt`: return `!(opt == value)`.
- `opt < value`: returns `true` if `opt` is disengaged, otherwise returns `*opt < value`.
- `value < opt`: returns `false` if `opt` is disengaged, otherwise returns `value < *opt`.
- `opt <= value`: returns `true` if `opt` is disengaged, otherwise returns `*opt <= value`.
- `value <= opt`: returns `false` if `opt` is disengaged, otherwise returns `value <= *opt`.
- `opt > value`: returns `false` if `opt` is disengaged, otherwise returns `*opt > value`.
- `value > opt`: returns `true` if `opt` is disengaged, otherwise returns `value > *opt`.
- `opt >= value`: returns `false` if `opt` is disengaged, otherwise returns `*opt >= value`.
- `value >= opt`: returns `true` if `opt` is disengaged, otherwise returns `value >= *opt`.
- `opt <=> value`: if `opt` is engaged, returns `*opt <=> value`; otherwise returns a negative comparison result equivalent to disengaged optionals being less than ordinary values.


## Exceptions
- The overloads that compare only against `std::nullopt` are `noexcept` and do not throw.
- The other overloads may throw any exception thrown by the selected comparison operation on the contained values.
- For optional-to-optional comparisons, value comparisons are performed only when both operands are engaged.
- For optional-to-value comparisons, value comparisons are performed only when `opt` is engaged.

## Notes
### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_constrained_equality` | `202403L` | C++26 | constrained comparison operators for `std::optional` |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2945 | C++17 | order of template parameters inconsistent for compare-with-T cases | made consistent |
