---
title: "wcstoul, wcstoull"
source_path: "c/string/wide/wcstoul"
header: "<wchar.h>"
category: "c"
---

Interprets an unsigned integer value in a wide string pointed to by str.

## Declarations
```cpp
unsigned long wcstoul( const wchar_t* str, wchar_t** str_end, int base );
```
_(since C95) (until C99)_

```cpp
unsigned long wcstoul( const wchar_t * restrict str,
wchar_t ** restrict str_end, int base );
```
_(since C99)_

```cpp
unsigned long long wcstoull( const wchar_t * restrict str,
wchar_t ** restrict str_end, int base );
```
_(since C99)_

## Parameters
- `str`: pointer to the null-terminated wide string to be interpreted
- `str_end`: pointer to a pointer to a wide character.
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [ULONG_MAX](/c/types/limits/) or [ULLONG_MAX](/c/types/limits/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <stdio.h>
#include <errno.h>
#include <wchar.h>
 
int main(void)
{
    const wchar_t *p = L"10 200000000000000000000000000000 30 40";
    printf("Parsing L'%ls':\n", p);
    wchar_t *end;
    for (unsigned long i = wcstoul(p, &end, 10);
         p != end;
         i = wcstoul(p, &end, 10))
    {
        printf("'%.*ls' -> ", (int)(end-p), p);
        p = end;
        if (errno == ERANGE){
            printf("range error, got ");
            errno = 0;
        }
        printf("%lu\n", i);
    }
}
```

## See also
- [strtoul strtoull](/c/string/byte/strtoul/)
- [wcstolwcstoll](/c/string/wide/wcstol/)
- [C++ documentation](/cpp/string/wide/wcstoul/)
