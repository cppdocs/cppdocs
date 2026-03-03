---
title: "std::bad_exception::operator="
source_path: "cpp/error/bad_exception/operator"
category: "error"
---

Assigns the contents of other. If *this and other both have dynamic type std::exception then [std::strcmp](/cpp/string/byte/strcmp/)(what(), other.what()) == 0 after assignment.(since C++11)

## Declarations
```cpp
bad_exception& operator=( const bad_exception& other ) throw();
```
_(until C++11)_

```cpp
bad_exception& operator=( const bad_exception& other ) noexcept;
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `other`: another bad_exception object to assign

## Return value
*this.
