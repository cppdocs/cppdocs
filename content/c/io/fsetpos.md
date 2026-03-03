---
title: "fsetpos"
source_path: "c/io/fsetpos"
header: "<stdio.h>"
category: "c"
---

Sets the file position indicator and the multibyte parsing state (if any) for the file stream stream according to the value pointed to by pos.

## Declarations
```cpp
int fsetpos( FILE* stream, const fpos_t* pos );
```

## Parameters
- `stream`: file stream to modify
- `pos`: pointer to a fpos_t object to use as new value of file position indicator

## Return value
0 upon success, nonzero value otherwise.

## Notes
After seeking to a non-end position in a wide stream, the next call to any output function may render the remainder of the file undefined, e.g. by outputting a multibyte sequence of a different length.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    // Prepare an array of FP (floating-point) values.
    #define SIZE 5
    double A[SIZE] = {1.0, 2.0, 3.0, 4.0, 5.0};
    // Write array to a file.
    FILE * fp = fopen("test.bin", "wb");
    fwrite(A,sizeof(double),SIZE,fp);
    fclose (fp);
 
    // Read the FP values into array B.
    double B[SIZE];
    fp = fopen("test.bin","rb");
    fpos_t pos;
    if (fgetpos(fp, &pos)) // current position: start of file
    {
        perror("fgetpos()");
        fprintf(stderr, "fgetpos() failed in file %s at line # %d\n",
                __FILE__, __LINE__ - 3);
        exit(EXIT_FAILURE);
    }
 
    int ret_code = fread(B,sizeof(double),1,fp); // read one FP value
    // current position: after reading one f-p value
    printf("%.1f; read count = %d\n", B[0], ret_code); // print one FP value and ret_code
 
    if (fsetpos(fp, &pos)) // reset current position to start of file
    {
        if (ferror(fp))
        {
            perror("fsetpos()");
            fprintf(stderr, "fsetpos() failed in file %s at line # %d\n", __FILE__,
                    __LINE__ - 5);
            exit(EXIT_FAILURE);
        }
    }
 
    ret_code = fread(B, sizeof(double), 1, fp); // reread first FP value
    printf("%.1f; read count = %d\n", B[0], ret_code); // print one FP value and ret_code
    fclose(fp);
 
    return EXIT_SUCCESS;
}
```

## See also
- [fgetpos](/c/io/fgetpos/)
- [ftell](/c/io/ftell/)
- [fseek](/c/io/fseek/)
- [C++ documentation](/cpp/io/c/fsetpos/)
