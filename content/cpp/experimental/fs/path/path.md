---
title: "std::experimental::filesystem::path::path"
source_path: "cpp/experimental/fs/path/path"
category: "experimental"
---

Constructs a new path object.

## Declarations
```cpp
path();
```
_(filesystem TS)_

```cpp
path( const path& p );
```
_(filesystem TS)_

```cpp
path( path&& p );
```
_(filesystem TS)_

```cpp
template< class Source >
path( const Source& source );
```
_(filesystem TS)_

```cpp
template< class InputIt >
path( InputIt first, InputIt last );
```
_(filesystem TS)_

```cpp
template< class Source >
path( const Source& source, const std::locale& loc );
```
_(filesystem TS)_

```cpp
template< class InputIt >
path( InputIt first, InputIt last, const std::locale& loc );
```
_(filesystem TS)_

## Parameters
- `p`: a path to copy
- `source`: a std::basic_string, pointer to a null-terminated character string, or an input iterator with a character value type that points to a null-terminated character sequence (the character type must be char for overload (6)
- `first, last`: pair of LegacyInputIterators that specify a UTF-8 encoded character sequence
- `loc`: locale that defines encoding conversion to use

## Notes
For portable pathname generation from Unicode strings, see [u8path](/cpp/experimental/fs/path/u8path/).

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p1 = "/usr/lib/sendmail.cf"; // portable format
    fs::path p2 = "C:\\users\\abcdef\\AppData\\Local\\Temp\\"; // native format
    fs::path p3 = L"D:/猫.txt"; // wide string
 
    std::cout << "p1 = " << p1 << '\n'
              << "p2 = " << p2 << '\n'
              << "p3 = " << p3 << '\n';
}
```

## See also
- [u8path](/cpp/experimental/fs/path/u8path/)
