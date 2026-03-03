---
title: "getchar"
source_path: "c/io/getchar"
header: "<stdio.h>"
category: "c"
---

Reads the next character from [stdin](/c/io/std_streams/).

## Declarations
```cpp
int getchar( void );
```

## Return value
The obtained character on success or [EOF](/c/io/) on failure.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    for (int ch; (ch = getchar()) != EOF;) // read/print "abcde" from stdin
        printf("%c", ch);
 
    // Test reason for reaching EOF.
    if (feof(stdin)) // if failure caused by end-of-file condition
        puts("End of file reached");
    else if (ferror(stdin)) // if failure caused by some other error
    {
        perror("getchar()");
        fprintf(stderr, "getchar() failed in file %s at line # %d\n",
                __FILE__, __LINE__ - 9);
        exit(EXIT_FAILURE);
    }
 
    return EXIT_SUCCESS;
}
```

## See also
- [fgetcgetc](/c/io/fgetc/)
- [C++ documentation](/cpp/io/c/getchar/)
