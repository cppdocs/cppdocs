---
title: "std::ftell"
source_path: "cpp/io/c/ftell"
header: "<cstdio>"
category: "io"
---

Returns the current value of the file position indicator for the file stream stream.

## Declarations
```cpp
long ftell( std::FILE* stream );
```

## Parameters
- `stream`: file stream to examine

## Return value
File position indicator on success or -1L if failure occurs. Also sets [errno](/cpp/error/errno/) on failure.

## Notes
On Windows, [_ftelli64](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/ftell-ftelli64) can be used to work with files larger than 2 GiB.

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <iostream>
 
// If the condition is not met then exit the program with error message.
void check(bool condition, const char* func, int line)
{
    if (condition)
        return;
    std::perror(func);
    std::cerr << func << " failed in file " << __FILE__ << " at line # " << line - 1
              << '\n';
    std::exit(EXIT_FAILURE);
}
 
int main()
{
    // Prepare an array of FP values.
    constexpr int SIZE {5};
    double A[SIZE] = {1.1, 2.2, 3.3, 4.4, 5.5};
 
    // Write array to a file.
    const char* fname = "/tmp/test.bin";
    FILE* file = std::fopen(fname, "wb");
    check(file != NULL, "fopen()", __LINE__);
 
    const int write_count = std::fwrite(A, sizeof(double), SIZE, file);
    check(write_count == SIZE, "fwrite()", __LINE__);
 
    std::fclose(file);
 
    // Read the FP values into array B.
    double B[SIZE];
    file = std::fopen(fname, "rb");
    check(file != NULL, "fopen()", __LINE__);
 
    long pos = std::ftell(file); // position indicator at start of file
    check(pos != -1L, "ftell()", __LINE__);
    std::cout << "pos: " << pos << '\n';
 
    const int read_count = std::fread(B, sizeof(double), 1, file); // read one FP value
    check(read_count == 1, "fread()", __LINE__);
 
    pos = std::ftell(file); // position indicator after reading one FP value
    check(pos != -1L, "ftell()", __LINE__);
    std::cout << "pos: " << pos << '\n';
    std::cout << "B[0]: " << B[0] << '\n'; // print one FP value
 
    return EXIT_SUCCESS;
}
```

## See also
- [fgetpos](/cpp/io/c/fgetpos/)
- [fseek](/cpp/io/c/fseek/)
- [fsetpos](/cpp/io/c/fsetpos/)
- [tellg](/cpp/io/basic_istream/tellg/)
- [tellp](/cpp/io/basic_ostream/tellp/)
- [C documentation](/c/io/ftell/)
