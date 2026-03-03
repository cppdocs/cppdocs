---
title: "std::filesystem::directory_entry::last_write_time"
source_path: "cpp/filesystem/directory_entry/last_write_time"
category: "filesystem"
since: "C++17"
---

If the last modification time is cached in this [directory_entry](/cpp/filesystem/directory_entry/directory_entry/), returns the cached value. Otherwise, returns:

## Declarations
```cpp
std::filesystem::file_time_type last_write_time() const;
```
_(since C++17)_

```cpp
std::filesystem::file_time_type last_write_time( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The last modification time for the referred-to filesystem object.

## Example
```cpp
#include <chrono>
#include <ctime>
#include <filesystem>
#include <format>
#include <iostream>
#include <string>
 
std::string to_string(const std::filesystem::file_time_type& ftime)
{
#if __cpp_lib_format
    return std::format("{:%c}", ftime);
#else
    std::time_t cftime = std::chrono::system_clock::to_time_t(
        std::chrono::file_clock::to_sys(ftime));
    std::string str = std::asctime(std::localtime(&cftime));
    str.pop_back(); // rm the trailing '\n' put by `asctime`
    return str;
#endif
}
 
int main()
{
    auto dir = std::filesystem::current_path();
    using Entry = std::filesystem::directory_entry;
    for (Entry const& entry : std::filesystem::directory_iterator(dir))
        std::cout << to_string(entry.last_write_time()) << " : "
                  << entry.path().filename() << '\n';
}
```

## See also
- [last_write_time](/cpp/filesystem/last_write_time/)
