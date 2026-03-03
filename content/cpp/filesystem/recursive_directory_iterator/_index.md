---
title: "std::filesystem::recursive_directory_iterator"
source_path: "cpp/filesystem/recursive_directory_iterator"
header: "<filesystem>"
---

recursive_directory_iterator is a [LegacyInputIterator](/cpp/named_req/InputIterator/) that iterates over the [directory_entry](/cpp/filesystem/directory_entry/) elements of a directory, and, recursively, over the entries of all subdirectories. The iteration order is unspecified, except that each directory entry is visited only once.

## Declarations
```cpp
class recursive_directory_iterator;
```
_(since C++17)_

## Notes
A recursive_directory_iterator typically holds a reference-counted pointer (to satisfy shallow-copy semantics of [LegacyInputIterator](/cpp/named_req/InputIterator/)) to an implementation object, which holds:

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
#include <string>
namespace fs = std::filesystem;
 
int main()
{
    std::filesystem::current_path(std::filesystem::temp_directory_path());
    std::filesystem::create_directories("sandbox/a/b");
    std::ofstream("sandbox/file1.txt");
    std::filesystem::create_symlink("a", "sandbox/syma");
 
    // Iterate over the std::filesystem::directory_entry elements explicitly
    auto entry_length{3UZ};
    for (const fs::directory_entry& dir_entry :
            fs::recursive_directory_iterator("sandbox"))
    {
        std::cout << dir_entry << '\n';
        if (auto l{dir_entry.path().string().length()}; entry_length < l)
            entry_length = l;
    }
    std::cout << std::string(entry_length + 2, '-') << '\n';
 
    // Iterate over the std::filesystem::directory_entry elements using `auto`
    for (auto const& dir_entry : fs::recursive_directory_iterator("sandbox"))
        std::cout << dir_entry << '\n';
 
    std::filesystem::remove_all("sandbox");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3480 | C++20 | recursive_directory_iterator was neither a borrowed_range nor a view | it is both |

## See also
- [directory_iterator](/cpp/filesystem/directory_iterator/)
- [directory_entry](/cpp/filesystem/directory_entry/)
- [directory_options](/cpp/filesystem/directory_options/)
