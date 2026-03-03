---
title: "errno"
source_path: "cpp/error/errno"
header: "<cerrno>"
category: "error"
---

errno is a preprocessor macro used for error indication. It expands to a static(until C++11)thread-local(since C++11) modifiable lvalue of type int.

## Declarations
```cpp
#define errno /* implementation-defined */
```

## Example
```cpp
#include <cerrno>
#include <clocale>
#include <cmath>
#include <cstring>
#include <iostream>
 
int main()
{
    const double not_a_number = std::log(-1.0);
    std::cout << not_a_number << '\n';
 
    if (errno == EDOM)
    {
        std::cout << "log(-1) failed: " << std::strerror(errno) << '\n';
        std::setlocale(LC_MESSAGES, "de_DE.utf8");
        std::cout << "Or, in German, " << std::strerror(errno) << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 310 | C++98 | it was unclear whether errno is a macroor an identifier with external linkage | errno mustbe a macro |

## See also
- [E2BIG, EACCES, ..., EXDEV](/cpp/error/errno_macros/)
- [perror](/cpp/io/c/perror/)
- [stderr](/cpp/io/c/std_streams/)
- [strerror](/cpp/string/byte/strerror/)
- [C documentation](/c/error/errno/)
