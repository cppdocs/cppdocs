---
title: "std::getenv"
source_path: "cpp/utility/program/getenv"
header: "<cstdlib>"
category: "utility"
---

Searches the environment list provided by the host environment (the OS), for a string that matches the C string pointed to by env_var and returns a pointer to the C string that is associated with the matched environment list member.

## Declarations
```cpp
char* getenv( const char* env_var );
```

## Parameters
- `env_var`: null-terminated character string identifying the name of the environmental variable to look for

## Return value
Character string identifying the value of the environmental variable or null pointer if such variable is not found.

## Notes
On POSIX systems, the [environment variables](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap08.html#tag_08) are also accessible through the global variable environ, declared as extern char** environ; in <unistd.h>, and through the optional third argument, envp, of [the main function](/cpp/language/main_function/).

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
int main()
{
    if (const char* env_p = std::getenv("PATH"))
        std::cout << "Your PATH is: " << env_p << '\n';
}
```

## See also
- [C documentation](/c/program/getenv/)
