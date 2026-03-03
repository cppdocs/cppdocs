---
title: "std::allocator<T>::address"
source_path: "cpp/memory/allocator/address"
category: "memory"
---

Returns the actual address of x even in presence of overloaded operator&.

## Declarations
```cpp
pointer address( reference x ) const;
```
_(until C++11)_

```cpp
pointer address( reference x ) const noexcept;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

```cpp
const_pointer address( const_reference x ) const;
```
_(until C++11)_

```cpp
const_pointer address( const_reference x ) const noexcept;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Parameters
- `x`: the object to acquire address of

## Return value
The actual address of x.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 634(N2436) | C++98 | the return value is &x(which is affected by overloaded operator&) | returns the actual address of x |
