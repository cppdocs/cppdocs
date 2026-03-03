---
title: "std::filesystem::directory_entry::file_size"
source_path: "cpp/filesystem/directory_entry/file_size"
category: "filesystem"
since: "C++17"
---

If the file size is cached in this [directory_entry](/cpp/filesystem/directory_entry/directory_entry/), returns the cached value. Otherwise, returns:

## Declarations
```cpp
std::uintmax_t file_size() const;
```
_(since C++17)_

```cpp
std::uintmax_t file_size( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The size of the referred-to filesystem object.

## Example
```cpp
#include <cmath>
#include <cstdint>
#include <filesystem>
#include <iostream>
 
struct HumanReadable
{
    std::uintmax_t size{};
 
    template<typename Os> friend Os& operator<<(Os& os, HumanReadable hr)
    {
        int i{};
        double mantissa = hr.size;
        for (; mantissa >= 1024.0; mantissa /= 1024.0, ++i)
        {}
        os << std::ceil(mantissa * 10.0) / 10.0 << i["BKMGTPE"];
        return i ? os << "B (" << hr.size << ')' : os;
    }
};
 
int main(int argc, const char* argv[])
{
    const auto dir = argc == 2 ? std::filesystem::path{argv[1]}
                               : std::filesystem::current_path();
 
    for (std::filesystem::directory_entry const& entry : 
         std::filesystem::directory_iterator(dir))
        if (entry.is_regular_file())
            std::cout << entry.path().filename() << " size: "
                      << HumanReadable{entry.file_size()} << '\n';
}
```

## See also
- [file_size](/cpp/filesystem/file_size/)
