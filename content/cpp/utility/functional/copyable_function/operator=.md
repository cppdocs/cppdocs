---
title: "std::copyable_function::operator="
source_path: "cpp/utility/functional/copyable_function/operator"
category: "utility"
since: "C++26"
---

Assigns a new target to std::copyable_function or destroys its target.

## Declarations
```cpp
copyable_function& operator=( const copyable_function& other );
```
_(since C++26)_

```cpp
copyable_function& operator=( copyable_function&& other );
```
_(since C++26)_

```cpp
copyable_function& operator=( std::nullptr_t ) noexcept;
```
_(since C++26)_

```cpp
template< class F >
copyable_function& operator=( F&& f );
```
_(since C++26)_

## Parameters
- `other`: another std::copyable_function object to copy or move the target of
- `f`: a callable object to initialize the new target with

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/utility/functional/function/operator/)
- [operator=](/cpp/utility/functional/move_only_function/operator/)
