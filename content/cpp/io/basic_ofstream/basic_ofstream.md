---
title: "std::basic_ofstream<CharT,Traits>::basic_ofstream"
source_path: "cpp/io/basic_ofstream/basic_ofstream"
category: "io"
since: "C++17"
---

Constructs new file stream.

## Declarations
```cpp
basic_ofstream();
```

```cpp
explicit basic_ofstream( const char* filename,
std::ios_base::openmode mode
= std::ios_base::out );
```

```cpp
explicit basic_ofstream( const std::filesystem::path::value_type* filename,
std::ios_base::openmode mode
= std::ios_base::out );
```
_(since C++17)_

```cpp
explicit basic_ofstream( const std::string& filename,
std::ios_base::openmode mode
= std::ios_base::out );
```
_(since C++11)_

```cpp
template< class FsPath >
explicit basic_ofstream( const FsPath& filename,
std::ios_base::openmode mode
= std::ios_base::out );
```
_(since C++17)_

```cpp
basic_ofstream( basic_ofstream&& other );
```
_(since C++11)_

```cpp
basic_ofstream( const basic_ofstream& rhs ) = delete;
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
    std::ofstream f0;
    std::ofstream f1("test.bin", std::ios::binary);
    std::string name = "example.txt";
    std::ofstream f2(name);
    std::ofstream f3(std::move(f1));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3430 | C++17 | std::filesystem::path overload led to unwanted conversions | avoided by making it a template |

## See also
- [open](/cpp/io/basic_ofstream/open/)
- [open](/cpp/io/basic_filebuf/open/)
- [set_rdbuf](/cpp/io/basic_ios/set_rdbuf/)
- [(constructor)](/cpp/io/basic_ostream/basic_ostream/)
