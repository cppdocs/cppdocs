---
title: "EXIT_SUCCESS, EXIT_FAILURE"
source_path: "cpp/utility/program/EXIT_status"
header: "<cstdlib>"
category: "utility"
---

The EXIT_SUCCESS and EXIT_FAILURE macros expand into integral constant expressions that can be used as arguments to the [std::exit](/cpp/utility/program/exit/) function (and, therefore, as the values to return from the [main function](/cpp/language/main_function/)), and indicate program execution status.

## Declarations
```cpp
#define EXIT_SUCCESS /*implementation defined*/
```

```cpp
#define EXIT_FAILURE /*implementation defined*/
```

## Notes
Both EXIT_SUCCESS and the value zero indicate successful program execution status (see [std::exit](/cpp/utility/program/exit/)), although it is not required that EXIT_SUCCESS equals zero.

Although EXIT_SUCCESS and EXIT_FAILURE are required to be freestanding since C++23, they are not required to be available in a freestanding C implementation.

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
int main(int argc, char* argv[])
{
    if (argc <= 1)
    {
        std::cout << "At least one command-line argument required\n";
        return EXIT_FAILURE;
    }
 
    std::cout << argv[1] << '\n';
    return EXIT_SUCCESS;
}
```

## See also
- [C documentation](/c/program/EXIT_status/)
