---
title: "std::iostream_category"
source_path: "cpp/io/iostream_category"
header: "<ios>"
category: "io"
since: "C++11"
---

Obtains a reference to the static error category object for iostream errors. The object is required to override the virtual function error_category::name() to return a pointer to the string "iostream". It is used to identify error codes provided in the exceptions of type [std::ios_base::failure](/cpp/io/ios_base/failure/).

## Declarations
```cpp
const std::error_category& iostream_category() noexcept;
```
_(since C++11)_

## Return value
A reference to the static object of unspecified runtime type, derived from [std::error_category](/cpp/error/error_category/).

## Example
```cpp
#include <fstream>
#include <iostream>
 
int main()
{
    std::ifstream f("doesn't exist");
    try
    {
        f.exceptions(f.failbit);
    }
    catch (const std::ios_base::failure& e)
    {
        std::cout << "Caught an ios_base::failure.\n"
                  << "Error code: " << e.code().value() 
                  << " (" << e.code().message() << ")\n"
                  << "Error category: " << e.code().category().name() << '\n';
 
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2087 | C++11 | iostream_category was not declared noexcept | declared noexcept |

## See also
- [failure](/cpp/io/ios_base/failure/)
- [io_errc](/cpp/io/io_errc/)
