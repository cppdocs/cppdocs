---
title: "std::experimental::filesystem::path::operator="
source_path: "cpp/experimental/fs/path/operator"
category: "experimental"
---

1) Replaces the contents of *this with a copy of the contents of p.

## Declarations
```cpp
path& operator=( const path& p );
```
_(filesystem TS)_

```cpp
path& operator=( path&& p );
```
_(filesystem TS)_

```cpp
template< class Source >
path& operator=( const Source& source );
```
_(filesystem TS)_

## Parameters
- `p`: a path to assign
- `source`: a std::basic_string, pointer to a null-terminated character/wide character string, or an input iterator that points to a null-terminated character/wide character sequence. The character type must be one of char, char16_t, char32_t, wchar_t

## Return value
*this

## Example
```cpp
#include <experimental/filesystem>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = "C:/users/abcdef/AppData/Local";
    p = p / "Temp"; // move assignment
    const wchar_t* wstr = L"D:/猫.txt";
    p = wstr; // assignment from a source
}
```

## See also
- [assign](/cpp/experimental/fs/path/assign/)
- [(constructor)](/cpp/experimental/fs/path/path/)
