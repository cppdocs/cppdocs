---
title: "std::filesystem::path::operator="
source_path: "cpp/filesystem/path/operator"
category: "filesystem"
since: "C++17"
---

1) Replaces the contents of *this with a pathname whose both native and generic format representations equal those of p.

## Declarations
```cpp
path& operator=( const path& p );
```
_(since C++17)_

```cpp
path& operator=( path&& p ) noexcept;
```
_(since C++17)_

```cpp
path& operator=( string_type&& source );
```
_(since C++17)_

```cpp
template< class Source >
path& operator=( const Source& source );
```
_(since C++17)_

## Parameters
- `p`: a path to assign
- `source`: a std::basic_string, std::basic_string_view, pointer to a null-terminated character/wide character string, or an input iterator that points to a null-terminated character/wide character sequence. The character type must be one of char, char8_t, (since C++20)char16_t, char32_t, wchar_t

## Return value
*this

## Example
```cpp
#include <filesystem>
namespace fs = std::filesystem;
 
int main()
{
    fs::path p = "C:/users/abcdef/AppData/Local";
    p = p / "Temp"; // move assignment
    const wchar_t* wstr = L"D:/猫.txt";
    p = wstr; // assignment from a source
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3244 | C++17 | constraint that Source cannot be path was missing | added |

## See also
- [assign](/cpp/filesystem/path/assign/)
- [(constructor)](/cpp/filesystem/path/path/)
