---
title: "std::error_condition::error_condition"
source_path: "cpp/error/error_condition/error_condition"
category: "error"
since: "C++11"
---

Constructs new error condition.

## Declarations
```cpp
error_condition() noexcept;
```
_(since C++11)_

```cpp
error_condition( int val, const error_category& cat ) noexcept;
```
_(since C++11)_

```cpp
template< class ErrorConditionEnum >
error_condition( ErrorConditionEnum e ) noexcept;
```
_(since C++11)_

```cpp
error_condition( const error_condition& other ) = default;
```
_(since C++11) (implicitly declared)_

```cpp
error_condition( error_condition&& other ) = default;
```
_(since C++11) (implicitly declared)_

## Parameters
- `other`: another error condition to initialize with
- `val`: error value
- `cat`: error category
- `e`: error condition enum

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3629 | C++11 | only std::make_error_condition overloads were used | ADL-found overloads are used |

## See also
- [make_error_condition(std::errc)](/cpp/error/errc/make_error_condition/)
- [make_error_condition(std::io_errc)](/cpp/io/io_errc/make_error_condition/)
- [make_error_condition(std::future_errc)](/cpp/thread/future_errc/make_error_condition/)
