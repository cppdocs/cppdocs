---
title: "std::experimental::function<R(Args...)>::operator="
source_path: "cpp/experimental/function/operator"
category: "experimental"
---

Assigns a new target to std::experimental::function. In the description below, let ALLOCATOR_OF(f) be the allocator specified in the construction of f, or the value of [std::experimental::pmr::get_default_resource](/cpp/experimental/get_default_resource/)()(until library fundamentals TS v3)the default-constructed [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<> value(library fundamentals TS v3) at the time of construction if no allocator was specified.

## Declarations
```cpp
function& operator=( const function& other );
```
_(library fundamentals TS)_

```cpp
function& operator=( function&& other );
```
_(library fundamentals TS)_

```cpp
function& operator=( std::nullptr_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class F >
function& operator=( F&& f );
```
_(library fundamentals TS)_

```cpp
template< class F >
function& operator=( std::reference_wrapper<F> f );
```
_(library fundamentals TS)_

```cpp
template< class F >
function& operator=( std::reference_wrapper<F> f ) noexcept;
```
_(library fundamentals TS v3)_

## Parameters
- `other`: another std::experimental::function object to copy or move from
- `f`: a callable to initialize the target with

## Return value
*this

## Notes
The move assignment operator may need to allocate storage if get_memory_resource() != other.get_memory_resource()(until library fundamentals TS v3)get_allocator() != other.get_allocator()(library fundamentals TS v3)
