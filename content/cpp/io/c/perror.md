---
title: "std::perror"
source_path: "cpp/io/c/perror"
header: "<cstdio>"
category: "io"
---

Prints a textual description of the error code currently stored in the system variable [errno](/cpp/error/errno/) to [stderr](/cpp/io/c/std_streams/).

## Declarations
```cpp
void perror( const char *s );
```

## Parameters
- `s`: pointer to a null-terminated string with explanatory message

## Return value
(none)

## Example
```cpp
#include <cerrno>
#include <cmath>
#include <cstdio>
 
int main()
{
    double not_a_number = std::log(-1.0);
    if (errno == EDOM)
        std::perror("log(-1) failed");
    std::printf("%f\n", not_a_number);
}
```

## See also
- [errno](/cpp/error/errno/)
- [strerror](/cpp/string/byte/strerror/)
- [C documentation](/c/io/perror/)
