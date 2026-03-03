---
title: "std::experimental::filesystem::begin(recursive_directory_iterator), std::experimental::filesystem::end(recursive_directory_iterator)"
source_path: "cpp/experimental/fs/recursive_directory_iterator/begin"
category: "experimental"
---

1) Returns iter unchanged.

## Declarations
```cpp
recursive_directory_iterator begin( recursive_directory_iterator iter );
```
_(filesystem TS)_

```cpp
recursive_directory_iterator end( const recursive_directory_iterator& );
```
_(filesystem TS)_

## Parameters
- `iter`: a recursive_directory_iterator

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
    fs::create_symlink("a", "sandbox/syma");
    for (auto& p : fs::recursive_directory_iterator("sandbox"))
        std::cout << p << '\n';
    fs::remove_all("sandbox");
}
```

## See also
- [filesystem::begin(filesystem::directory_iterator)filesystem::end(filesystem::directory_iterator)](/cpp/experimental/fs/directory_iterator/begin/)
