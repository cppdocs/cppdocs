---
title: "std::basic_filebuf<CharT,Traits>::showmanyc"
source_path: "cpp/io/basic_filebuf/showmanyc"
category: "io"
---

If implemented, returns the number of characters left to read from the file.

## Declarations
```cpp
protected:
virtual std::streamsize showmanyc()
```

## Return value
The number of characters available for reading from the file, or -1 if the end of file was reached.

## Notes
This function is optional. If not implemented, this function returns 0 (since the base class version std::basic_streambuf::showmanyc gets called)

Whether implemented or not, this function is normally called by std::basic_streambuf::in_avail if the get area is empty.

The name of this function stands for "stream: how many characters?", so it is pronounced "S how many C", rather than "show many C"

## Example
```cpp
#include <fstream>
#include <iostream>
 
struct mybuf : std::filebuf
{
     using std::filebuf::showmanyc;
};
 
int main()
{
    mybuf fin;
    fin.open("main.cpp", std::ios_base::in);
    std::cout << "showmanyc() returns " << fin.showmanyc() << '\n';
}
```

## See also
- [in_avail](/cpp/io/basic_streambuf/in_avail/)
- [readsome](/cpp/io/basic_istream/readsome/)
