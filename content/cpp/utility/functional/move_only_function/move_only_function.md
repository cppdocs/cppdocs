---
title: "std::move_only_function::move_only_function"
source_path: "cpp/utility/functional/move_only_function/move_only_function"
category: "utility"
since: "C++23"
---

Creates a new std::move_only_function.

## Declarations
```cpp
move_only_function() noexcept;
```
_(since C++23)_

```cpp
move_only_function( std::nullptr_t ) noexcept;
```
_(since C++23)_

```cpp
move_only_function( move_only_function&& other ) noexcept;
```
_(since C++23)_

```cpp
move_only_function( const move_only_function& ) = delete;
```
_(since C++23)_

```cpp
template< class F >
move_only_function( F&& f );
```
_(since C++23)_

```cpp
template< class T, class... CArgs >
explicit move_only_function( std::in_place_type_t<T>, CArgs&&... args );
```
_(since C++23)_

```cpp
template< class T, class U, class... CArgs >
explicit move_only_function( std::in_place_type_t<T>,
std::initializer_list<U> il, CArgs&&... args );
```
_(since C++23)_

## Parameters
- `other`: another std::move_only_function to move from
- `f`: a function or a Callable object to wrap
- `args`: arguments to construct the target object
- `il`: std::initializer_list to construct the target object

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/utility/functional/function/function/)
- [(constructor)](/cpp/utility/functional/copyable_function/copyable_function/)
