---
title: "strtok, strtok_s"
source_path: "c/string/byte/strtok"
header: "<string.h>"
category: "c"
---

1) Finds the next token in a null-terminated byte string pointed to by str. The separator characters are identified by null-terminated byte string pointed to by delim.

## Declarations
```cpp
char* strtok( char* str, const char* delim );
```
_(until C99)_

```cpp
char* strtok( char* restrict str, const char* restrict delim );
```
_(since C99)_

```cpp
char* strtok_s( char* restrict str, rsize_t* restrict strmax,
const char* restrict delim, char** restrict ptr );
```
_(since C11)_

## Parameters
- `str`: pointer to the null-terminated byte string to tokenize
- `delim`: pointer to the null-terminated byte string identifying delimiters
- `strmax`: pointer to an object which initially holds the size of str: strtok_s stores the number of characters that remain to be examined
- `ptr`: pointer to an object of type char*, which is used by strtok_s to store its internal state

## Return value
Returns pointer to the beginning of the next token or a null pointer if there are no more tokens.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    char input[] = "A bird came down the walk";
    printf("Parsing the input string '%s'\n", input);
    char* token = strtok(input, " ");
    while (token)
    {
        puts(token);
        token = strtok(NULL, " ");
    }
 
    printf("Contents of the input string now: '");
    for (size_t n = 0; n < sizeof input; ++n)
        input[n] ? putchar(input[n]) : fputs("\\0", stdout);
    puts("'");
 
#ifdef __STDC_LIB_EXT1__
    char str[] = "A bird came down the walk";
    rsize_t strmax = sizeof str;
    const char* delim = " ";
    char* next_token;
    printf("Parsing the input string '%s'\n", str);
    token = strtok_s(str, &strmax, delim, &next_token);
    while (token)
    {
        puts(token);
        token = strtok_s(NULL, &strmax, delim, &next_token);
    }
 
    printf("Contents of the input string now: '");
    for (size_t n = 0; n < sizeof str; ++n)
        str[n] ? putchar(str[n]) : fputs("\\0", stdout);
    puts("'");
#endif
}
```

## See also
- [strpbrk](/c/string/byte/strpbrk/)
- [strcspn](/c/string/byte/strcspn/)
- [strspn](/c/string/byte/strspn/)
- [wcstokwcstok_s](/c/string/wide/wcstok/)
- [C++ documentation](/cpp/string/byte/strtok/)
