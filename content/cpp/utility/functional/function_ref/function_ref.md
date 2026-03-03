---
title: "std::function_ref::function_ref"
source_path: "cpp/utility/functional/function_ref/function_ref"
category: "utility"
since: "C++26"
---

Creates a new std::function_ref.

## Declarations
```cpp
template< class F >
function_ref( F* f ) noexcept;
```
_(since C++26)_

```cpp
template< class F >
function_ref( F&& f ) noexcept;
```
_(since C++26)_

```cpp
template< auto f >
function_ref( std::nontype_t<f> ) noexcept;
```
_(since C++26)_

```cpp
template< auto f, class U >
function_ref( std::nontype_t<f>, U&& obj ) noexcept;
```
_(since C++26)_

```cpp
template< auto f, class T >
function_ref( std::nontype_t<f>, /*cv*/ T* obj ) noexcept;
```
_(since C++26)_

```cpp
function_ref( const function_ref& other ) = default;
```
_(since C++26)_

## Parameters
- `other`: another function_ref to copy from
- `f`: a function or a Callable object to wrap
- `obj`: an object or pointer to bound

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/utility/functional/move_only_function/move_only_function/)
