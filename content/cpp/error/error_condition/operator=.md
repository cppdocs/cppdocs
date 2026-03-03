---
title: "std::error_condition::operator="
source_path: "cpp/error/error_condition/operator"
category: "error"
since: "C++11"
---

Assigns contents to an error condition.

## Declarations
```cpp
template< class ErrorConditionEnum >
error_condition& operator=( ErrorConditionEnum e ) noexcept;
```
_(since C++11)_

```cpp
error_condition& operator=( const error_condition& other ) = default;
```
_(since C++11) (implicitly declared)_

```cpp
error_condition& operator=( error_condition&& other ) = default;
```
_(since C++11) (implicitly declared)_

## Parameters
- `e`: error condition enum
- `other`: another error condition to assign with

## Return value
*this.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3629 | C++11 | only std::make_error_condition overloads were used | ADL-found overloads are used |
