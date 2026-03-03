---
title: "std::filesystem::begin(directory_iterator), std::filesystem::end(directory_iterator)"
source_path: "cpp/filesystem/directory_iterator/begin"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1) Returns iter unchanged.

## Declarations
```cpp
directory_iterator begin( directory_iterator iter ) noexcept;
```
_(since C++17)_

```cpp
directory_iterator end( directory_iterator ) noexcept;
```
_(since C++17)_

## Parameters
- `iter`: a directory_iterator

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::create_directories("sandbox/a/b");
    std::ofstream("sandbox/file1.txt");
    std::ofstream("sandbox/file2.txt");
    for (auto& p : fs::directory_iterator("sandbox"))
        std::cout << p << '\n';
    fs::remove_all("sandbox");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3480 | C++17 | end took the argument by reference | takes the argument by value |

## See also
- [begin(std::filesystem::recursive_directory_iterator)end(std::filesystem::recursive_directory_iterator)](/cpp/filesystem/recursive_directory_iterator/begin/)
