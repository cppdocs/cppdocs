---
title: "std::regex_error::operator="
source_path: "cpp/regex/regex_error/operator"
category: "regex"
since: "C++11"
---

Assigns the contents with those of other. If *this and other both have dynamic type std::regex_error then [std::strcmp](/cpp/string/byte/strcmp/)(what(), other.what()) == 0 after assignment.

## Declarations
```cpp
regex_error& operator=( const regex_error& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: another regex_error object to assign with

## Return value
*this

## Example
This section is incompleteReason: no example
