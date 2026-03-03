---
title: "std::atexit"
source_path: "cpp/utility/program/atexit"
header: "<cstdlib>"
category: "utility"
since: "C++11"
---

Registers the function pointed to by func to be called on normal program termination (via [std::exit()](/cpp/utility/program/exit/) or returning from the [main function](/cpp/language/main_function/))

## Declarations
```cpp
int atexit( /* c-atexit-handler */* func );
int atexit( /* atexit-handler */* func );
```
_(until C++11)_

```cpp
int atexit( /* c-atexit-handler */* func ) noexcept;
int atexit( /* atexit-handler */* func ) noexcept;
```
_(since C++11)_

```cpp
extern "C" using /* c-atexit-handler */ = void();
extern "C++" using /* atexit-handler */ = void();
```
_(exposition only*)_

## Parameters
- `func`: pointer to a function to be called on normal program termination

## Return value
0 if the registration succeeds, nonzero value otherwise.

## Notes
The two overloads are distinct because the types of the parameter func are distinct ([language linkage](/cpp/language/language_linkage/) is part of its type).

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
void atexit_handler_1()
{
    std::cout << "At exit #1\n";
}
 
void atexit_handler_2()
{
    std::cout << "At exit #2\n";
}
 
int main()
{
    const int result_1 = std::atexit(atexit_handler_1);
    const int result_2 = std::atexit(atexit_handler_2);
 
    if (result_1 || result_2)
    {
        std::cerr << "Registration failed!\n";
        return EXIT_FAILURE;
    }
 
    std::cout << "Returning from main...\n";
    return EXIT_SUCCESS;
}
```

## See also
- [abort](/cpp/utility/program/abort/)
- [exit](/cpp/utility/program/exit/)
- [quick_exit](/cpp/utility/program/quick_exit/)
- [at_quick_exit](/cpp/utility/program/at_quick_exit/)
- [std::quick_exit](/cpp/utility/program/quick_exit/)
- [C documentation](/c/program/atexit/)
