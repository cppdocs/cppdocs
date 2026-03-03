---
title: "std::experimental::filesystem::path::begin, std::experimental::filesystem::path::end"
source_path: "cpp/experimental/fs/path/begin"
category: "experimental"
---

1) Returns an iterator to the first element of the path. If the path is empty, the returned iterator is equal to end().

## Declarations
```cpp
iterator begin() const;
```
_(filesystem TS)_

```cpp
iterator end() const;
```
_(filesystem TS)_

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = "C:\\users\\abcdef\\AppData\\Local\\Temp\\";
    std::cout << "Examining the path " << p << " through iterators gives\n";
    for (auto& e : p)
        std::cout << e << '\n';
}
```
