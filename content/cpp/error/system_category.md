---
title: "std::system_category"
source_path: "cpp/error/system_category"
header: "<system_error>"
category: "error"
since: "C++11"
---

Obtains a reference to the static error category object for errors reported by the operating system. The object is required to override the virtual function [std::error_category::name()](/cpp/error/error_category/name/) to return a pointer to the string "system". It is also required to override the virtual function [std::error_category::default_error_condition()](/cpp/error/error_category/default_error_condition/) to map the error codes that match POSIX [errno](/cpp/error/errno/) values to [std::generic_category](/cpp/error/generic_category/).

## Declarations
```cpp
const std::error_category& system_category() noexcept;
```
_(since C++11)_

## Return value
A reference to the static object of unspecified runtime type, derived from [std::error_category](/cpp/error/error_category/).

## Notes
On Windows, system_category() typically maps some [Windows error codes](https://learn.microsoft.com/en-us/windows/win32/debug/system-error-codes#system-error-codes) to POSIX ones. On POSIX, system_category() tends to be equivalent to [std::generic_category()](/cpp/error/generic_category/) except for the name.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <system_error>
 
int main()
{
    for (int const code : {EDOM, 10001})
    {
        const std::error_condition econd =
            std::system_category().default_error_condition(code);
 
        std::cout << "Category: " << econd.category().name() << '\n'
                  << "Value:    " << econd.value() << '\n'
                  << "Message:  " << econd.message() << "\n\n";
    }
}
```

## See also
- [generic_category](/cpp/error/generic_category/)
- [errc](/cpp/error/errc/)
- [std::error_condition](/cpp/error/error_condition/)
- [<cerrno>](/cpp/header/cerrno/)
