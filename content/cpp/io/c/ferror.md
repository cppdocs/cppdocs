---
title: "std::ferror"
source_path: "cpp/io/c/ferror"
header: "<cstdio>"
category: "io"
---

Checks the given stream for errors.

## Declarations
```cpp
int ferror( std::FILE* stream );
```

## Parameters
- `stream`: the file stream to check

## Return value
Nonzero value if the file stream has errors occurred, 0 otherwise.

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <cstdlib>
#include <cwchar>
 
int main()
{
    const char *fname = std::tmpnam(nullptr);
    std::FILE* f = std::fopen(fname, "wb");
    std::fputs("\xff\xff\n", f); // not a valid UTF-8 character sequence
    std::fclose(f);
 
    std::setlocale(LC_ALL, "en_US.utf8");
    f = std::fopen(fname, "rb");
    std::wint_t ch;
    while ((ch=std::fgetwc(f)) != WEOF) // attempt to read as UTF-8
        std::printf("%#x ", ch);
 
    if (std::feof(f))
        puts("EOF indicator set");
    if (std::ferror(f))
        puts("Error indicator set");
}
```

## See also
- [clearerr](/cpp/io/c/clearerr/)
- [feof](/cpp/io/c/feof/)
- [fail](/cpp/io/basic_ios/fail/)
- [C documentation](/c/io/ferror/)
