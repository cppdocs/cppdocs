---
title: "std::fread"
source_path: "cpp/io/c/fread"
header: "<cstdio>"
category: "io"
---

Reads up to count objects into the array buffer from the given input stream stream as if by calling [std::fgetc](/cpp/io/c/fgetc/) size times for each object, and storing the results, in the order obtained, into the successive positions of buffer, which is reinterpreted as an array of unsigned char. The file position indicator for the stream is advanced by the number of characters read.

## Declarations
```cpp
std::size_t fread( void* buffer, std::size_t size, std::size_t count, std::FILE* stream );
```

## Parameters
- `buffer`: pointer to the first object in the array to be read
- `size`: size of each object in bytes
- `count`: the number of the objects to be read
- `stream`: input file stream to read from

## Return value
Number of objects read successfully, which may be less than count if an error or end-of-file condition occurs.

## Example
```cpp
#include <cstddef>
#include <cstdio>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <vector>
 
int main()
{
    // Prepare file
    std::ofstream("test.txt") << 1 << ' ' << 2 << '\n';
    std::FILE* f = std::fopen("test.txt", "r");
 
    std::vector<char> buf(4); // char is trivially copyable
    const std::size_t n = std::fread(&buf[0], sizeof buf[0], buf.size(), f);
 
    std::cout << "Read " << n << " object" << (n > 1 ? "s" : "") << ": "
              << std::hex << std::uppercase << std::setfill('0');
    for (char n : buf)
        std::cout << "0x" << std::setw(2) << static_cast<short>(n) << ' ';
    std::cout << '\n';
 
    std::vector<std::string> buf2; // string is not trivially copyable
//  This would result in undefined behavior:
//  std::fread(&buf2[0], sizeof buf2[0], buf2.size(), f);
}
```

## See also
- [scanffscanfsscanf](/cpp/io/c/scanf/)
- [stdin](/cpp/io/c/std_streams/)
- [fgets](/cpp/io/c/fgets/)
- [fwrite](/cpp/io/c/fwrite/)
- [C documentation](/c/io/fread/)
