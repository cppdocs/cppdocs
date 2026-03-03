---
title: "std::generic_category"
source_path: "cpp/error/generic_category"
header: "<system_error>"
category: "error"
since: "C++11"
---

Obtains a reference to the static error category object for generic errors. The object is required to override the virtual function error_category::name() to return a pointer to the string "generic". It is used to identify error conditions that correspond to the POSIX [errno](/cpp/error/errno/) codes.

## Declarations
```cpp
const std::error_category& generic_category() noexcept;
```
_(since C++11)_

## Return value
A reference to the static object of unspecified runtime type, derived from [std::error_category](/cpp/error/error_category/).

## Example
```cpp
#include <cerrno>
#include <iostream>
#include <string>
#include <system_error>
 
int main()
{
    std::error_condition econd = std::generic_category().default_error_condition(EDOM);
    std::cout << "Category: " << econd.category().name() << '\n'
              << "Value: " << econd.value() << '\n'
              << "Message: " << econd.message() << '\n';
}
```

## See also
- [system_category](/cpp/error/system_category/)
- [errc](/cpp/error/errc/)
- [std::error_condition](/cpp/error/error_condition/)
- [<cerrno>](/cpp/header/cerrno/)
