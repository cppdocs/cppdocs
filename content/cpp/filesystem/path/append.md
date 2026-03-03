---
title: "std::filesystem::path::append, std::filesystem::path::operator/="
source_path: "cpp/filesystem/path/append"
category: "filesystem"
since: "C++17"
---

1) If p.is_absolute() || (p.has_root_name() && p.root_name() != root_name()), then replaces the current path with p as if by operator=(p) and finishes.

## Declarations
```cpp
path& operator/=( const path& p );
```
_(since C++17)_

```cpp
template< class Source >
path& operator/=( const Source& source );
```
_(since C++17)_

```cpp
template< class Source >
path& append( const Source& source );
```
_(since C++17)_

```cpp
template< class InputIt >
path& append( InputIt first, InputIt last );
```
_(since C++17)_

## Parameters
- `p`: pathname to append
- `source`: std::basic_string, std::basic_string_view, null-terminated multicharacter string, or an input iterator pointing to a null-terminated multicharacter sequence, which represents a path name (either in portable or in native format)
- `first, last`: pair of LegacyInputIterators that specify a multicharacter sequence that represents a path name

## Return value
*this

## Notes
These functions effectively yield an approximation of the meaning of the argument path p in an environment where *this is the starting directory.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::path p1 = "C:";
    p1 /= "Users"; // does not insert a separator
    std::cout << "\"C:\" / \"Users\" == " << p1 << '\n';
    p1 /= "batman"; // inserts fs::path::preferred_separator, '\' on Windows
    std::cout << "\"C:\" / \"Users\" / \"batman\" == " << p1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3244 | C++17 | constraint that Source cannot be path was missing | added |

## See also
- [concatoperator+=](/cpp/filesystem/path/concat/)
- [operator/](/cpp/filesystem/path/operator_slash/)
