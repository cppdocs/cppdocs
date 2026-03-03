---
title: "std::make_error_code(std::io_errc)"
source_path: "cpp/io/io_errc/make_error_code"
header: "<ios>"
category: "io"
since: "C++11"
---

Constructs an [std::error_code](/cpp/error/error_code/) object from a value of type [std::io_errc](/cpp/io/io_errc/) as if by return [std::error_code](/cpp/error/error_code/)(static_cast<int>(e), [std::iostream_category](/cpp/io/iostream_category/)()).

## Declarations
```cpp
std::error_code make_error_code( std::io_errc e ) noexcept;
```
_(since C++11)_

## Parameters
- `e`: error code number

## Return value
A value of type [std::error_code](/cpp/error/error_code/) that holds the error code number from e associated with the error category "iostream".

## Example
```cpp
#include <iostream>
#include <system_error>
 
int main()
{
    std::error_code ec = std::make_error_code(std::io_errc::stream);
 
    // This works because of the overloaded method
    //    and the is_error_code_enum specialization.
    ec = std::io_errc::stream;
 
    std::cout << "Error code from io_errc::stream has category "
              << ec.category().name() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2087 | C++11 | make_error_code(io_errc) was not declared noexcept | declared noexcept |

## See also
- [error_code](/cpp/error/error_code/)
- [io_errc](/cpp/io/io_errc/)
- [make_error_code(std::errc)](/cpp/error/errc/make_error_code/)
- [make_error_code(std::future_errc)](/cpp/thread/future_errc/make_error_code/)
