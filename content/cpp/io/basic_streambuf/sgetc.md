---
title: "std::basic_streambuf<CharT,Traits>::sgetc"
source_path: "cpp/io/basic_streambuf/sgetc"
category: "io"
---

Reads one character from the input sequence.

## Declarations
```cpp
int_type sgetc();
```

## Return value
The value of the character pointed to by the get pointer.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    std::stringstream stream("Hello, world");
    std::cout << "sgetc() returned '" << (char)stream.rdbuf()->sgetc() << "'\n";
    std::cout << "peek() returned '" << (char)stream.peek() << "'\n";
    std::cout << "get() returned '" << (char)stream.get() << "'\n";
}
```

## See also
- [sbumpcstossc](/cpp/io/basic_streambuf/sbumpc/)
- [snextc](/cpp/io/basic_streambuf/snextc/)
