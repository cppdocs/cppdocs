---
title: "operator<<,>>(std::filesystem::path)"
source_path: "cpp/filesystem/path/operator"
category: "filesystem"
since: "C++17"
---

Performs stream input or output on the path p. [std::quoted](/cpp/io/manip/quoted/) is used so that spaces do not cause truncation when later read by stream input operator.

## Declarations
```cpp
template< class CharT, class Traits >
friend std::basic_ostream<CharT,Traits>&
operator<<( std::basic_ostream<CharT,Traits>& os, const path& p );
```
_(since C++17)_

```cpp
template< class CharT, class Traits >
friend std::basic_istream<CharT,Traits>&
operator>>( std::basic_istream<CharT,Traits>& is, path& p );
```
_(since C++17)_

## Parameters
- `os`: stream to perform output on
- `is`: stream to perform input on
- `p`: path to insert or extract

## Example
```cpp
#include <filesystem>
#include <iostream>
 
int main()
{
    std::cout << std::filesystem::current_path() << '\n';
    std::cout << std::filesystem::temp_directory_path() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2989 | C++17 | allowed insertion of everything convertible to path in the presence of a using-directive | made hidden friend |
