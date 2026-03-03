---
title: "Main function"
source_path: "c/language/main_function"
category: "c"
---

Every C program coded to run in a hosted execution environment contains the definition (not the prototype) of a function named main, which is the designated start of the program.

## Parameters
- `argc`: Non-negative value representing the number of arguments passed to the program from the environment in which the program is run.
- `argv`: Pointer to the first element of an array of argc + 1 pointers, of which the last one is null and the previous ones, if any, point to strings that represent the arguments passed to the program from the host environment. If argv[0] is not a null pointer (or, equivalently, if argc > 0), it points to a string that represents the program name, which is empty if the program name is not available from the host environment.

## Return value
If the return statement is used, the return value is used as the argument to the implicit call to [exit()](/c/program/exit/) (see below for details). The values zero and [EXIT_SUCCESS](/c/program/EXIT_status/) indicate successful termination, the value [EXIT_FAILURE](/c/program/EXIT_status/) indicates unsuccessful termination.

## Example
```cpp
#include <stdio.h>
 
int main(int argc, char *argv[])
{
    printf("argc = %d\n", argc);
    for (int ndx = 0; ndx != argc; ++ndx)
        printf("argv[%d] --> %s\n", ndx, argv[ndx]);
    printf("argv[argc] = %p\n", (void*)argv[argc]);
}
```

## See also
- [C++ documentation](/cpp/language/main_function/)
