---
title: "std::filesystem::relative, std::filesystem::proximate"
source_path: "cpp/filesystem/relative"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

1) Returns relative(p, current_path(), ec).

## Declarations
```cpp
path relative( const std::filesystem::path& p,
std::error_code& ec );
```
_(since C++17)_

```cpp
path relative( const std::filesystem::path& p,
const std::filesystem::path& base = std::filesystem::current_path() );
```
_(since C++17)_

```cpp
path relative( const std::filesystem::path& p,
const std::filesystem::path& base,
std::error_code& ec );
```
_(since C++17)_

```cpp
path proximate( const std::filesystem::path& p,
std::error_code& ec );
```
_(since C++17)_

```cpp
path proximate( const std::filesystem::path& p,
const std::filesystem::path& base = std::filesystem::current_path() );
```
_(since C++17)_

```cpp
path proximate( const std::filesystem::path& p,
const std::filesystem::path& base,
std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: an existing path
- `base`: base path, against which p will be made relative/proximate
- `ec`: error code to store error status to

## Example
```cpp
#include <filesystem>
#include <iostream>
 
void show(std::filesystem::path x, std::filesystem::path y)
{
    std::cout << "x:\t\t " << x << "\ny:\t\t " << y << '\n'
              << "relative(x, y):  "
              << std::filesystem::relative(x, y) << '\n'
              << "proximate(x, y): "
              << std::filesystem::proximate(x, y) << "\n\n";
}
 
int main()
{
    show("/a/b/c", "/a/b");
    show("/a/c", "/a/b");
    show("c", "/a/b");
    show("/a/b", "c");
}
```

## See also
- [path](/cpp/filesystem/path/)
- [absolute](/cpp/filesystem/absolute/)
- [canonicalweakly_canonical](/cpp/filesystem/canonical/)
- [lexically_normallexically_relativelexically_proximate](/cpp/filesystem/path/lexically_normal/)
