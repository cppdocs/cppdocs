---
title: "std::make_error_condition(std::errc)"
source_path: "cpp/error/errc/make_error_condition"
header: "<system_error>"
category: "error"
since: "C++11"
---

Creates an error condition for an errc value e. Sets the error value to int(e) and error category to [std::generic_category](/cpp/error/generic_category/).

## Declarations
```cpp
std::error_condition make_error_condition( std::errc e ) noexcept;
```
_(since C++11)_

## Parameters
- `e`: standard error value

## Return value
Error condition for e.

## Example
```cpp
#include <iostream>
#include <string>
#include <system_error>
 
int main()
{
    auto err = std::make_error_condition(std::errc::invalid_argument);
    std::cout << err.message() << '\n';
}
```
