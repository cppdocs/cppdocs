---
title: "std::filesystem::operator/(std::filesystem::path)"
source_path: "cpp/filesystem/path/operator"
category: "filesystem"
since: "C++17"
---

Concatenates two path components using the preferred directory separator if appropriate (see [operator/=](/cpp/filesystem/path/append/) for details).

## Declarations
```cpp
friend path operator/( const path& lhs, const path& rhs );
```
_(since C++17)_

## Parameters
- `lhs, rhs`: paths to concatenate

## Return value
The result of path concatenation.

## Example
```cpp
#include <filesystem>
#include <iostream>
 
int main()
{
#   if defined(_WIN32) // see e.g. stackoverflow.com/questions/142508
 
    std::filesystem::path p = "C:";
 
    std::cout << "\"C:\" / \"Users\" / \"batman\" == " << p / "Users" / "batman" << '\n';
 
#   else // __linux__ etc
 
    std::filesystem::path p = "/home";
 
    std::cout << "\"/home\" / \"tux\" / \".fonts\" == " << p / "tux" / ".fonts" << '\n';
 
#   endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3065 | C++17 | allowed concatenating everything convertible to path in the presence of a using-directive | made hidden friend |

## See also
- [appendoperator/=](/cpp/filesystem/path/append/)
