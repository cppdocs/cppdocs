---
title: "remove"
source_path: "c/io/remove"
header: "<stdio.h>"
category: "c"
---

Deletes the file identified by the character string pointed to by pathname.

## Declarations
```cpp
int remove( const char* pathname );
```

## Parameters
- `pathname`: pointer to a null-terminated string containing the path identifying the file to delete

## Return value
0 upon success or non-zero value on error.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remove.html) many additional details for the behavior of this function.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    FILE* fp = fopen("file1.txt", "w"); // create file
    if (!fp)
    {
        perror("file1.txt");
        return EXIT_FAILURE;
    }
    puts("Created file1.txt");
    fclose(fp);
 
    int rc = remove("file1.txt");
    if (rc)
    {
        perror("remove");
        return EXIT_FAILURE;
    }
    puts("Removed file1.txt");
 
    fp = fopen("file1.txt", "r"); // Failure: file does not exist
    if (!fp)
        perror("Opening removed file failed");
 
    rc = remove("file1.txt"); // Failure: file does not exist
    if (rc)
        perror("Double-remove failed");
 
    return EXIT_SUCCESS;
}
```

## See also
- [rename](/c/io/rename/)
- [C++ documentation](/cpp/io/c/remove/)
