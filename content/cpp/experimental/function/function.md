---
title: "std::experimental::function<R(Args...)>::function"
source_path: "cpp/experimental/function/function"
category: "experimental"
---

Constructs a std::experimental::function from a variety of sources.

## Declarations
```cpp
function() noexcept;
```
_(library fundamentals TS)_

```cpp
function( std::nullptr_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
function( const function& other );
```
_(library fundamentals TS)_

```cpp
function( function&& other );
```
_(library fundamentals TS)_

```cpp
template< class F >
function( F f );
```
_(library fundamentals TS)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc ) noexcept;
```
_(library fundamentals TS)_

```cpp
function( std::allocator_arg_t,
const allocator_type& alloc ) noexcept;
```
_(library fundamentals TS v3)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc,
std::nullptr_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
function( std::allocator_arg_t, const allocator_type& alloc,
std::nullptr_t ) noexcept;
```
_(library fundamentals TS v3)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc,
const function& other );
```
_(library fundamentals TS)_

```cpp
function( std::allocator_arg_t, const allocator_type& alloc,
const function& other );
```
_(library fundamentals TS v3)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc,
function&& other );
```
_(library fundamentals TS)_

```cpp
function( std::allocator_arg_t, const allocator_type& alloc,
function&& other );
```
_(library fundamentals TS v3)_

```cpp
template< class F, class Alloc >
function( std::allocator_arg_t, const Alloc& alloc, F f );
```
_(library fundamentals TS)_

```cpp
function( std::allocator_arg_t, const allocator_type& alloc, F f );
```
_(library fundamentals TS v3)_

## Parameters
- `other`: the function object used to initialize *this
- `f`: a callable used to initialize *this
- `alloc`: an allocator used for internal memory allocation

## Example
This section is incompleteReason: no example
