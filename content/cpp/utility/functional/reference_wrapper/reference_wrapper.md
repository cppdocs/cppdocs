---
title: "std::reference_wrapper<T>::reference_wrapper"
source_path: "cpp/utility/functional/reference_wrapper/reference_wrapper"
category: "utility"
---

Constructs a new reference wrapper.

## Declarations
```cpp
template< class U >
reference_wrapper( U&& x ) noexcept(/*see below*/) ;
```
_(since C++11) (constexpr since C++20)_

```cpp
reference_wrapper( const reference_wrapper& other ) noexcept;
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `x`: an object to wrap
- `other`: another reference wrapper

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2993 | C++11 | deleted reference_wrapper(T&&) constructor interferes with overload resolution in some cases | replaced with a constructor template |
