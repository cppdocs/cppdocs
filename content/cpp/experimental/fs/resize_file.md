---
title: "std::experimental::filesystem::resize_file"
source_path: "cpp/experimental/fs/resize_file"
header: "<experimental/filesystem>"
category: "experimental"
---

Changes the size of the regular file named by p as if by POSIX [truncate](https://pubs.opengroup.org/onlinepubs/9699919799/functions/truncate.html): if the file size was previously larger than new_size, the remainder of the file is discarded. If the file was previously smaller than new_size, the file size is increased and the new area appears as if zero-filled.

## Declarations
```cpp
void resize_file( const path& p, std::uintmax_t new_size );
void resize_file( const path& p, std::uintmax_t new_size, error_code& ec );
```
_(filesystem TS)_

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
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = fs::temp_directory_path() / "example.bin";
    std::ofstream(p).put('a');
    std::cout << "File size:  " << fs::file_size(p) << '\n'
              << "Free space: " << fs::space(p).free << '\n';
    fs::resize_file(p, 64*1024); // resize to 64 KB
    std::cout << "File size:  " << fs::file_size(p) << '\n'
              << "Free space: " << fs::space(p).free << '\n';
    fs::remove(p);
}
```

## See also
- [file_size](/cpp/experimental/fs/file_size/)
- [space](/cpp/experimental/fs/space/)
