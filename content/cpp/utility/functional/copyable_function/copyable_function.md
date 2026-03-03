---
title: "std::copyable_function::copyable_function"
source_path: "cpp/utility/functional/copyable_function/copyable_function"
category: "utility"
since: "C++26"
---

Creates a new std::copyable_function.

## Declarations
```cpp
copyable_function() noexcept;
```
_(since C++26)_

```cpp
copyable_function( std::nullptr_t ) noexcept;
```
_(since C++26)_

```cpp
copyable_function( const copyable_function& other );
```
_(since C++26)_

```cpp
copyable_function( copyable_function&& other ) noexcept;
```
_(since C++26)_

```cpp
template< class F >
copyable_function( F&& f );
```
_(since C++26)_

```cpp
template< class T, class... CArgs >
explicit copyable_function( std::in_place_type_t<T>, CArgs&&... args );
```
_(since C++26)_

```cpp
template< class T, class U, class... CArgs >
explicit copyable_function( std::in_place_type_t<T>,
std::initializer_list<U> il, CArgs&&... args );
```
_(since C++26)_

## Parameters
- `other`: another std::copyable_function to copy or move from
- `f`: a function or a Callable object to wrap
- `args`: arguments to construct the target object
- `il`: std::initializer_list to construct the target object

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/utility/functional/function/function/)
- [(constructor)](/cpp/utility/functional/move_only_function/move_only_function/)
