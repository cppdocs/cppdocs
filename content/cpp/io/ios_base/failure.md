---
title: "std::ios_base::failure"
source_path: "cpp/io/ios_base/failure"
header: "<ios>"
category: "io"
---

The class std::ios_base::failure defines an exception object that is thrown on failure by the functions in the Input/Output library.

## Declarations
```cpp
class failure;
```

## Parameters
- `message`: explanatory string
- `ec`: error code to identify the specific reason for the failure
- `other`: another failure to copy

## Return value
*this

## Notes
Because copying std::ios_base::failure is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking [std::string](/cpp/string/basic_string/)&&: it would have to copy the content anyway.

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
                  << "Explanatory string: " << e.what() << '\n'
                  << "Error code: " << e.code() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 48 | C++98 | the constructor overload (1) initialized the base class std::exceptionwith msg, but the base class does not have a matching constructor | correspondingdescription removed |
| LWG 331 | C++98 | std::ios_base::failure declared a destructor without throw() | removed the destructor declaration |

## See also
- [io_errc](/cpp/io/io_errc/)
