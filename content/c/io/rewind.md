---
title: "rewind"
source_path: "c/io/rewind"
header: "<stdio.h>"
category: "c"
---

Moves the file position indicator to the beginning of the given file stream.

## Declarations
```cpp
void rewind( FILE *stream );
```

## Parameters
- `stream`: file stream to modify

## Return value
(none)

## Example
```cpp
#include <stdio.h>
 
char str[20];
 
int main(void)
{
    FILE *f;
    char ch;
 
    f = fopen("file.txt", "w");
    for (ch = '0'; ch <= '9'; ch++) {
        fputc(ch, f);
    }
    fclose(f);
 
    f = fopen("file.txt", "r");
    fread(str, 1, 10, f);
    puts(str);
 
    rewind(f);
    fread(str, 1, 10, f);
    puts(str);
    fclose(f);
 
    return 0;
}
```

## See also
- [fseek](/c/io/fseek/)
- [C++ documentation](/cpp/io/c/rewind/)
