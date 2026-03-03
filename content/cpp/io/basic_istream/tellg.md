---
title: "std::basic_istream<CharT,Traits>::tellg"
source_path: "cpp/io/basic_istream/tellg"
category: "io"
---

Returns input position indicator of the current associated streambuf object.

## Declarations
```cpp
pos_type tellg();
```

## Return value
The current position of the get pointer on success, pos_type(-1) on failure.

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    std::string str = "Hello, world";
    std::istringstream in(str);
    std::string word;
    in >> word;
    std::cout << "After reading the word \"" << word
              << "\" tellg() returns " << in.tellg() << '\n';
}
```

## See also
- [seekoff](/cpp/io/basic_filebuf/seekoff/)
- [seekoff](/cpp/io/basic_stringbuf/seekoff/)
- [seekoff](/cpp/io/strstreambuf/seekoff/)
- [seekg](/cpp/io/basic_istream/seekg/)
- [tellp](/cpp/io/basic_ostream/tellp/)
- [seekp](/cpp/io/basic_ostream/seekp/)
