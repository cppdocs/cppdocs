---
title: "std::experimental::filesystem::begin(directory_iterator), std::experimental::filesystem::end(directory_iterator)"
source_path: "cpp/experimental/fs/directory_iterator/begin"
category: "experimental"
---

1) Returns iter unchanged.

## Declarations
```cpp
directory_iterator begin( directory_iterator iter );
```
_(filesystem TS)_

```cpp
directory_iterator end( const directory_iterator& );
```
_(filesystem TS)_

## Parameters
- `iter`: a directory_iterator

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
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

## See also
- [filesystem::begin(filesystem::recursive_directory_iterator)filesystem::end(filesystem::recursive_directory_iterator)](/cpp/experimental/fs/recursive_directory_iterator/begin/)
