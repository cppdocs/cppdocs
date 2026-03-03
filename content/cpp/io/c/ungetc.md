---
title: "std::ungetc"
source_path: "cpp/io/c/ungetc"
header: "<cstdio>"
category: "io"
---

If ch does not equal [EOF](/cpp/io/c/), pushes the character ch (reinterpreted as unsigned char) into the input buffer associated with the stream stream in such a manner than subsequent read operation from stream will retrieve that character. The external device associated with the stream is not modified.

## Declarations
```cpp
int ungetc( int ch, std::FILE *stream );
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
#include <cctype>
#include <cstdio>
 
void demo_scanf(const char* fmt, std::FILE* s)
{
    while (*fmt != '\0') {
        if (*fmt == '%') {
            switch (*++fmt) {
                case 'u': {
                    int c{};
                    while (std::isspace(c=std::getc(s))) {}
                    unsigned int num{};
                    while (std::isdigit(c)) {
                        num = num*10 + c-'0';
                        c = std::getc(s);
                    }
                    std::printf("%%u scanned %u\n", num);
                    std::ungetc(c, s);
                    break;
                }
                case 'c': {
                    int c = std::getc(s);
                    std::printf("%%c scanned '%c'\n", c);
                    break;
                }
            }
        } else {
            ++fmt;
        }
    }
}
 
int main()
{
    if (std::FILE* f = std::fopen("input.txt", "w+")) {
        std::fputs("123x", f);
        std::rewind(f);
        demo_scanf("%u%c", f);
        std::fclose(f);
    }
}
```

## See also
- [fgetcgetc](/cpp/io/c/fgetc/)
- [C documentation](/c/io/ungetc/)
