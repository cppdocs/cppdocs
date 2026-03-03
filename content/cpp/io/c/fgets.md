---
title: "std::fgets"
source_path: "cpp/io/c/fgets"
header: "<cstdio>"
category: "io"
---

Reads at most count - 1 characters from the given file stream and stores them in the character array pointed to by str. Parsing stops if a newline character is found, in which case str will contain that newline character, or if end-of-file occurs. If bytes are read and no errors occur, writes a null character at the position immediately after the last character written to str.

## Declarations
```cpp
char* fgets( char* str, int count, std::FILE* stream );
```

## Parameters
- `str`: pointer to an element of a char array
- `count`: maximum number of characters to write (typically the length of str)
- `stream`: file stream to read the data from

## Return value
str on success, null pointer on failure.

## Notes
[POSIX additionally requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fgets.html) that fgets sets [errno](/cpp/error/errno/) if it encounters a failure other than the end-of-file condition.

Although the standard specification is [unclear](https://stackoverflow.com/questions/23388620) in the cases where count <= 1, common implementations do

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <span>
 
void dump(std::span<const char> buf, std::size_t offset)
{
    std::cout << std::dec;
    for (char ch : buf)
        std::cout << (ch >= ' ' ? ch : '.'), offset--;
    std::cout << std::string(offset, ' ') << std::hex
              << std::setfill('0') << std::uppercase;
    for (unsigned ch : buf)
        std::cout << std::setw(2) << ch << ' ';
    std::cout << std::dec << '\n';
}
 
int main()
{
    std::FILE* tmpf = std::tmpfile();
    std::fputs("Alan Turing\n", tmpf);
    std::fputs("John von Neumann\n", tmpf);
    std::fputs("Alonzo Church\n", tmpf);
 
    std::rewind(tmpf);
    for (char buf[8]; std::fgets(buf, sizeof buf, tmpf) != nullptr;)
        dump(buf, 10);
}
```

## See also
- [scanffscanfsscanf](/cpp/io/c/scanf/)
- [stdin](/cpp/io/c/std_streams/)
- [gets](/cpp/io/c/gets/)
- [stdin](/cpp/io/c/std_streams/)
- [fputs](/cpp/io/c/fputs/)
- [C documentation](/c/io/fgets/)
