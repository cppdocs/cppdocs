---
title: "std::expected<T,E>::or_else"
source_path: "cpp/utility/expected/or_else"
category: "utility"
since: "C++23"
---

If *this contains an unexpected value, invokes f with the unexpected value of *this as the argument and returns its result. Otherwise, returns a std::expected object that represents an expected value.

## Declarations
### Primary template

```cpp
template< class F >
constexpr auto or_else( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto or_else( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto or_else( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto or_else( F&& f ) const&&;
```
_(since C++23)_

### `void` partial specialization

```cpp
template< class F >
constexpr auto or_else( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto or_else( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto or_else( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto or_else( F&& f ) const&&;
```
_(since C++23)_

## Parameters
- `f`: a suitable function or Callable object that returns a std::expected

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_expected
202211L
(C++23)
Monadic functions for std::expected

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3938 | C++23 | the expected value was obtained by value()[1] | changed to **this |
| LWG 3973 | C++23 | the expected value was obtained by **this[2] | changed to val |

## See also
- [transform_error](/cpp/utility/expected/transform_error/)
