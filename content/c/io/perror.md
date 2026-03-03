---
title: "perror"
source_path: "c/io/perror"
header: "<stdio.h>"
category: "c"
---

Prints a textual description of the error code currently stored in the system variable [errno](/c/error/errno/) to [stderr](/c/io/std_streams/).

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
#include <stdio.h>
 
int main(void)
{
    FILE *f = fopen("non_existent", "r");
    if (f == NULL) {
        perror("fopen() failed");
    } else {
        fclose(f);
    }
}
```

## See also
- [strerrorstrerror_sstrerrorlen_s](/c/string/byte/strerror/)
- [C++ documentation](/cpp/io/c/perror/)
