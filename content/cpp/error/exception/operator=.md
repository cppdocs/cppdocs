---
title: "std::exception::operator="
source_path: "cpp/error/exception/operator"
category: "error"
---

Copy assignment operator. Assigns the contents of other.

## Declarations
```cpp
exception& operator=( const exception& other ) throw();
```
_(until C++11)_

```cpp
exception& operator=( const exception& other ) noexcept;
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `other`: another exception to assign the contents of

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 471 | C++98 | the effects of calling what() afterassignment are implementation-defined | required to be the same as the originalwhat() if the dynamic types are the same |
