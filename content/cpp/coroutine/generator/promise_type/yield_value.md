---
title: "std::generator<Ref,V,Allocator>::promise_type::yield_value"
source_path: "cpp/coroutine/generator/promise_type/yield_value"
category: "coroutine"
since: "C++23"
---

An implementation of coroutine interface functions used internally to support operator co_yield.

## Declarations
```cpp
std::suspend_always yield_value( yielded val ) noexcept;
```
_(since C++23)_

```cpp
auto yield_value( const std::remove_reference_t<yielded>& lval )
requires std::is_rvalue_reference_v<yielded> &&
std::constructible_from<std::remove_cvref_t<yielded>,
const std::remove_reference_t<yielded>&>;
```
_(since C++23)_

```cpp
template< class R2, class V2, class Alloc2, class Unused >
requires std::same_as<typename std::generator<T2, V2, Alloc2>::yielded,
yielded>
auto yield_value( ranges::elements_of<std::generator<T2, V2, Alloc2>&&,
Unused> g ) noexcept;
```
_(since C++23)_

```cpp
template< class R2, class V2, class Alloc2, class Unused >
requires std::same_as<typename std::generator<T2, V2, Alloc2>::yielded,
yielded>
auto yield_value( ranges::elements_of<std::generator<T2, V2, Alloc2>&,
Unused> g ) noexcept;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
requires std::convertible_to<ranges::range_reference_t<R>, yielded>
auto yield_value( ranges::elements_of<R, Alloc> r );
```
_(since C++23)_

## Parameters
- `val`: a value which is a result of the yield-expression evaluation
- `lval`: an lvalue which is a result of the yield-expression evaluation
- `g`: a range of elements produced by a generator
- `r`: a range of elements

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3899 | C++23 | yield_value on a range of elements produced by lvalue generatorused generic elements_of overload | used special elements_of overload for such generators |
| LWG 4119 | C++23 | range_value_t in generator's template argument as partof the return type of nested in (5) may be ill-formed | used void |
