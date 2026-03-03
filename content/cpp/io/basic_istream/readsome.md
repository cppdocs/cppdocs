---
title: "std::basic_istream<CharT,Traits>::readsome"
source_path: "cpp/io/basic_istream/readsome"
category: "io"
---

Extracts up to count immediately available characters from the input stream. The extracted characters are stored into the character array pointed to by s.

## Declarations
```cpp
std::streamsize readsome( char_type* s, std::streamsize count );
```

## Parameters
- `s`: pointer to the character array to store the characters to
- `count`: maximum number of characters to read

## Return value
The number of characters actually extracted.

## Notes
The behavior of this function is highly implementation-specific. For example, using readsome() with [std::ifstream](/cpp/io/basic_ifstream/) leads to significant, implementation-specific outcomes. Some library implementations fill the underlying filebuf with data as soon as [std::ifstream](/cpp/io/basic_ifstream/) opens a file, which means readsome() always reads data and could even read the entire file. With other implementations, [std::ifstream](/cpp/io/basic_ifstream/) only reads from a file when an input operation is invoked, which means calling readsome() immediately after opening the file never extracts any characters. Similarly, calling [std::cin](/cpp/io/cin/).readsome() may return all pending, unprocessed console input or may always return zero and extract no characters.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <sstream>
 
int main()
{
    char c[10] = "*********"; // c[9] == '\0'
 
    // std::stringbuf makes its entire buffer available for unblocking read
    std::istringstream input("This is sample text.");
 
    auto r = input.readsome(c, 5); // reads 'This ' and stores in c[0] .. c[4]
    assert(r == 5);
    std::cout << c << '\n';
 
    r = input.readsome(c, 9); // reads 'is sample' and stores in c[0] .. c[8]
    assert(r == 9);
    std::cout << c << '\n';
}
```

## See also
- [read](/cpp/io/basic_istream/read/)
- [in_avail](/cpp/io/basic_streambuf/in_avail/)
