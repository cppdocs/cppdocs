---
title: "std::basic_string_view<CharT,Traits>::empty"
source_path: "cpp/string/basic_string_view/empty"
category: "string"
since: "C++17"
---

Checks if the view has no characters, i.e. whether [size()](/cpp/string/basic_string_view/size/) == 0.

## Declarations
```cpp
constexpr bool empty() const noexcept;
```
_(since C++17)_

## Return value
true if the view is empty, false otherwise.

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
- [sizelength](/cpp/string/basic_string_view/size/)
- [max_size](/cpp/string/basic_string_view/max_size/)
- [sizessize](/cpp/iterator/size/)
- [empty](/cpp/iterator/empty/)
- [empty](/cpp/string/basic_string/empty/)
