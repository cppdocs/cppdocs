---
title: "strrchr"
source_path: "c/string/byte/strrchr"
header: "<string.h>"
category: "c"
---

1) Finds the last occurrence of ch (after conversion to char as if by (char)ch) in the null-terminated byte string pointed to by str (each character interpreted as unsigned char). The terminating null character is considered to be a part of the string and can be found if searching for '\0'.

## Declarations
```cpp
char* strrchr( const char* str, int ch );
```

```cpp
/*QChar*/* strrchr( /*QChar*/* str, int ch );
```
_(since C23)_

## Parameters
- `str`: pointer to the null-terminated byte string to be analyzed
- `ch`: character to search for

## Return value
Pointer to the found character in str, or null pointer if no such character is found.

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    char szSomeFileName[] = "foo/bar/foobar.txt";
    char* pLastSlash = strrchr(szSomeFileName, '/');
    char* pszBaseName = pLastSlash ? pLastSlash + 1 : szSomeFileName;
    printf("Base Name: %s", pszBaseName);
}
```

## See also
- [strchr](/c/string/byte/strchr/)
- [strpbrk](/c/string/byte/strpbrk/)
- [C++ documentation](/cpp/string/byte/strrchr/)
