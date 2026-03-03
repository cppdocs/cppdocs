---
title: "std::basic_ifstream<CharT,Traits>::basic_ifstream"
source_path: "cpp/io/basic_ifstream/basic_ifstream"
category: "io"
since: "C++17"
---

Constructs new file stream.

## Declarations
```cpp
basic_ifstream();
```

```cpp
explicit basic_ifstream( const char* filename,
std::ios_base::openmode mode
= std::ios_base::in );
```

```cpp
explicit basic_ifstream( const std::filesystem::path::value_type* filename,
std::ios_base::openmode mode
= std::ios_base::in );
```
_(since C++17)_

```cpp
explicit basic_ifstream( const std::string& filename,
std::ios_base::openmode mode
= std::ios_base::in );
```
_(since C++11)_

```cpp
template< class FsPath >
explicit basic_ifstream( const FsPath& filename,
std::ios_base::openmode mode
= std::ios_base::in );
```
_(since C++17)_

```cpp
basic_ifstream( basic_ifstream&& other );
```
_(since C++11)_

```cpp
basic_ifstream( const basic_ifstream& rhs ) = delete;
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
    std::ifstream f0;
    std::ifstream f1("test.bin", std::ios::binary);
    std::string name = "example.txt";
    std::ifstream f2(name);
    std::ifstream f3(std::move(f1));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3430 | C++17 | std::filesystem::path overload led to unwanted conversions | avoided by making it a template |

## See also
- [open](/cpp/io/basic_ifstream/open/)
- [open](/cpp/io/basic_filebuf/open/)
- [set_rdbuf](/cpp/io/basic_ios/set_rdbuf/)
- [(constructor)](/cpp/io/basic_istream/basic_istream/)
