---
title: "rename"
source_path: "c/io/rename"
header: "<stdio.h>"
category: "c"
---

Changes the filename of a file. The file is identified by character string pointed to by old_filename. The new filename is identified by character string pointed to by new_filename.

## Declarations
```cpp
int rename( const char* old_filename, const char* new_filename );
```

## Parameters
- `old_filename`: pointer to a null-terminated string containing the path identifying the file to rename
- `new_filename`: pointer to a null-terminated string containing the new path of the file

## Return value
0 upon success or non-zero value on error.

## Notes
[POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/rename.html) specifies many additional details on the semantics of this function.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    FILE* fp = fopen("from.txt", "w"); // create file "from.txt"
    if (!fp)
    {
        perror("from.txt");
        return EXIT_FAILURE;
    }
    fputc('a', fp); // write to "from.txt"
    fclose(fp);
 
    int rc = rename("from.txt", "to.txt");
    if (rc)
    {
        perror("rename");
        return EXIT_FAILURE;
    }
 
    fp = fopen("to.txt", "r");
    if(!fp)
    {
        perror("to.txt");
        return EXIT_FAILURE;
    }
    printf("%c\n", fgetc(fp)); // read from "to.txt"
    fclose(fp);
 
    return EXIT_SUCCESS;
}
```

## See also
- [remove](/c/io/remove/)
- [C++ documentation](/cpp/io/c/rename/)
