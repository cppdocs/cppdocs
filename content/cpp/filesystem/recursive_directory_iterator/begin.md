---
title: "std::filesystem::begin(recursive_directory_iterator), std::filesystem::end(recursive_directory_iterator)"
source_path: "cpp/filesystem/recursive_directory_iterator/begin"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1) Returns iter unchanged.

## Declarations
```cpp
recursive_directory_iterator begin( recursive_directory_iterator iter ) noexcept;
```
_(since C++17)_

```cpp
recursive_directory_iterator end( recursive_directory_iterator ) noexcept;
```
_(since C++17)_

## Parameters
- `iter`: a recursive_directory_iterator

## Example
```cpp
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::current_path(fs::temp_directory_path());
    fs::create_directories("sandbox/a/b");
    std::ofstream("sandbox/file1.txt");
    fs::create_symlink("a", "sandbox/syma");
 
    std::cout << "Print dir structure using OS specific command 'tree':\n";
    std::system("tree --noreport sandbox");
 
    std::cout << "\nPrint dir structure using directory iterator:\n";
    for (auto& p : fs::recursive_directory_iterator("sandbox"))
        std::cout << p << '\n';
 
    fs::remove_all("sandbox");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3480 | C++17 | end took the argument by reference | takes the argument by value |

## See also
- [begin(std::filesystem::directory_iterator)end(std::filesystem::directory_iterator)](/cpp/filesystem/directory_iterator/begin/)
