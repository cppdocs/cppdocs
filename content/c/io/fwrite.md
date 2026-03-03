---
title: "fwrite"
source_path: "c/io/fwrite"
header: "<stdio.h>"
category: "c"
---

Writes count of objects from the given array buffer to the output stream stream. The objects are written as if by reinterpreting each object as an array of unsigned char and calling [fputc](/c/io/putc/) size times for each object to write those unsigned chars into stream, in order. The file position indicator for the stream is advanced by the number of characters written.

## Declarations
```cpp
size_t fwrite( const void* buffer, size_t size, size_t count,
FILE* stream );
```
_(until C99)_

```cpp
size_t fwrite( const void* restrict buffer, size_t size, size_t count,
FILE* restrict stream );
```
_(since C99)_

## Parameters
- `buffer`: pointer to the first object in the array to be written
- `size`: size of each object
- `count`: the number of the objects to be written
- `stream`: pointer to the output stream

## Return value
The number of objects written successfully, which may be less than count if an error occurs.

## Example
```cpp
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
 
enum { SIZE = 5 };
 
int main(void)
{
    double a[SIZE] = {1, 2, 3, 4, 5};
    FILE* f1 = fopen("file.bin", "wb");
    assert(f1);
    size_t r1 = fwrite(a, sizeof a[0], SIZE, f1);
    printf("wrote %zu elements out of %d requested\n", r1, SIZE);
    fclose(f1);
 
    double b[SIZE];
    FILE* f2 = fopen("file.bin", "rb");
    size_t r2 = fread(b, sizeof b[0], SIZE, f2);
    fclose(f2);
    printf("read back: ");
    for (size_t i = 0; i < r2; ++i)
        printf("%0.2f ", b[i]);
}
```

## See also
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [fputs](/c/io/fputs/)
- [fread](/c/io/fread/)
- [C++ documentation](/cpp/io/c/fwrite/)
