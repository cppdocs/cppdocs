---
title: "std::filesystem::canonical, std::filesystem::weakly_canonical"
source_path: "cpp/filesystem/canonical"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1,2) Converts path p to a canonical absolute path, i.e. an absolute path that has no dot, dot-dot elements or symbolic links in its generic format representation. If p is not an absolute path, the function behaves as if it is first made absolute by [std::filesystem::absolute](/cpp/filesystem/absolute/)(p). The path p must exist.

## Declarations
```cpp
path canonical( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
path canonical( const std::filesystem::path& p,
std::error_code& ec );
```
_(since C++17)_

```cpp
path weakly_canonical( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
path weakly_canonical( const std::filesystem::path& p,
std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: a path which may be absolute or relative; for canonical it must be an existing path
- `ec`: error code to store error status to

## Notes
The function canonical() is modeled after the POSIX [realpath](https://pubs.opengroup.org/onlinepubs/9699919799/functions/realpath.html).

The function weakly_canonical() was introduced to simplify operational semantics of [relative()](/cpp/filesystem/relative/).

## Example
```cpp
#include <filesystem>
#include <iostream>
 
int main()
{
    /* set up sandbox directories:
     a
     └── b
         ├── c1
         │   └── d <== current path
         └── c2
             └── e
    */
    auto old = std::filesystem::current_path();
    auto tmp = std::filesystem::temp_directory_path();
    std::filesystem::current_path(tmp);
    auto d1 = tmp / "a/b/c1/d";
    auto d2 = tmp / "a/b/c2/e";
    std::filesystem::create_directories(d1);
    std::filesystem::create_directories(d2);
    std::filesystem::current_path(d1);
 
    auto p1 = std::filesystem::path("../../c2/./e");
    auto p2 = std::filesystem::path("../no-such-file");
    std::cout << "Current path is "
              << std::filesystem::current_path() << '\n'
              << "Canonical path for " << p1 << " is "
              << std::filesystem::canonical(p1) << '\n'
              << "Weakly canonical path for " << p2 << " is "
              << std::filesystem::weakly_canonical(p2) << '\n';
    try
    {
        [[maybe_unused]] auto x_x = std::filesystem::canonical(p2);
        // NOT REACHED
    }
    catch (const std::exception& ex)
    {
        std::cout << "Canonical path for " << p2 << " threw exception:\n"
                  << ex.what() << '\n';
    }
 
    // cleanup
    std::filesystem::current_path(old);
    const auto count = std::filesystem::remove_all(tmp / "a");
    std::cout << "Deleted " << count << " files or directories.\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2956 | C++17 | canonical has a spurious base parameter | removed |

## See also
- [path](/cpp/filesystem/path/)
- [absolute](/cpp/filesystem/absolute/)
- [relativeproximate](/cpp/filesystem/relative/)
