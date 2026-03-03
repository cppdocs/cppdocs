---
title: "mbtowc"
source_path: "c/string/multibyte/mbtowc"
header: "<stdlib.h>"
category: "c"
---

Converts a multibyte character whose first byte is pointed to by s to a wide character, written to *pwc if pwc is not null.

## Declarations
```cpp
int mbtowc( wchar_t* pwc, const char* s, size_t n )
```
_(until C99)_

```cpp
int mbtowc( wchar_t* restrict pwc, const char* restrict s, size_t n )
```
_(since C99)_

## Parameters
- `pwc`: pointer to the wide character for output
- `s`: pointer to the multibyte character
- `n`: limit on the number of bytes in s that can be examined

## Return value
If s is not a null pointer, returns the number of bytes that are contained in the multibyte character or -1 if the first bytes pointed to by s do not form a valid multibyte character or 0 if s is pointing at the null character '\0'.

## Notes
Each call to mbtowc updates the internal global conversion state (a static object of type [mbstate_t](/c/string/multibyte/mbstate_t/), known only to this function). If the multibyte encoding uses shift states, care must be taken to avoid backtracking or multiple scans. In any case, multiple threads should not call mbtowc without synchronization: [mbrtowc](/c/string/multibyte/mbrtowc/) may be used instead.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <wchar.h>
 
// print multibyte string to wide-oriented stdout
// equivalent to wprintf(L"%s\n", ptr);
void print_mb(const char* ptr)
{
    mbtowc(NULL, NULL, 0); // reset the conversion state
    const char* end = ptr + strlen(ptr);
    int ret = 0;
    for (wchar_t wc; (ret = mbtowc(&wc, ptr, end - ptr)) > 0; ptr += ret)
        wprintf(L"%lc", wc);
    wprintf(L"\n");
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    print_mb("z\u00df\u6c34\U0001F34C"); // or "zß水🍌"
}
```

## See also
- [mbrtowc](/c/string/multibyte/mbrtowc/)
- [mblen](/c/string/multibyte/mblen/)
- [C++ documentation](/cpp/string/multibyte/mbtowc/)
