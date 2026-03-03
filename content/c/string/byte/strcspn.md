---
title: "strcspn"
source_path: "c/string/byte/strcspn"
header: "<string.h>"
category: "c"
---

Returns the length of the maximum initial segment of the null-terminated byte string pointed to by dest, that consists of only the characters not found in the null-terminated byte string pointed to by src.

## Declarations
```cpp
size_t strcspn( const char *dest, const char *src );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to be analyzed
- `src`: pointer to the null-terminated byte string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters not found in the null-terminated byte string pointed to by src

## Notes
The function name stands for "complementary span" because the function searches for characters not found in src, that is the complement of src.

## Example
```cpp
#include <string.h>
#include <stdio.h>
 
int main(void)
{
    const char *string = "abcde312$#@";
    const char *invalid = "*$#";
 
    size_t valid_len = strcspn(string, invalid);
    if(valid_len != strlen(string))
       printf("'%s' contains invalid chars starting at position %zu\n",
               string, valid_len);
}
```

## See also
- [strspn](/c/string/byte/strspn/)
- [wcscspn](/c/string/wide/wcscspn/)
- [strpbrk](/c/string/byte/strpbrk/)
- [C++ documentation](/cpp/string/byte/strcspn/)
