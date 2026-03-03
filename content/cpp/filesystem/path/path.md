---
title: "std::filesystem::path::path"
source_path: "cpp/filesystem/path/path"
category: "filesystem"
since: "C++17"
---

Constructs a new path object.

## Declarations
```cpp
path() noexcept;
```
_(since C++17)_

```cpp
path( const path& p );
```
_(since C++17)_

```cpp
path( path&& p ) noexcept;
```
_(since C++17)_

```cpp
path( string_type&& source, format fmt = auto_format );
```
_(since C++17)_

```cpp
template< class Source >
path( const Source& source, format fmt = auto_format );
```
_(since C++17)_

```cpp
template< class InputIt >
path( InputIt first, InputIt last, format fmt = auto_format );
```
_(since C++17)_

```cpp
template< class Source >
path( const Source& source, const std::locale& loc, format fmt = auto_format );
```
_(since C++17)_

```cpp
template< class InputIt >
path( InputIt first, InputIt last, const std::locale& loc, format fmt = auto_format );
```
_(since C++17)_

## Parameters
- `p`: a path to copy
- `source`: std::basic_string, std::basic_string_view, pointer to a null-terminated character string, or input iterator with a character value type that points to a null-terminated character sequence (the character type must be char for overload (7))
- `first, last`: pair of LegacyInputIterators that specify a character sequence
- `fmt`: enumerator of type path::format which specifies how pathname format is to be interpreted
- `loc`: locale that defines encoding conversion to use

## Notes
For portable pathname generation from Unicode strings, see [u8path](/cpp/filesystem/path/u8path/).

path constructor supports creation from UTF-8 string when the source is a sequence of char8_t.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::path p1 = "/usr/lib/sendmail.cf"; // portable format
    fs::path p2 = "C:\\users\\abcdef\\AppData\\Local\\Temp\\"; // native format
    fs::path p3 = U"D:/猫.txt"; // UTF-32 string
    fs::path p4 = u8"~/狗.txt"; // UTF-8 string
 
    std::cout << "p1 = " << p1 << '\n'
              << "p2 = " << p2 << '\n'
              << "p3 = " << p3 << '\n'
              << "p4 = " << p4 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3244 | C++17 | constraint that Source cannot be path was missing | added |

## See also
- [u8path](/cpp/filesystem/path/u8path/)
