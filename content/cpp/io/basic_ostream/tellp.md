---
title: "std::basic_ostream<CharT,Traits>::tellp"
source_path: "cpp/io/basic_ostream/tellp"
category: "io"
---

Returns the output position indicator of the current associated streambuf object.

## Declarations
```cpp
pos_type tellp();
```

## Return value
current output position indicator on success, pos_type(-1) if a failure occurs.

## Example
```cpp
#include <iostream>
#include <sstream>
int main()
{
    std::ostringstream s;
    std::cout << s.tellp() << '\n';
    s << 'h';
    std::cout << s.tellp() << '\n';
    s << "ello, world ";
    std::cout << s.tellp() << '\n';
    s << 3.14 << '\n';
    std::cout << s.tellp() << '\n' << s.str();
}
```

## See also
- [seekp](/cpp/io/basic_ostream/seekp/)
- [tellg](/cpp/io/basic_istream/tellg/)
- [seekg](/cpp/io/basic_istream/seekg/)
