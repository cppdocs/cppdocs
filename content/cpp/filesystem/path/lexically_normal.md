---
title: "std::filesystem::path::lexically_normal, std::filesystem::path::lexically_relative, std::filesystem::path::lexically_proximate"
source_path: "cpp/filesystem/path/lexically_normal"
category: "filesystem"
since: "C++17"
---

1) Returns *this converted to [normal form](/cpp/filesystem/path/) in its generic format.

## Declarations
```cpp
path lexically_normal() const;
```
_(since C++17)_

```cpp
path lexically_relative( const path& base ) const;
```
_(since C++17)_

```cpp
path lexically_proximate( const path& base ) const;
```
_(since C++17)_

## Notes
These conversions are purely lexical. They do not check that the paths exist, do not follow symlinks, and do not access the filesystem at all. For symlink-following counterparts of lexically_relative and lexically_proximate, see [relative](/cpp/filesystem/relative/) and [proximate](/cpp/filesystem/relative/).

On Windows, the returned path has backslashes (the preferred separators).

On POSIX, no filename in a relative path is acceptable as a root-name.

## Example
```cpp
#include <cassert>
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    assert(fs::path("a/./b/..").lexically_normal() == "a/");
    assert(fs::path("a/.///b/../").lexically_normal() == "a/");
    assert(fs::path("/a/d").lexically_relative("/a/b/c") == "../../d");
    assert(fs::path("/a/b/c").lexically_relative("/a/d") == "../b/c");
    assert(fs::path("a/b/c").lexically_relative("a") == "b/c");
    assert(fs::path("a/b/c").lexically_relative("a/b/c/x/y") == "../..");
    assert(fs::path("a/b/c").lexically_relative("a/b/c") == ".");
    assert(fs::path("a/b").lexically_relative("c/d") == "../../a/b");
    assert(fs::path("a/b").lexically_relative("/a/b") == "");
    assert(fs::path("a/b").lexically_proximate("/a/b") == "a/b");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3070 | C++17 | a filename that can also be a root-name may cause surprising result | treated as error case |
| LWG 3096 | C++17 | trailing "/" and "/." are handled incorrectly | corrected |

## See also
- [relativeproximate](/cpp/filesystem/relative/)
