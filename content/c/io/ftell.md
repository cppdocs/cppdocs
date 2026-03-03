---
title: "ftell"
source_path: "c/io/ftell"
header: "<stdio.h>"
category: "c"
---

Returns the file position indicator for the file stream stream.

## Declarations
```cpp
long ftell( FILE* stream );
```

## Parameters
- `stream`: file stream to examine

## Return value
File position indicator on success or -1L if failure occurs.

## Notes
On Windows, [_ftelli64](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/ftell-ftelli64) can be used to work with files larger than 2 GiB.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
/* If the condition is not met then exit the program with error message. */
void check(_Bool condition, const char* func, int line)
{
    if (condition)
        return;
    perror(func);
    fprintf(stderr, "%s failed in file %s at line # %d\n", func, __FILE__, line - 1);
    exit(EXIT_FAILURE);
}
 
int main(void)
{
    /* Prepare an array of FP values. */
    #define SIZE 5
    double A[SIZE] = {1.1, 2.0, 3.0, 4.0, 5.0};
 
    /* Write array to a file. */
    const char* fname = "/tmp/test.bin";
    FILE* file = fopen(fname, "wb");
    check(file != NULL, "fopen()", __LINE__);
 
    const int write_count = fwrite(A, sizeof(double), SIZE, file);
    check(write_count == SIZE, "fwrite()", __LINE__);
 
    fclose(file);
 
    /* Read the FP values into array B. */
    double B[SIZE];
    file = fopen(fname, "rb");
    check(file != NULL, "fopen()", __LINE__);
 
    long int pos = ftell(file); /* position indicator at start of file */
    check(pos != -1L, "ftell()", __LINE__);
    printf("pos: %ld\n", pos);
 
    const int read_count = fread(B, sizeof(double), 1, file); /* read one FP value */
    check(read_count == 1, "fread()", __LINE__);
 
    pos = ftell(file); /* position indicator after reading one FP value */
    check(pos != -1L, "ftell()", __LINE__);
    printf("pos: %ld\n", pos);
    printf("B[0]: %.1f\n", B[0]); /* print one FP value */
 
    return EXIT_SUCCESS;
}
```

## See also
- [fgetpos](/c/io/fgetpos/)
- [fseek](/c/io/fseek/)
- [fsetpos](/c/io/fsetpos/)
- [C++ documentation](/cpp/io/c/ftell/)
