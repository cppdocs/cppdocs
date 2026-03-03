---
title: "std::basic_string_view<CharT,Traits>::size, std::basic_string_view<CharT,Traits>::length"
source_path: "cpp/string/basic_string_view/size"
category: "string"
since: "C++17"
---

Returns the number of CharT elements in the view, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
constexpr size_type size() const noexcept;
```
_(since C++17)_

```cpp
constexpr size_type length() const noexcept;
```
_(since C++17)_

## Return value
The number of CharT elements in the view.

## Example
```cpp
#include <iostream>
#include <string_view>
 
// Print a string surrounded by single quotes, its
// length and whether it is considered empty.
void check_string(std::string_view ref)
{
    std::cout << std::boolalpha
              << "'" << ref << "' has " << ref.size()
              << " character(s); emptiness: " << ref.empty() << '\n';
}
 
int main(int argc, char **argv)
{
    // An empty string
    check_string("");
 
    // Almost always not empty: argv[0]
    if (argc > 0)
        check_string(argv[0]);
}
```

## See also
- [empty](/cpp/string/basic_string_view/empty/)
- [max_size](/cpp/string/basic_string_view/max_size/)
- [sizelength](/cpp/string/basic_string/size/)
