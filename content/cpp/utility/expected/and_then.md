---
title: "std::expected<T,E>::and_then"
source_path: "cpp/utility/expected/and_then"
category: "utility"
since: "C++23"
---

If *this represents an expected value, invokes f and returns its result. Otherwise, returns a std::expected object that contains an unexpected value, which is initialized with the unexpected value of *this.

## Declarations
```cpp
Main template
```

```cpp
template< class F >
constexpr auto and_then( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) const&&;
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
template< class F >
constexpr auto and_then( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) const&&;
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

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3938 | C++23 | the expected value was obtained by value()[1] | changed to **this |
| LWG 3973 | C++23 | the expected value was obtained by **this[2] | changed to val |

## See also
- [unexpectunexpect_t](/cpp/utility/expected/unexpect_t/)
- [transform](/cpp/utility/expected/transform/)
