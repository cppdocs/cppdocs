---
title: "std::rename"
source_path: "cpp/io/c/rename"
header: "<cstdio>"
category: "io"
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
[POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/functions/rename.html) specifies many additional details on the semantics of this function, which are reproduced in C++ by [std::filesystem::rename](/cpp/filesystem/rename/).

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <fstream>
#include <iostream>
 
int main()
{
    if (!std::ofstream("from.txt").put('a')) // create and write to file
    {
        std::perror("Error creating from.txt");
        return EXIT_FAILURE;
    }
 
    if (std::rename("from.txt", "to.txt"))
    {
        std::perror("Error renaming");
        return EXIT_FAILURE;
    }
 
    std::cout << std::ifstream("to.txt").rdbuf() << '\n'; // print file
    return EXIT_SUCCESS;
}
```

## See also
- [rename](/cpp/filesystem/rename/)
- [remove](/cpp/io/c/remove/)
- [C documentation](/c/io/rename/)
