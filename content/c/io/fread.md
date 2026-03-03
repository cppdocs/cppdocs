---
title: "fread"
source_path: "c/io/fread"
header: "<stdio.h>"
category: "c"
---

Reads up to count objects into the array buffer from the given input stream stream as if by calling [fgetc](/c/io/fgetc/) size times for each object, and storing the results, in the order obtained, into the successive positions of buffer, which is reinterpreted as an array of unsigned char. The file position indicator for the stream is advanced by the number of characters read.

## Declarations
```cpp
size_t fread( void *buffer, size_t size, size_t count,
FILE *stream );
```
_(until C99)_

```cpp
size_t fread( void *restrict buffer, size_t size, size_t count,
FILE *restrict stream );
```
_(since C99)_

## Parameters
- `buffer`: pointer to the array where the read objects are stored
- `size`: size of each object in bytes
- `count`: the number of the objects to be read
- `stream`: the stream to read

## Return value
Number of objects read successfully, which may be less than count if an error or end-of-file condition occurs.

## Example
```cpp
#include <stdio.h>
 
enum { SIZE = 5 };
 
int main(void)
{
    const double a[SIZE] = {1.0, 2.0, 3.0, 4.0, 5.0};
    printf("Array has size %ld bytes, element size: %ld\n", sizeof a, sizeof *a);
    FILE *fp = fopen("test.bin", "wb"); // must use binary mode
    fwrite(a, sizeof *a, SIZE, fp); // writes an array of doubles
    fclose(fp);
 
    double b[SIZE];
    fp = fopen("test.bin","rb");
    const size_t ret_code = fread(b, sizeof b[0], SIZE, fp); // reads an array of doubles
    if (ret_code == SIZE)
    {
        printf("Array at %p read successfully, contents:\n", (void*)&a);
        for (int n = 0; n != SIZE; ++n)
            printf("%f ", b[n]);
        putchar('\n');
    }
    else // error handling
    {
        if (feof(fp))
            printf("Error reading test.bin: unexpected end of file\n");
        else if (ferror(fp))
            perror("Error reading test.bin");
    }
 
    fclose(fp);
}
```

## See also
- [scanffscanfsscanfscanf_sfscanf_ssscanf_s](/c/io/fscanf/)
- [stdin](/c/io/std_streams/)
- [fgets](/c/io/fgets/)
- [fwrite](/c/io/fwrite/)
- [C++ documentation](/cpp/io/c/fread/)
