---
title: "std::remove"
source_path: "cpp/io/c/remove"
header: "<cstdio>"
category: "io"
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

The standard library also defines a function template [std::remove](/cpp/algorithm/remove/) taking a pair of iterators and a value, this overload is one of the standard [algorithms](/cpp/algorithm/).

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <fstream>
#include <iostream>
 
int main()
{
    // create a file, check success using operator! of temporary stream object
    if (!std::ofstream("file1.txt").put('a'))
    {
        std::perror("Error creating file1.txt");
        return EXIT_FAILURE;
    }
    std::cout << std::ifstream("file1.txt").rdbuf() << '\n'; // print file
 
    std::remove("file1.txt"); // delete file
 
    if (!std::ifstream{"file1.txt"}) // uses operator! of temporary stream object
    {
        std::perror("Error opening deleted file");
        return EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}
```

## See also
- [removeremove_all](/cpp/filesystem/remove/)
- [rename](/cpp/io/c/rename/)
- [C documentation](/c/io/remove/)
