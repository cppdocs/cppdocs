---
title: "std::set_terminate"
source_path: "cpp/error/set_terminate"
header: "<exception>"
category: "error"
since: "C++11"
---

Makes f the new global terminate handler function and returns the previously installed [std::terminate_handler](/cpp/error/terminate_handler/). f shall terminate execution of the program without returning to its caller, otherwise the behavior is undefined.

## Declarations
```cpp
std::terminate_handler set_terminate( std::terminate_handler f ) throw();
```
_(until C++11)_

```cpp
std::terminate_handler set_terminate( std::terminate_handler f ) noexcept;
```
_(since C++11)_

## Parameters
- `f`: pointer to function of type std::terminate_handler, or null pointer

## Return value
The previously-installed terminate handler, or a null pointer value if none was installed.

## Example
```cpp
#include <cstdlib>
#include <exception>
#include <iostream>
 
int main()
{
    std::set_terminate([]()
    {
        std::cout << "Unhandled exception\n" << std::flush;
        std::abort();
    });
    throw 1;
}
```

## See also
- [terminate](/cpp/error/terminate/)
- [get_terminate](/cpp/error/get_terminate/)
- [terminate_handler](/cpp/error/terminate_handler/)
- [std::terminate](/cpp/error/terminate/)
