---
title: "fseek"
source_path: "c/io/fseek"
header: "<stdio.h>"
category: "c"
---

Sets the file position indicator for the file stream stream to the value pointed to by offset.

## Declarations
```cpp
int fseek( FILE* stream, long offset, int origin );
```

```cpp
#define SEEK_SET /* unspecified */
#define SEEK_CUR /* unspecified */
#define SEEK_END /* unspecified */
```

## Parameters
- `stream`: file stream to modify
- `offset`: number of characters to shift the position relative to origin
- `origin`: position to which offset is added. It can have one of the following values: SEEK_SET, SEEK_CUR, SEEK_END

## Return value
0 upon success, nonzero value otherwise.

## Notes
After seeking to a non-end position in a wide stream, the next call to any output function may render the remainder of the file undefined, e.g. by outputting a multibyte sequence of a different length.

For text streams, the only valid values of offset are 0 (applicable to any origin) and a value returned by an earlier call to [ftell](/c/io/ftell/) (only applicable to [SEEK_SET](/c/io/)).

POSIX allows seeking beyond the existing end of file. If an output is performed after this seek, any read from the gap will return zero bytes. Where supported by the filesystem, this creates a sparse file.

POSIX also requires that fseek first performs [fflush](/c/io/fflush/) if there are any unwritten data (but whether the shift state is restored is implementation-defined).

POSIX specifies, that [fseek](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fseek.html) should return -1 on error, and set [errno](/c/error/errno/) to indicate the error.

On Windows, [_fseeki64](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/fseek-fseeki64) can be used to work with files larger than 2 GiB.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    // Prepare an array of double values.
    #define SIZE 5
    double A[SIZE] = {1.0, 2.0, 3.0, 4.0, 5.0};
 
    // Write array to a file.
    FILE * fp = fopen("test.bin", "wb");
    fwrite(A, sizeof(double), SIZE, fp);
    fclose (fp);
 
    // Read the double values into array B.
    double B[SIZE];
    fp = fopen("test.bin", "rb");
 
    // Set the file position indicator in front of third double value.
    if (fseek(fp, sizeof(double) * 2L, SEEK_SET) != 0)
    {
        fprintf(stderr, "fseek() failed in file %s at line # %d\n",
                __FILE__, __LINE__ - 2);
        fclose(fp);
        return EXIT_FAILURE;
    }
 
    int ret_code = fread(B, sizeof(double), 1, fp); // reads one double value
    printf("ret_code == %d\n", ret_code);           // prints the number of values read
    printf("B[0] == %.1f\n", B[0]);                 // prints one value
 
    fclose(fp);
    return EXIT_SUCCESS;
}
```

## See also
- [fsetpos](/c/io/fsetpos/)
- [fgetpos](/c/io/fgetpos/)
- [ftell](/c/io/ftell/)
- [rewind](/c/io/rewind/)
- [C++ documentation](/cpp/io/c/fseek/)
