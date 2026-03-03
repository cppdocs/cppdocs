---
title: "wcstok, wcstok_s"
source_path: "c/string/wide/wcstok"
header: "<wchar.h>"
category: "c"
---

1) Finds the next token in a null-terminated wide string pointed to by str. The separator characters are identified by null-terminated wide string pointed to by delim.

## Declarations
```cpp
wchar_t* wcstok( wchar_t* str, const wchar_t* delim, wchar_t** ptr );
```
_(since C95) (until C99)_

```cpp
wchar_t* wcstok( wchar_t* restrict str, const wchar_t* restrict delim,
wchar_t** restrict ptr );
```
_(since C99)_

```cpp
wchar_t* wcstok_s( wchar_t* restrict str, rsize_t* restrict strmax,
const wchar_t* restrict delim, wchar_t** restrict ptr);
```
_(since C11)_

## Parameters
- `str`: pointer to the null-terminated wide string to tokenize
- `delim`: pointer to the null-terminated wide string identifying delimiters
- `ptr`: pointer to an object of type wchar_t*, which is used by both wcstok and wcstok_s to store the internal state of the parser
- `strmax`: pointer to an object which initially holds the size of str: wcstok_s stores the number of characters that remain to be examined

## Return value
Returns pointer to the beginning of the next token or null pointer if there are no more tokens.

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t input[] = L"A bird came down the walk";
    printf("Parsing the input string '%ls'\n", input);
    wchar_t* buffer;
    wchar_t* token = wcstok(input, L" ", &buffer);
    while (token)
    {
        printf("%ls\n", token);
        token = wcstok(NULL, L" ", &buffer);
    }
 
    printf("Contents of the input string now: '");
    for (size_t n = 0; n < sizeof input / sizeof *input; ++n)
        input[n] ? printf("%lc", input[n]) : printf("\\0");
    puts("'");
}
```

## See also
- [strtokstrtok_s](/c/string/byte/strtok/)
- [C++ documentation](/cpp/string/wide/wcstok/)
