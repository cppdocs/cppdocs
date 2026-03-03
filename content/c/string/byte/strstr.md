---
title: "strstr"
source_path: "c/string/byte/strstr"
header: "<string.h>"
category: "c"
---

1) Finds the first occurrence of the null-terminated byte string pointed to by substr in the null-terminated byte string pointed to by str. The terminating null characters are not compared.

## Declarations
```cpp
char* strstr( const char* str, const char* substr );
```

```cpp
/*QChar*/* strstr( /*QChar*/* str, const char* substr );
```
_(since C23)_

## Parameters
- `str`: pointer to the null-terminated byte string to examine
- `substr`: pointer to the null-terminated byte string to search for

## Return value
Pointer to the first character of the found substring in str, or a null pointer if such substring is not found. If substr points to an empty string, str is returned.

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
void find_str(char const* str, char const* substr)
{
    char const* pos = strstr(str, substr);
    if (pos)
        printf(
            "Found the string [%s] in [%s] at position %td\n",
            substr, str, pos - str
        );
    else
        printf(
            "The string [%s] was not found in [%s]\n",
            substr, str
        );
}
 
int main(void)
{
    char const* str = "one two three";
    find_str(str, "two");
    find_str(str, "");
    find_str(str, "nine");
    find_str(str, "n");
 
    return 0;
}
```

## See also
- [strchr](/c/string/byte/strchr/)
- [strrchr](/c/string/byte/strrchr/)
- [C++ documentation](/cpp/string/byte/strstr/)
