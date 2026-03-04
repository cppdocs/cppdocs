---
title: "std::expected<T,E>::transform_error"
source_path: "cpp/utility/expected/transform_error"
category: "utility"
since: "C++23"
---

If *this contains an unexpected value, invokes f with the unexpected value of *this as the argument and returns a std::expected object that contains an unexpected value, which is initialized with the result of f. Otherwise, returns a std::expected object that represents an expected value.

## Declarations
### Primary template

```cpp
template< class F >
constexpr auto transform_error( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform_error( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform_error( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform_error( F&& f ) const&&;
```
_(since C++23)_

### `void` partial specialization

```cpp
template< class F >
constexpr auto transform_error( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform_error( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform_error( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform_error( F&& f ) const&&;
```
_(since C++23)_

## Parameters
- `f`: a suitable function or Callable object whose call signature returns a non-reference type

## Return value
Returns an `expected` object whose unexpected branch contains the result of invoking `f` on the contained error value. If `*this` contains an expected value, the returned object preserves that success state instead.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3938 | C++23 | the expected value was obtained by value()[1] | changed to **this |
| LWG 3973 | C++23 | the expected value was obtained by **this[2] | changed to val |

## See also
- [or_else](/cpp/utility/expected/or_else/)
- [transform](/cpp/utility/expected/transform/)
