---
title: "std::io_errc"
source_path: "cpp/io/io_errc"
header: "<ios>"
category: "io"
since: "C++11"
---

The scoped enumeration std::io_errc defines the error codes reported by I/O streams in [std::ios_base::failure](/cpp/io/ios_base/failure/) exception objects. Only one error code (std::io_errc::stream) is required, although the implementation may define additional error codes. Because the appropriate specialization of [std::is_error_code_enum](/cpp/error/error_code/is_error_code_enum/) is provided, values of type std::io_errc are implicitly convertible to [std::error_code](/cpp/error/error_code/).

## Declarations
```cpp
enum class io_errc {
stream = 1,
};
```
_(since C++11)_

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
        std::cout << "Caught an ios_base::failure.\n";
        if (e.code() == std::io_errc::stream)
            std::cout << "The error code is std::io_errc::stream\n";
    }
}
```

## See also
- [error_code](/cpp/error/error_code/)
- [error_condition](/cpp/error/error_condition/)
- [failure](/cpp/io/ios_base/failure/)
