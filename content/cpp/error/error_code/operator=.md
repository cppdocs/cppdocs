---
title: "std::error_code::operator="
source_path: "cpp/error/error_code/operator"
category: "error"
since: "C++11"
---

1) Replaces the error code and corresponding category with those representing error code enum e.
Equivalent to *this = make_error_code(e), where make_error_code is only found by [argument-dependent lookup](/cpp/language/adl/).
This overload participates in overload resolution only if [std::is_error_code_enum](/cpp/error/error_code/is_error_code_enum/)<ErrorCodeEnum>::value is true.

## Declarations
```cpp
template< class ErrorCodeEnum >
error_code& operator=( ErrorCodeEnum e ) noexcept;
```
_(since C++11)_

```cpp
error_code& operator=( const error_code& other ) = default;
```
_(since C++11) (implicitly declared)_

```cpp
error_code& operator=( error_code&& other ) = default;
```
_(since C++11) (implicitly declared)_

## Parameters
- `e`: error code enum to construct
- `other`: another error code to assign with

## Return value
*this

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3629 | C++11 | only std::make_error_code overloads were used | ADL-found overloads are used |

## See also
- [assign](/cpp/error/error_code/assign/)
