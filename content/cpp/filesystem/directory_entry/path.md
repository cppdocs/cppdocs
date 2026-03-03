---
title: "std::filesystem::directory_entry::path"
source_path: "cpp/filesystem/directory_entry/path"
category: "filesystem"
since: "C++17"
---

Returns the full path the directory entry refers to.

## Declarations
```cpp
const std::filesystem::path& path() const noexcept;
```
_(since C++17)_

```cpp
operator const std::filesystem::path& () const noexcept;
```
_(since C++17)_

## Return value
The full path the directory entry refers to.

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
 
namespace fs = std::filesystem;
 
std::string get_stem(const fs::path& p) { return p.stem().string(); }
void create_file(const fs::path& p) { std::ofstream o{p}; }
 
int main()
{
    const fs::path dir{"tmp_dir"};
    fs::create_directory(dir);
    create_file(dir / "one");
    create_file(dir / "two");
    create_file(dir / "three");
 
    for (const auto& file : fs::directory_iterator(dir))
    {
        // Explicit conversion
        std::cout << get_stem(file.path()) << '\n';
 
        // Implicit conversion
        std::cout << get_stem(file) << '\n';
    }
 
    fs::remove_all(dir);
}
```

## See also
- [path](/cpp/filesystem/path/)
