---
title: "std::make_error_condition(std::io_errc)"
source_path: "cpp/io/io_errc/make_error_condition"
header: "<ios>"
category: "io"
since: "C++11"
---

Constructs an [std::error_condition](/cpp/error/error_condition/) object from a value of type [std::io_errc](/cpp/io/io_errc/) as if by return [std::error_condition](/cpp/error/error_condition/)(static_cast<int>(e), [std::iostream_category](/cpp/io/iostream_category/)()).

## Declarations
```cpp
std::error_condition make_error_condition( std::io_errc e ) noexcept;
```
_(since C++11)_

## Parameters
- `e`: error code number

## Return value
A value of type [std::error_condition](/cpp/error/error_condition/) that holds the error code number from e associated with the error category "iostream".

## Example
```cpp
#include <iostream>
#include <system_error>
 
int main()
{
    std::error_condition ec = std::make_error_condition(std::io_errc::stream);
    std::cout << "error condition for io_errc::stream has value " << ec.value()
              << "\nand message \"" << ec.message() << "\"\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2087 | C++11 | make_error_condition(io_errc) was not declared noexcept | declared noexcept |

## See also
- [error_condition](/cpp/error/error_condition/)
- [io_errc](/cpp/io/io_errc/)
