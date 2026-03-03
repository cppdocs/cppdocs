---
title: "std::getchar"
source_path: "cpp/io/c/getchar"
header: "<cstdio>"
category: "io"
---

Reads the next character from [stdin](/cpp/io/c/std_streams/).

## Declarations
```cpp
int getchar();
```

## Return value
The obtained character on success or [EOF](/cpp/io/c/) on failure.

## Example
```cpp
#include <cctype>
#include <cstdio>
#include <cstdlib>
#include <iomanip>
#include <iostream>
 
int main()
{
    for (int ch; (ch = std::getchar()) != EOF ;) // read/print "abc" from stdin
    {
        if (std::isprint(ch))
            std::cout << static_cast<char>(ch) << '\n';
        if (ch == 27) // 'ESC' (escape) in ASCII
            return EXIT_SUCCESS;
    }
 
    // Test reason for reaching EOF.
    if (std::feof(stdin)) // if failure caused by end-of-file condition
        std::cout << "End of file reached\n";
    else if (std::ferror(stdin)) // if failure caused by some other error
    {
        std::perror("getchar()");
        std::cerr << "getchar() failed in file " << std::quoted(__FILE__)
                  << " at line # " << __LINE__ - 14 << '\n';
        std::exit(EXIT_FAILURE);
    }
 
    return EXIT_SUCCESS;
}
```

## See also
- [fgetcgetc](/cpp/io/c/fgetc/)
- [C documentation](/c/io/getchar/)
