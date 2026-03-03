---
title: "strpbrk"
source_path: "c/string/byte/strpbrk"
header: "<string.h>"
category: "c"
---

1 ) Scans the null-terminated byte string pointed to by dest for any character from the null-terminated byte string pointed to by breakset, and returns a pointer to that character.

## Declarations
```cpp
char *strpbrk( const char *dest, const char *breakset );
```

```cpp
/*QChar*/ *strpbrk( /*QChar*/ *dest, const char *breakset );
```
_(since C23)_

## Parameters
- `dest`: pointer to the null-terminated byte string to be analyzed
- `breakset`: pointer to the null-terminated byte string that contains the characters to search for

## Return value
Pointer to the first character in dest, that is also in breakset, or null pointer if no such character exists.

## Notes
The name stands for "string pointer break", because it returns a pointer to the first of the separator ("break") characters.

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    const char* str = "hello world, friend of mine!";
    const char* sep = " ,!";
 
    unsigned int cnt = 0;
    do
    {
       str = strpbrk(str, sep); // find separator
       if(str) str += strspn(str, sep); // skip separator
       ++cnt; // increment word count
    }
    while(str && *str);
 
    printf("There are %u words\n", cnt);
}
```

## See also
- [strcspn](/c/string/byte/strcspn/)
- [strchr](/c/string/byte/strchr/)
- [strtokstrtok_s](/c/string/byte/strtok/)
- [C++ documentation](/cpp/string/byte/strpbrk/)
