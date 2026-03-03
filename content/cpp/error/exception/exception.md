---
title: "std::exception::exception"
source_path: "cpp/error/exception/exception"
category: "error"
---

Constructs new exception object.

## Declarations
```cpp
exception() throw();
```
_(until C++11)_

```cpp
exception() noexcept;
```
_(since C++11) (constexpr since C++26)_

```cpp
exception( const exception& other ) throw();
```
_(until C++11)_

```cpp
exception( const exception& other ) noexcept;
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `other`: another exception to assign the contents of

## Notes
Because copying std::exception is not permitted to throw exceptions, when derived classes (such as [std::runtime_error](/cpp/error/runtime_error/)) have to manage a user-defined diagnostic message, it is typically implemented as a copy-on-write string.

The Microsoft implementation includes non-standard constructors taking strings thus allowing instances to be thrown directly with a meaningful error message. The nearest standard equivalents are [std::runtime_error](/cpp/error/runtime_error/) or [std::logic_error](/cpp/error/logic_error/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 471 | C++98 | there is no requirement on what() of the exception copy | added |
