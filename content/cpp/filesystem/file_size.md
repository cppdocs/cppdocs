---
title: "std::filesystem::file_size"
source_path: "cpp/filesystem/file_size"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

If p does not exist, reports an error.

## Declarations
```cpp
std::uintmax_t file_size( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::uintmax_t file_size( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The size of the file, in bytes.

## Example
```cpp
#include <cmath>
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
struct HumanReadable
{
    std::uintmax_t size{};
 
private:
    friend std::ostream& operator<<(std::ostream& os, HumanReadable hr)
    {
        int o{};
        double mantissa = hr.size;
        for (; mantissa >= 1024.; mantissa /= 1024., ++o);
        os << std::ceil(mantissa * 10.) / 10. << "BKMGTPE"[o];
        return o ? os << "B (" << hr.size << ')' : os;
    }
};
 
int main(int, char const* argv[])
{
    fs::path example = "example.bin";
    fs::path p = fs::current_path() / example;
    std::ofstream(p).put('a'); // create file of size 1
    std::cout << example << " size = " << fs::file_size(p) << '\n';
    fs::remove(p);
 
    p = argv[0];
    std::cout << p << " size = " << HumanReadable{fs::file_size(p)} << '\n';
 
    try
    {
        std::cout << "Attempt to get size of a directory:\n";
        [[maybe_unused]] auto x_x = fs::file_size("/dev");
    }
    catch (fs::filesystem_error& e)
    {
        std::cout << e.what() << '\n';
    }
 
    for (std::error_code ec; fs::path bin : {"cat", "mouse"})
    {
        bin = "/bin"/bin;
        if (const std::uintmax_t size = fs::file_size(bin, ec); ec)
            std::cout << bin << " : " << ec.message() << '\n';
        else
            std::cout << bin << " size = " << HumanReadable{size} << '\n';
    }
}
```

## See also
- [resize_file](/cpp/filesystem/resize_file/)
- [space](/cpp/filesystem/space/)
- [file_size](/cpp/filesystem/directory_entry/file_size/)
