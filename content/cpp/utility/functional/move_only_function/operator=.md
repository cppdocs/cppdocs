---
title: "std::move_only_function::operator="
source_path: "cpp/utility/functional/move_only_function/operator"
category: "utility"
since: "C++23"
---

Assigns a new target to std::move_only_function or destroys its target.

## Declarations
```cpp
move_only_function& operator=( move_only_function&& other );
```
_(since C++23)_

```cpp
move_only_function& operator=( const move_only_function& ) = delete;
```
_(since C++23)_

```cpp
move_only_function& operator=( std::nullptr_t ) noexcept;
```
_(since C++23)_

```cpp
template< class F >
move_only_function& operator=( F&& f );
```
_(since C++23)_

## Parameters
- `other`: another std::move_only_function object to move the target of
- `f`: a callable object to initialize the new target with

## Return value
*this

## Notes
It is intentional not to require the move assignment operator to be noexcept to leave room for an allocator-aware move_only_function in future.

move_only_function can be assigned from [std::in_place_type](/cpp/utility/in_place/)<Fn> given it can be constructed from that argument.

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/utility/functional/function/operator/)
