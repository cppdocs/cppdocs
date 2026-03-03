---
title: "std::basic_ofstream<CharT,Traits>::open"
source_path: "cpp/io/basic_ofstream/open"
category: "io"
since: "C++17"
---

Opens and associates the file with name filename with the file stream.

## Declarations
```cpp
void open( const char* filename,
std::ios_base::openmode mode
= std::ios_base::out );
```

```cpp
void open( const std::filesystem::path::value_type* filename,
std::ios_base::openmode mode
= std::ios_base::out );
```
_(since C++17)_

```cpp
void open( const std::string& filename,
std::ios_base::openmode mode
= std::ios_base::out );
```
_(since C++11)_

```cpp
void open( const std::filesystem::path& filename,
std::ios_base::openmode mode
= std::ios_base::out );
```
_(since C++17)_

## Parameters
- `filename`: the name of the file to be opened
- `mode`: specifies stream open mode. It is a BitmaskType, the following constants are defined: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode

## Return value
(none)

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 22 | C++98 | it was unclear how error state changes upon a successful open | the error state is unchanged |
| LWG 409 | C++98 | the error state was unchanged upon a successful open | it is cleared[1] |

## See also
- [is_open](/cpp/io/basic_ofstream/is_open/)
- [close](/cpp/io/basic_ofstream/close/)
- [open](/cpp/io/basic_filebuf/open/)
