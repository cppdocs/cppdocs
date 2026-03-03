---
title: "std::make_exception_ptr"
source_path: "cpp/error/make_exception_ptr"
header: "<exception>"
category: "error"
---

Creates an [std::exception_ptr](/cpp/error/exception_ptr/) that holds a reference to a copy of e. This is done as if executing the following code:

## Declarations
```cpp
template< class E >
std::exception_ptr make_exception_ptr( E e ) noexcept;
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `e`: exception object to create a reference to the copy of

## Return value
An instance of [std::exception_ptr](/cpp/error/exception_ptr/) holding a reference to the copy of e, or to an instance of [std::bad_alloc](/cpp/memory/new/bad_alloc/) or to an instance of [std::bad_exception](/cpp/error/bad_exception/) (see [std::current_exception](/cpp/error/current_exception/)).

## Notes
The parameter is passed by value and is subject to slicing.

## Example
This section is incompleteReason: no example

## See also
- [current_exception](/cpp/error/current_exception/)
- [std::exception_ptr](/cpp/error/exception_ptr/)
