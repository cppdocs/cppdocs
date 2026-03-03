---
title: "std::strerror"
source_path: "cpp/string/byte/strerror"
header: "<cstring>"
category: "string"
---

Returns a pointer to the textual description of the system error code errnum, identical to the description that would be printed by [std::perror()](/cpp/io/c/perror/).

## Declarations
```cpp
char* strerror( int errnum );
```

## Parameters
- `errnum`: integer value referring to an error code

## Return value
Pointer to a null-terminated byte string corresponding to the [errno](/cpp/error/errno/) error code errnum.

## Notes
[POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/strerror.html) allows subsequent calls to strerror to invalidate the pointer value returned by an earlier call. It also specifies that it is the [LC_MESSAGES](/cpp/locale/lc_categories/) locale facet that controls the contents of these messages.

POSIX has a thread-safe version called strerror_r defined. Glibc [defines an incompatible version](https://www.club.cc.cmu.edu/~cmccabe/blog_strerror.html).

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

## See also
- [perror](/cpp/io/c/perror/)
- [stderr](/cpp/io/c/std_streams/)
- [E2BIG, EACCES, ..., EXDEV](/cpp/error/errno_macros/)
- [C documentation](/c/string/byte/strerror/)
