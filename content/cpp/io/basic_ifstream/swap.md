---
title: "std::basic_ifstream<CharT,Traits>::swap"
source_path: "cpp/io/basic_ifstream/swap"
category: "io"
since: "C++11"
---

Exchanges the state of the stream with those of other.

## Declarations
```cpp
void swap( basic_ifstream& other );
```
_(since C++11)_

## Parameters
- `other`: stream to exchange the state with

## Return value
(none)

## Example
```cpp
#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>
 
bool create_stream(std::fstream& fs, const std::string& path)
{
    try
    {
        std::fstream ts{path, ts.trunc | ts.in | ts.out};
        if (ts.is_open())
        {
            ts.swap(fs); // stream objects are not copyable
            return true;
        }
    }
    catch (...)
    {
        std::cout << "Exception!\n";
    }
    return false;
}
 
void use_stream(std::fstream& fs)
{
    fs.seekg(0);
    std::string data;
    fs >> data;
    std::cout << "data: " << std::quoted(data) << '\n';
}
 
int main()
{
    std::fstream fs;
    std::string path = "/tmp/test_file.txt";
    if (create_stream(fs, path))
    {
        fs.write(path.c_str(), path.length());
        use_stream(fs);
    }
}
```

## See also
- [operator=](/cpp/io/basic_ifstream/operator/)
- [swap](/cpp/io/basic_filebuf/swap/)
