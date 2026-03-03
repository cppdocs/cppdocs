---
title: "std::filesystem::path::assign"
source_path: "cpp/filesystem/path/assign"
category: "filesystem"
since: "C++17"
---

Replaces the contents to the path object by a new pathname constructed from the given character sequence.

## Declarations
```cpp
path& assign( string_type&& source );
```
_(since C++17)_

```cpp
template< class Source >
path& assign( const Source& source );
```
_(since C++17)_

```cpp
template< class InputIt >
path& assign( InputIt first, InputIt last );
```
_(since C++17)_

## Parameters
- `source`: a character range to use, represented as std::string, std::string_view, pointer to a null-terminated multibyte string, or as an input iterator with char value type that points to a null-terminated multibyte string
- `first, last`: a character range to use

## Return value
*this

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3244 | C++17 | constraint that Source cannot be path was missing | added |

## See also
- [operator=](/cpp/filesystem/path/operator/)
