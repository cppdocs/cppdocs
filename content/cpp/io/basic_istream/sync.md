---
title: "std::basic_istream<CharT,Traits>::sync"
source_path: "cpp/io/basic_istream/sync"
category: "io"
---

Synchronizes the input buffer with the associated data source.

## Declarations
```cpp
int sync();
```

## Return value
0 on success, -1 on failure or if the stream does not support this operation (is unbuffered).

## Notes
As with [readsome()](/cpp/io/basic_istream/readsome/), it is implementation-defined whether this function does anything with library-supplied streams. The intent is typically for the next read operation to pick up any changes that may have been made to the associated input sequence after the stream buffer last filled its get area. To achieve that, sync() may empty the get area, or it may refill it, or it may do nothing. A notable exception is Visual Studio, where this operation discards the unprocessed input when called with a standard input stream.

## Example
```cpp
#include <fstream>
#include <iostream>
 
void file_abc()
{
    std::ofstream f("test.txt");
    f << "abc\n";
}
 
void file_123()
{
    std::ofstream f("test.txt");
    f << "123\n";
}
 
int main()
{
    file_abc(); // file now contains "abc"
    std::ifstream f("test.txt");
    std::cout << "Reading from the file\n";
    char c;
    f >> c;
    std::cout << c;
    file_123(); // file now contains "123"
    f >> c;
    std::cout << c;
    f >> c;
    std::cout << c << '\n';
    f.close();
 
    file_abc(); // file now contains "abc"
    f.open("test.txt");
    std::cout << "Reading from the file, with sync()\n";
    f >> c;
    std::cout << c;
    file_123(); // file now contains "123"
    f.sync();
    f >> c;
    std::cout << c;
    f >> c;
    std::cout << c << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 62 | C++98 | sync() returned traits::eof() if rdbuf()->pubsync() returns -1 | returns -1 in this case |

## See also
- [sync](/cpp/io/basic_streambuf/pubsync/)
- [flush](/cpp/io/basic_ostream/flush/)
