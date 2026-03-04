---
title: "std::expected<T,E>::transform"
source_path: "cpp/utility/expected/transform"
category: "utility"
since: "C++23"
---

If *this represents an expected value, invokes f and returns a std::expected object that contains an expected value, which is initialized with its result (or value-initialized if the result type is void). Otherwise, returns a std::expected object that contains an unexpected value, which is initialized with the unexpected value of *this.

## Declarations
### Primary template

```cpp
template< class F >
constexpr auto transform( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) const&&;
```
_(since C++23)_

### `void` partial specialization

```cpp
template< class F >
constexpr auto transform( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) const&&;
```
_(since C++23)_

## Parameters
- `f`: a suitable function or Callable object whose call signature returns a non-reference type

## Return value
Returns an `expected` object whose success branch contains the result of invoking `f` on the contained value, or a value-initialized success state if the result type is `void`. If `*this` contains an unexpected value, the returned object propagates that unexpected value instead.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3938 | C++23 | the expected value was obtained by value()[1] | changed to **this |
| LWG 3973 | C++23 | the expected value was obtained by **this[2] | changed to val |

## See also
- [transform_error](/cpp/utility/expected/transform_error/)
