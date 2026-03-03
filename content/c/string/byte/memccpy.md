---
title: "memccpy"
source_path: "c/string/byte/memccpy"
header: "<string.h>"
category: "c"
---

Copies bytes from the object pointed to by src to the object pointed to by dest, stopping after any of the next two conditions are satisfied:

## Declarations
```cpp
void* memccpy( void* restrict dest, const void* restrict src, int c, size_t count );
```
_(since C23)_

## Parameters
- `dest`: pointer to the object to copy to
- `src`: pointer to the object to copy from
- `c`: terminating byte, converted to unsigned char at first
- `count`: number of bytes to copy

## Return value
If the byte (unsigned char)c was found, memccpy returns a pointer to the next byte in dest after (unsigned char)c. Otherwise it returns a null pointer.

## Notes
The function is identical to the [POSIX memccpy](https://pubs.opengroup.org/onlinepubs/9699919799/functions/memccpy.html).

memccpy(dest, src, 0, count) behaves similar to [strncpy](/c/string/byte/strncpy/)(dest, src, count), except that the former returns a pointer to the end of the buffer written, and does not zero-pad the destination array. Thus, memccpy is useful for efficiently concatenating multiple strings.

## Example
```cpp
#include <ctype.h>
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    const char src[] = "Stars: Altair, Sun, Vega.";
    const char terminal[] = {':', ' ', ',', '.', '!'};
    char dest[sizeof src];
    const char alt = '@';
 
    for (size_t i = 0; i != sizeof terminal; ++i)
    {
        void* to = memccpy(dest, src, terminal[i], sizeof dest);
 
        printf("Terminal '%c' (%s):\t\"", terminal[i], to ? "found" : "absent");
 
        // if `terminal` character was not found - print the whole `dest`
        to = to ? to : dest + sizeof dest;
 
        for (char* from = dest; from != to; ++from)
            putchar(isprint(*from) ? *from : alt);
 
        puts("\"");
    }
 
 
    puts("\n" "Separate star names from distances (ly):");
    const char *star_distance[] = {
        "Arcturus : 37", "Vega : 25", "Capella : 43", "Rigel : 860", "Procyon : 11"
    };
    char names_only[64];
    char *first = names_only;
    char *last = names_only + sizeof names_only;
 
    for (size_t t = 0; t != (sizeof star_distance) / (sizeof star_distance[0]); ++t)
    {
        if (first)
            first = memccpy(first, star_distance[t], ' ', last - first);
        else
            break;
    }
 
    if (first)
    {
        *first = '\0';
        puts(names_only);
    }
    else
        puts("Buffer is too small.");
}
```

## See also
- [memcpymemcpy_s](/c/string/byte/memcpy/)
- [wmemcpywmemcpy_s](/c/string/wide/wmemcpy/)
- [memmovememmove_s](/c/string/byte/memmove/)
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [strcatstrcat_s](/c/string/byte/strcat/)
