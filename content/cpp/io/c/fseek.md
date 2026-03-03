---
title: "std::fseek"
source_path: "cpp/io/c/fseek"
header: "<cstdio>"
category: "io"
---

Sets the file position indicator for the file stream stream.

## Declarations
```cpp
int fseek( std::FILE* stream, long offset, int origin );
```

## Parameters
- `stream`: file stream to modify
- `offset`: number of characters to shift the position relative to origin
- `origin`: position to which offset is added. It can have one of the following values: SEEK_SET, SEEK_CUR, SEEK_END

## Return value
0 upon success, nonzero value otherwise.

## Notes
After seeking to a non-end position in a wide stream, the next call to any output function may render the remainder of the file undefined, e.g. by outputting a multibyte sequence of a different length.

POSIX allows seeking beyond the existing end of file. If an output is performed after this seek, any read from the gap will return zero bytes. Where supported by the filesystem, this creates a sparse file.

POSIX also requires that fseek first performs [fflush](/cpp/io/c/fflush/) if there are any unwritten data (but whether the shift state is restored is implementation-defined). The standard C++ file streams guarantee both flushing and unshifting: [std::basic_filebuf::seekoff](/cpp/io/basic_streambuf/pubseekoff/).

POSIX specifies, that [fseek](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fseek.html) should return -1 on error, and set [errno](/cpp/error/errno/) to indicate the error.

On Windows, [_fseeki64](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/fseek-fseeki64) can be used to work with files larger than 2 GiB.

## Example
```cpp
#include <cassert>
#include <cstdio>
#include <cstdint>
#include <fstream>
#include <vector>
 
int main()
{
    std::ofstream("dummy.nfo") << "8 bytes\n"; // create the file
 
    std::FILE* fp = std::fopen("dummy.nfo", "rb");
    assert(fp);
 
    std::fseek(fp, 0, SEEK_END); // seek to end
    const std::size_t filesize = std::ftell(fp);
    std::vector<std::uint8_t> buffer(filesize);
 
    std::fseek(fp, 0, SEEK_SET); // seek to start
    std::fread(buffer.data(), sizeof(std::uint8_t), buffer.size(), fp);
 
    std::fclose(fp);
    std::printf("I've read %zi bytes\n", filesize);
}
```

## See also
- [fsetpos](/cpp/io/c/fsetpos/)
- [fgetpos](/cpp/io/c/fgetpos/)
- [ftell](/cpp/io/c/ftell/)
- [rewind](/cpp/io/c/rewind/)
- [C documentation](/c/io/fseek/)
