---
title: "std::filesystem::directory_iterator"
source_path: "cpp/filesystem/directory_iterator"
header: "<filesystem>"
---

directory_iterator is a [LegacyInputIterator](/cpp/named_req/InputIterator/) that iterates over the [directory_entry](/cpp/filesystem/directory_entry/) elements of a directory (but does not visit the subdirectories). The iteration order is unspecified, except that each directory entry is visited only once. The special pathnames dot and dot-dot are skipped.

## Declarations
```cpp
class directory_iterator;
```
_(since C++17)_

## Notes
Many low-level OS APIs for directory traversal retrieve file attributes along with the next directory entry. The constructors and the non-const member functions of std::filesystem::directory_iterator store these attributes, if any, in the pointed-to [std::filesystem::directory_entry](/cpp/filesystem/directory_entry/) without calling [directory_entry::refresh](/cpp/filesystem/directory_entry/refresh/), which makes it possible to examine the attributes of the directory entries as they are being iterated over, without making additional system calls.

## Example
```cpp
#include <algorithm>
#include <filesystem>
#include <fstream>
#include <iostream>
 
int main()
{
    const std::filesystem::path sandbox{"sandbox"};
    std::filesystem::create_directories(sandbox/"dir1"/"dir2");
    std::ofstream{sandbox/"file1.txt"};
    std::ofstream{sandbox/"file2.txt"};
 
    std::cout << "directory_iterator:\n";
    // directory_iterator can be iterated using a range-for loop
    for (auto const& dir_entry : std::filesystem::directory_iterator{sandbox}) 
        std::cout << dir_entry.path() << '\n';
 
    std::cout << "\ndirectory_iterator as a range:\n";
    // directory_iterator behaves as a range in other ways, too
    std::ranges::for_each(
        std::filesystem::directory_iterator{sandbox},
        [](const auto& dir_entry) { std::cout << dir_entry << '\n'; });
 
    std::cout << "\nrecursive_directory_iterator:\n";
    for (auto const& dir_entry : std::filesystem::recursive_directory_iterator{sandbox}) 
        std::cout << dir_entry << '\n';
 
    // delete the sandbox dir and all contents within it, including subdirs
    std::filesystem::remove_all(sandbox);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3480 | C++20 | directory_iterator was neither a borrowed_range nor a view | it is both |

## See also
- [recursive_directory_iterator](/cpp/filesystem/recursive_directory_iterator/)
- [directory_options](/cpp/filesystem/directory_options/)
- [directory_entry](/cpp/filesystem/directory_entry/)
