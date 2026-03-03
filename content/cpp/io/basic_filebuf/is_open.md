---
title: "std::basic_filebuf<CharT,Traits>::is_open"
source_path: "cpp/io/basic_filebuf/is_open"
category: "io"
---

Returns true if the most recent call to [open()](/cpp/io/basic_filebuf/open/) succeeded and there has been no call to [close()](/cpp/io/basic_filebuf/close/) since then.

## Declarations
```cpp
bool is_open() const;
```

## Return value
true if the associated file is open, false otherwise.

## Notes
This function is typically called by [std::basic_fstream::is_open()](/cpp/io/basic_fstream/is_open/).

## Example
```cpp
#include <fstream>
#include <iostream>
 
int main()
{
    std::ifstream fs("test.txt");
    std::filebuf fb;
    fb.open("test.txt", std::ios_base::in);
    std::cout << std::boolalpha
              << "direct call: " << fb.is_open() << '\n'
              << "through streambuf: " << fs.rdbuf()->is_open() << '\n'
              << "through fstream: " << fs.is_open() << '\n';
}
```

## See also
- [open](/cpp/io/basic_filebuf/open/)
- [close](/cpp/io/basic_filebuf/close/)
