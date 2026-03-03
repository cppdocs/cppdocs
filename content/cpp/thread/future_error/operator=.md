---
title: "std::future_error::operator="
source_path: "cpp/thread/future_error/operator"
category: "thread"
since: "C++11"
---

Assigns the contents with those of other. If *this and other both have dynamic type std::future_error then [std::strcmp](/cpp/string/byte/strcmp/)(what(), other.what()) == 0 after assignment.

## Declarations
```cpp
future_error& operator=( const future_error& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: another future_error object to assign with

## Return value
*this

## Example
This section is incompleteReason: no example
