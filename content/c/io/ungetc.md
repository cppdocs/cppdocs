---
title: "ungetc"
source_path: "c/io/ungetc"
header: "<stdio.h>"
category: "c"
---

If ch does not equal [EOF](/c/io/), pushes the character ch (reinterpreted as unsigned char) into the input buffer associated with the stream stream in such a manner that subsequent read operation from stream will retrieve that character. The external device associated with the stream is not modified.

## Declarations
```cpp
int ungetc( int ch, FILE* stream );
```

## Parameters
- `ch`: character to be pushed into the input stream buffer
- `stream`: file stream to put the character back to

## Return value
On success ch is returned.

## Notes
The size of the pushback buffer varies in practice from 4k (Linux, MacOS) to as little as 4 (Solaris) or the guaranteed minimum 1 (HPUX, AIX).

The apparent size of the pushback buffer may be larger if the character that is pushed back equals the character existing at that location in the external character sequence (the implementation may simply decrement the read file position indicator and avoid maintaining a pushback buffer).

## Example
```cpp
#include <ctype.h>
#include <stdio.h>
 
void demo_scanf(const char* fmt, FILE* s)
{
    while (*fmt != '\0')
    {
        if (*fmt == '%')
        {
            int c;
            switch (*++fmt)
            {
                case 'u':
                    while (isspace(c=getc(s))) {}
                    unsigned int num = 0;
                    while (isdigit(c))
                    {
                        num = num*10 + c-'0';
                        c = getc(s);
                    }
                    printf("%%u scanned %u\n", num);
                    ungetc(c, s);
                    break;
                case 'c':
                    c = getc(s);
                    printf("%%c scanned '%c'\n", c);
                    break;
            }
        }
        else
            ++fmt;
    }
}
 
int main(void)
{
    FILE* f = fopen("input.txt", "w+");
    if (f != NULL)
    {
        fputs("123x", f);
        rewind(f);
        demo_scanf("%u%c", f);
        fclose(f);
    }
    return 0;
}
```

## See also
- [fgetcgetc](/c/io/fgetc/)
- [C++ documentation](/cpp/io/c/ungetc/)
