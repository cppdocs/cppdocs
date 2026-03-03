---
title: "std::filesystem::space"
source_path: "cpp/filesystem/space"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Determines the information about the filesystem on which the pathname p is located, as if by POSIX [statvfs](https://pubs.opengroup.org/onlinepubs/9799919799/functions/fstatvfs.html).

## Declarations
```cpp
std::filesystem::space_info space( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
std::filesystem::space_info space( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to examine
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The filesystem information (a [filesystem::space_info](/cpp/filesystem/space_info/) object).

## Notes
[space_info.available](/cpp/filesystem/space_info/) may be less than [space_info.free](/cpp/filesystem/space_info/).

## Example
```cpp
#include <cstdint>
#include <filesystem>
#include <iostream>
#include <locale>
 
std::uintmax_t disk_usage_percent(const std::filesystem::space_info& si,
                                  bool is_privileged = false) noexcept
{
    if (constexpr std::uintmax_t X(-1);
        si.capacity == 0 || si.free == 0 || si.available == 0 ||
        si.capacity == X || si.free == X || si.available == X
    )
        return 100;
 
    std::uintmax_t unused_space = si.free, capacity = si.capacity;
    if (!is_privileged)
    {
        const std::uintmax_t privileged_only_space = si.free - si.available;
        unused_space -= privileged_only_space;
        capacity -= privileged_only_space;
    }
    const std::uintmax_t used_space{capacity - unused_space};
    return 100 * used_space / capacity;
}
 
void print_disk_space_info(auto const& dirs, int width = 14)
{
    (std::cout << std::left).imbue(std::locale("en_US.UTF-8"));
 
    for (const auto s : {"Capacity", "Free", "Available", "Use%", "Dir"})
        std::cout << "│ " << std::setw(width) << s << ' ';
 
    for (std::cout << '\n'; auto const& dir : dirs)
    {
        std::error_code ec;
        const std::filesystem::space_info si = std::filesystem::space(dir, ec);
        for (auto x : {si.capacity, si.free, si.available, disk_usage_percent(si)})
            std::cout << "│ " << std::setw(width) << static_cast<std::intmax_t>(x) << ' ';
        std::cout << "│ " << dir << '\n';
    }
}
 
int main()
{
    const auto dirs = {"/dev/null", "/tmp", "/home", "/proc", "/null"};
    print_disk_space_info(dirs);
}
```

## See also
- [space_info](/cpp/filesystem/space_info/)
