---
title: "std::expected<T,E>::operator="
source_path: "cpp/utility/expected/operator"
category: "utility"
since: "C++23"
---

Assigns a new value to an existing expected object.

## Declarations
```cpp
Primary template
```

```cpp
constexpr expected& operator=( const expected& other );
```
_(since C++23)_

```cpp
constexpr expected& operator=( expected&& other )
noexcept(/* see below */);
```
_(since C++23)_

```cpp
template< class U = T >
constexpr expected& operator=( U&& v );
```
_(since C++23)_

```cpp
template< class G >
constexpr expected& operator=( const std::unexpected<G>& e );
```
_(since C++23)_

```cpp
template< class G >
constexpr expected& operator=( std::unexpected<G>&& e );
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
constexpr expected& operator=( const expected& other );
```
_(since C++23)_

```cpp
constexpr expected& operator=( expected&& other )
noexcept(/* see below */);
```
_(since C++23)_

```cpp
template< class G >
constexpr expected& operator=( const std::unexpected<G>& e );
```
_(since C++23)_

```cpp
template< class G >
constexpr expected& operator=( std::unexpected<G>&& e );
```
_(since C++23)_

```cpp
Helper function template
```

```cpp
template< class T, class U, class... Args >
constexpr void reinit-expected( T& newval, U& oldval, Args&&... args )
```
_(since C++23) (exposition only*)_

## Parameters
- `other`: another expected object whose contained value to assign
- `v`: value to assign to the contained value
- `e`: std::unexpected object whose contained value to assign
- `newval`: the contained value to be constructed
- `oldval`: the contained value to be destroyed
- `args`: the arguments used as initializers of newval

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4025 | C++23 | overload (7) was defined as deleted if E is notmove constructible or not move assignable | it does not participate inoverload resolution in this case |

## See also
- [emplace](/cpp/utility/expected/emplace/)
