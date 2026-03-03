---
title: "Main function"
source_path: "cpp/language/main_function"
category: "language"
---

A program shall contain a global function named main, which is the designated start of the program in hosted environment. It shall have one of the following forms:

## Notes
If the main function is defined with a [function try block](/cpp/language/try/#Function_try_block), the exceptions thrown by the destructors of static objects (which are destroyed by the implied [std::exit](/cpp/utility/program/exit/)) are not [caught](/cpp/language/catch/) by it.

The manner in which the arguments given at the OS command line are converted into the multibyte character arrays referenced by argv may involve implementation-defined processing:

A very common implementation-defined form of main() has a third argument (in addition to argc and argv), of type char**, pointing at [an array of pointers to the execution environment variables](https://pubs.opengroup.org/onlinepubs/9699919799/functions/exec.html).

## Example
```cpp
#include <cstdlib>
#include <iomanip>
#include <iostream>
 
int main(int argc, char *argv[])
{
    std::cout << "argc == " << argc << '\n';
 
    for (int ndx{}; ndx != argc; ++ndx)
        std::cout << "argv[" << ndx << "] == " << std::quoted(argv[ndx]) << '\n';
    std::cout << "argv[" << argc << "] == "
              << static_cast<void*>(argv[argc]) << '\n';
 
    /* ... */
 
    return argc == 3 ? EXIT_SUCCESS : EXIT_FAILURE; // optional return value
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1003 | C++98 | supported parameter names of main were overly restricted | all valid parameternames are supported |
| CWG 1886 | C++98 | the main function could be declared with a language linkage | prohibited |
| CWG 2479 | C++20 | the main function could be declared consteval | prohibited |
| CWG 2811 | C++98 | whether the main function is used after N3214 was unclear | it is considered used when named |

## See also
- [C documentation](/c/language/main_function/)
