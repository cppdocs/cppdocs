---
title: "std::experimental::filesystem::directory_iterator"
source_path: "cpp/experimental/fs/directory_iterator"
header: "<experimental/filesystem>"
category: "experimental"
---

directory_iterator is a [LegacyInputIterator](/cpp/named_req/inputiterator/) that iterates over the [directory_entry](/cpp/experimental/fs/directory_entry/) elements of a directory (but does not visit the subdirectories). The iteration order is unspecified, except that each directory entry is visited only once. The special pathnames dot and dot-dot are skipped.

## Declarations
```cpp
class directory_iterator;
```
_(filesystem TS)_

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::create_directories("sandbox/a/b");
    std::ofstream{"sandbox/file1.txt"};
    std::ofstream{"sandbox/file2.txt"};
    for (const fs::directory_entry& entry : fs::directory_iterator{"sandbox"})
        std::cout << entry << '\n';
    fs::remove_all("sandbox");
}
```

## See also
- [recursive_directory_iterator](/cpp/experimental/fs/recursive_directory_iterator/)
- [directory_options](/cpp/experimental/fs/directory_options/)
- [directory_entry](/cpp/experimental/fs/directory_entry/)
