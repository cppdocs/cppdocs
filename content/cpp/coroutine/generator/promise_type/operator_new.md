---
title: "std::generator<Ref,V,Allocator>::promise_type::operator new"
source_path: "cpp/coroutine/generator/promise_type/operator"
category: "coroutine"
since: "C++23"
---

[Allocates](/cpp/language/coroutines/#Dynamic_allocation) size bytes of uninitialized storage using default or user-provided allocator.

## Declarations
```cpp
void* operator new( std::size_t size )
requires std::same_as<Allocator, void> ||
std::default_initializable<Allocator>;
```
_(since C++23)_

```cpp
template< class Alloc, class... Args >
void* operator new( std::size_t size, std::allocator_arg_t,
const Alloc& alloc, const Args&... );
```
_(since C++23)_

```cpp
template< class This, class Alloc, class... Args >
void* operator new( std::size_t size, const This&, std::allocator_arg_t,
const Alloc& alloc, const Args&... );
```
_(since C++23)_

## Parameters
- `size`: the size of the storage to allocate
- `alloc`: a user provided allocator of type Alloc

## Return value
A pointer to the allocated storage.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3900 | C++23 | overloads (2,3) were constrained on conversion of Alloc to Allocator | mandated |
