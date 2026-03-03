---
title: "std::system_error"
source_path: "cpp/error/system_error"
header: "<system_error>"
---

std::system_error is the type of the exception thrown by various library functions (typically the functions that interface with the OS facilities, e.g. the constructor of [std::thread](/cpp/thread/thread/)) when the exception has an associated [std::error_code](/cpp/error/error_code/), which may be reported.

## Declarations
```cpp
class system_error;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <system_error>
#include <thread>
 
int main()
{
    try
    {
        std::thread().detach(); // attempt to detach a non-thread
    }
    catch(const std::system_error& e)
    {
        std::cout << "Caught system_error with code "
                     "[" << e.code() << "] meaning "
                     "[" << e.what() << "]\n";
    }
}
```
