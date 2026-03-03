---
title: "std::basic_fstream<CharT,Traits>::basic_fstream"
source_path: "cpp/io/basic_fstream/basic_fstream"
category: "io"
since: "C++17"
---

Constructs new file stream.

## Declarations
```cpp
basic_fstream();
```

```cpp
explicit basic_fstream( const char* filename,
std::ios_base::openmode mode
= std::ios_base::in | std::ios_base::out );
```

```cpp
explicit basic_fstream( const std::filesystem::path::value_type* filename,
std::ios_base::openmode mode
= std::ios_base::in | std::ios_base::out );
```
_(since C++17)_

```cpp
explicit basic_fstream( const std::string& filename,
std::ios_base::openmode mode
= std::ios_base::in | std::ios_base::out );
```
_(since C++11)_

```cpp
template< class FsPath >
explicit basic_fstream( const FsPath& filename,
std::ios_base::openmode mode
= std::ios_base::in | std::ios_base::out );
```
_(since C++17)_

```cpp
basic_fstream( basic_fstream&& other );
```
_(since C++11)_

```cpp
basic_fstream( const basic_fstream& rhs ) = delete;
```
_(since C++11)_

## Parameters
- `filename`: the name of the file to be opened
- `mode`: specifies stream open mode. Following constants and bit-wise OR between them may be used: Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode
- `other`: another file stream to use as source

## Example
```cpp
#include <fstream>
#include <string>
#include <utility>
 
int main()
{
    std::fstream f0;
    std::fstream f1("test.bin", std::ios::binary);
    std::string name = "example.txt";
    std::fstream f2(name);
    std::fstream f3(std::move(f1));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 460 | C++98 | the default argument of mode in overload (2)was missing (it is present in the synopsis) | added |
| LWG 3430 | C++17 | std::filesystem::path overload led to unwanted conversions | avoided by making it a template |

## See also
- [open](/cpp/io/basic_fstream/open/)
- [open](/cpp/io/basic_filebuf/open/)
- [set_rdbuf](/cpp/io/basic_ios/set_rdbuf/)
- [(constructor)](/cpp/io/basic_iostream/basic_iostream/)
