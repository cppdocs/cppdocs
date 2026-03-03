---
title: "std::filesystem::hash_value"
source_path: "cpp/filesystem/path/hash_value"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
std::size_t hash_value( const std::filesystem::path& p ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: a std::filesystem::path object

## Return value
A hash value such that if for two paths, p1 == p2 then hash_value(p1) == hash_value(p2).

## Notes
Equality of two paths is determined by comparing each component separately, so, for example "a//b" equals "a/b" and has the same hash_value.

hash_value originates from the [Boost.filesystem](https://www.boost.org/doc/libs/release/libs/filesystem/doc/index.htm) library where it was used for interoperability with boost.hash (which calls hash_value found by [argument-dependent lookup](/cpp/language/adl/) or [boost::hash_value](https://www.boost.org/doc/libs/1_76_0/doc/html/hash/reference.html#id-1_3_11_11_2_2_27-bb) where available).

## Example
```cpp
#include <cassert>
#include <cstddef>
#include <filesystem>
#include <iomanip>
#include <iostream>
#include <unordered_set>
namespace fs = std::filesystem;
 
void show_hash(fs::path const& p)
{
    std::cout << std::hex << std::uppercase << std::setw(16)
              << fs::hash_value(p) << " : " << p << '\n';
}
 
int main()
{
    auto tmp1 = fs::path{"/tmp"};
    auto tmp2 = fs::path{"/tmp/../tmp"};
    assert(!(tmp1 == tmp2));
    assert(fs::equivalent(tmp1, tmp2));
    show_hash(tmp1);
    show_hash(tmp2);
 
    for (auto s : {"/a///b", "/a//b", "/a/c", "...", "..", ".", ""})
        show_hash(s);
 
    // A hash function object to work with unordered_* containers:
    struct PathHash
    {
        std::size_t operator()(fs::path const& p) const noexcept
        {
            return fs::hash_value(p);
        }
    };
    std::unordered_set<fs::path, PathHash> dirs{
        "/bin", "/bin", "/lib", "/lib", "/opt", "/opt", "/tmp", "/tmp/../tmp"};
    for (fs::path const& p : dirs)
        std::cout << p << ' ';
    std::cout << '\n';
}
```

## See also
- [compare](/cpp/filesystem/path/compare/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/filesystem/path/operator_cmp/)
- [equivalent](/cpp/filesystem/equivalent/)
- [hash](/cpp/utility/hash/)
- [std::hash<std::filesystem::path>](/cpp/filesystem/path/hash/)
- [std::filesystem::path](/cpp/filesystem/path/)
