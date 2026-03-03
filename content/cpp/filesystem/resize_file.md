---
title: "std::filesystem::resize_file"
source_path: "cpp/filesystem/resize_file"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Changes the size of the regular file named by p as if by POSIX [truncate](https://pubs.opengroup.org/onlinepubs/9699919799/functions/truncate.html): if the file size was previously larger than new_size, the remainder of the file is discarded. If the file was previously smaller than new_size, the file size is increased and the new area appears as if zero-filled.

## Declarations
```cpp
void resize_file( const std::filesystem::path& p,
std::uintmax_t new_size );
```
_(since C++17)_

```cpp
void resize_file( const std::filesystem::path& p,
std::uintmax_t new_size,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to resize
- `new_size`: size that the file will now have
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
On systems that support sparse files, increasing the file size does not increase the space it occupies on the file system: space allocation takes place only when non-zero bytes are written to the file.

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
#include <locale>
 
int main()
{
    auto p = std::filesystem::temp_directory_path() / "example.bin";
    std::ofstream{p}.put('a');
    std::cout.imbue(std::locale{"en_US.UTF8"});
    std::cout << "File size:  " << std::filesystem::file_size(p) << '\n'
              << "Free space: " << std::filesystem::space(p).free << '\n';
    std::filesystem::resize_file(p, 64*1024); // resize to 64 KB
    std::cout << "File size:  " << std::filesystem::file_size(p) << '\n'
              << "Free space: " << std::filesystem::space(p).free << '\n';
    std::filesystem::remove(p);
}
```

## See also
- [file_size](/cpp/filesystem/file_size/)
- [space](/cpp/filesystem/space/)
