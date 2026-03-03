---
title: "std::experimental::filesystem::recursive_directory_iterator"
source_path: "cpp/experimental/fs/recursive_directory_iterator"
header: "<experimental/filesystem>"
category: "experimental"
---

recursive_directory_iterator is a [LegacyInputIterator](/cpp/named_req/inputiterator/) that iterates over the [directory_entry](/cpp/experimental/fs/directory_entry/) elements of a directory, and, recursively, over the entries of all subdirectories. The iteration order is unspecified, except that each directory entry is visited only once.

## Declarations
```cpp
class recursive_directory_iterator;
```
_(filesystem TS)_

## Notes
A recursive_directory_iterator typically holds a reference-counted pointer (to satisfy shallow-copy semantics of [LegacyInputIterator](/cpp/named_req/inputiterator/)) to an implementation object, which holds:

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
    for (const fs::directory_entry& entry : fs::recursive_directory_iterator("sandbox"))
        std::cout << entry << '\n';
    fs::remove_all("sandbox");
}
```

## See also
- [directory_iterator](/cpp/experimental/fs/directory_iterator/)
- [directory_entry](/cpp/experimental/fs/directory_entry/)
- [directory_options](/cpp/experimental/fs/directory_options/)
