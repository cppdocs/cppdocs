---
title: "std::basic_filebuf<CharT,Traits>::open"
source_path: "cpp/io/basic_filebuf/open"
category: "io"
since: "C++11"
---

If the associated file was already open (is_open() != false), returns a null pointer right away.

## Declarations
```cpp
basic_filebuf* open( const char* s, std::ios_base::openmode mode );
```

```cpp
basic_filebuf* open( const std::string& str, std::ios_base::openmode mode );
```
_(since C++11)_

```cpp
basic_filebuf* open( const std::filesystem::path& p,
std::ios_base::openmode mode );
```
_(since C++17)_

```cpp
basic_filebuf* open( const std::filesystem::path::value_type* s,
std::ios_base::openmode mode );
```
_(since C++17)_

## Parameters
- `s, str, p`: the file name to open; s must point to a null-terminated string
- `openmode`: the file opening mode, a binary OR of the std::ios_base::openmode modes

## Return value
this on success, a null pointer on failure.

## Notes
open() is typically called through the constructor or the open() member function of [std::basic_fstream](/cpp/io/basic_fstream/).

## Example
```cpp
#include <fstream>
#include <iostream>
 
int main()
{
    std::string filename = "Test.b";
    std::filebuf fb;
 
    // prepare a file to read
    double d = 3.14;
    if (!fb.open(filename, std::ios::binary | std::ios::out))
    {
        std::cout << "Open file " << filename << " for write failed\n";
        return 1;
    } 
    fb.sputn(reinterpret_cast<char*>(&d), sizeof d);
    fb.close();
 
    // open file for reading
    double d2 = 0.0;
    if (!fb.open(filename, std::ios::binary | std::ios::in))
    {
        std::cout << "Open file " << filename << " for read failed\n";
        return 1;
    }
 
    auto got = fb.sgetn(reinterpret_cast<char*>(&d2), sizeof d2);
    if (sizeof(d2) != got)
        std::cout << "Read of " << filename << " failed\n";
    else
        std::cout << "Read back from file: " << d2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 596 | C++98 | open() could not open files in append mode | can open in append mode |

## See also
- [is_open](/cpp/io/basic_filebuf/is_open/)
- [close](/cpp/io/basic_filebuf/close/)
