---
title: "fgetpos"
source_path: "c/io/fgetpos"
header: "<stdio.h>"
category: "c"
---

Obtains the file position indicator and the current parse state (if any) for the file stream stream and stores them in the object pointed to by pos. The value stored is only meaningful as the input to [fsetpos](/c/io/fsetpos/).

## Declarations
```cpp
int fgetpos( FILE* stream, fpos_t* pos );
```
_(until C99)_

```cpp
int fgetpos( FILE* restrict stream, fpos_t* restrict pos );
```
_(since C99)_

## Parameters
- `stream`: file stream to examine
- `pos`: pointer to a fpos_t object to store the file position indicator to

## Return value
0 upon success, nonzero value otherwise.

## Example
```cpp
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    // prepare a file holding 4 values of type double
    enum {SIZE = 4};
    FILE* fp = fopen("test.bin", "wb");
    assert(fp);
    int rc = fwrite((double[SIZE]){1.1, 2.2, 3.3, 4.4}, sizeof(double), SIZE, fp);
    assert(rc == SIZE);
    fclose(fp);
 
    // demo using fsetpos to return to the beginning of a file
    fp = fopen("test.bin", "rb");
    fpos_t pos;
    fgetpos(fp, &pos);               // store start of file in pos
    double d;
    rc = fread(&d, sizeof d, 1, fp); // read the first double
    assert(rc == 1);
    printf("First value in the file: %.1f\n", d);
    fsetpos(fp,&pos);                // move file position back to the start of the file
    rc = fread(&d, sizeof d, 1, fp); // read the first double again
    assert(rc == 1);
    printf("First value in the file again: %.1f\n", d);
    fclose(fp);
 
    // demo error handling
    rc = fsetpos(stdin, &pos);
    if (rc)
        perror("could not fsetpos stdin");
}
```

## See also
- [ftell](/c/io/ftell/)
- [fseek](/c/io/fseek/)
- [fsetpos](/c/io/fsetpos/)
- [C++ documentation](/cpp/io/c/fgetpos/)
