---
title: "std::is_error_code_enum<std::io_errc>"
source_path: "cpp/io/io_errc/is_error_code_enum"
header: "<ios>"
category: "io"
since: "C++11"
---

This specialization of [std::is_error_code_enum](/cpp/error/error_code/is_error_code_enum/) informs other library components that values of type [std::io_errc](/cpp/io/io_errc/) are enumerations that hold error codes, which makes them implicitly convertible and assignable to objects of type [std::error_code](/cpp/error/error_code/).

## Declarations
```cpp
template<>
struct is_error_code_enum<std::io_errc> : public std::true_type {};
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
- [is_error_code_enum](/cpp/error/error_code/is_error_code_enum/)
- [error_code](/cpp/error/error_code/)
- [io_errc](/cpp/io/io_errc/)
