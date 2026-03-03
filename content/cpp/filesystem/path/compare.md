---
title: "std::filesystem::path::compare"
source_path: "cpp/filesystem/path/compare"
category: "filesystem"
since: "C++17"
---

Compares the lexical representations of the path and another path.

## Declarations
```cpp
int compare( const path& p ) const noexcept;
```
_(since C++17)_

```cpp
int compare( const string_type& str ) const;
int compare( std::basic_string_view<value_type> str ) const;
```
_(since C++17)_

```cpp
int compare( const value_type* s ) const;
```
_(since C++17)_

## Parameters
- `p`: a path to compare to
- `str`: a string or string view representing path to compare to
- `s`: a null-terminated string representing path to compare to

## Return value
A value less than 0 if the path is lexicographically less than the given path.

## Notes
For two-way comparisons, [binary operators](/cpp/filesystem/path/operator_cmp/) may be more suitable.

## Example
```cpp
#include <filesystem>
#include <iostream>
#include <string_view>
namespace fs = std::filesystem;
 
void demo(fs::path p1, fs::path p2, std::string_view msg)
{
    std::cout << p1;
    const int rc = p1.compare(p2); 
    if (rc < 0)
        std::cout << " < ";
    else if (rc > 0)
        std::cout << " > ";
    else
        std::cout << " == ";
    std::cout << p2 << " \t: " << msg << '\n';
}
 
int main()
{
    demo("/a/b/", "/a/b/", "simple");
    demo("/a/b/", "/a/b/c", "simple");
    demo("/a/b/../b", "/a/b", "no canonical conversion");
    demo("/a/b", "/a/b/.", "no canonical conversion");
    demo("/a/b/", "a/c", "absolute paths order after relative ones");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2936 | C++17 | compared all path elements directly | root name and root directory handled separately |

## See also
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/filesystem/path/operator_cmp/)
