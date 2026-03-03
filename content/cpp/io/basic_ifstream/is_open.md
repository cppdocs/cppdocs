---
title: "std::basic_ifstream<CharT,Traits>::is_open"
source_path: "cpp/io/basic_ifstream/is_open"
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
 
// this file is called main.cpp
 
bool file_exists(const std::string& str)
{
    std::ifstream fs(str);
    return fs.is_open();
}
 
int main()
{
    std::boolalpha(std::cout);
    std::cout << file_exists("main.cpp")  << '\n'
              << file_exists("strange_file") << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 365 | C++98 | is_open was not declared with const qualifier | declared with const qualifier |

## See also
- [open](/cpp/io/basic_ifstream/open/)
- [close](/cpp/io/basic_ifstream/close/)
