---
title: "std::fsetpos"
source_path: "cpp/io/c/fsetpos"
header: "<cstdio>"
category: "io"
---

Sets the file position indicator and the multibyte parsing state (if any) for the C file stream stream according to the value pointed to by pos.

## Declarations
```cpp
int fsetpos( std::FILE* stream, const std::fpos_t* pos );
```

## Parameters
- `stream`: file stream to modify
- `pos`: pointer to a fpos_t object obtained from std::fgetpos called on a stream associated with the same file

## Return value
0 upon success, nonzero value otherwise. Also, sets [errno](/cpp/error/errno/) on failure.

## Notes
After seeking to a non-end position in a wide stream, the next call to any output function may render the remainder of the file undefined, e.g. by outputting a multibyte sequence of a different length.

## Example
```cpp
#include <cstdio>
#include <cstdlib>
 
int main()
{
    // Prepare an array of floating-point values.
    const int SIZE = 5;
    double A[SIZE] = {1., 2., 3., 4., 5.};
    // Write array to a file.
    std::FILE * fp = std::fopen("test.bin", "wb");
    std::fwrite(A, sizeof(double), SIZE, fp);
    std::fclose(fp);
 
    // Read the values into array B.
    double B[SIZE];
    fp = std::fopen("test.bin", "rb");
    std::fpos_t pos;
    if (std::fgetpos(fp, &pos) != 0)      // current position: start of file
    {
       std::perror("fgetpos()");
       std::fprintf(stderr, "fgetpos() failed in file %s at line # %d\n",
                    __FILE__, __LINE__-3);
       std::exit(EXIT_FAILURE);
    }
 
    int ret_code = std::fread(B, sizeof(double), 1, fp);      // read one value
    // current position: after reading one value
    std::printf("%.1f; read count = %d\n", B[0], ret_code);   // print one value and ret_code
 
    if (std::fsetpos(fp, &pos) != 0)   // reset current position to start of file
    {
       if (std::ferror(fp))
       {
          std::perror("fsetpos()");
          std::fprintf(stderr, "fsetpos() failed in file %s at line # %d\n",
                       __FILE__, __LINE__-5);
          std::exit(EXIT_FAILURE);
       }
    }
 
    ret_code = std::fread(B, sizeof(double), 1, fp);         // re-read first value
    std::printf("%.1f; read count = %d\n", B[0], ret_code);  // print one value and ret_code
    std::fclose(fp);
 
    return EXIT_SUCCESS; 
}
```

## See also
- [fgetpos](/cpp/io/c/fgetpos/)
- [ftell](/cpp/io/c/ftell/)
- [fseek](/cpp/io/c/fseek/)
- [C documentation](/c/io/fsetpos/)
