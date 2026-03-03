---
title: "std::basic_fstream<CharT,Traits>::is_open"
source_path: "cpp/io/basic_fstream/is_open"
category: "io"
---

Checks if the file stream has an associated file.

## Declarations
```cpp
bool is_open() const;
```

## Return value
true if the file stream has an associated file, false otherwise.

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    std::string filename = "some_file";
 
    std::fstream fs(filename, std::ios::in);
 
    std::cout << std::boolalpha;
    std::cout << "fs.is_open() = " << fs.is_open() << '\n';
 
    if (!fs.is_open())
    {
        fs.clear();
        fs.open(filename, std::ios::out);
        std::cout << "fs.is_open() = " << fs.is_open() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 365 | C++98 | is_open was not declared with const qualifier | declared with const qualifier |

## See also
- [open](/cpp/io/basic_fstream/open/)
- [close](/cpp/io/basic_fstream/close/)
