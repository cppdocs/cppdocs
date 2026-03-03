---
title: "std::ios_base::seekdir"
source_path: "cpp/io/ios_base/seekdir"
category: "io"
---

Specifies file seeking direction type. The following constants are defined:

## Declarations
```cpp
typedef /*implementation defined*/ seekdir;
```

```cpp
static constexpr seekdir beg = /*implementation defined*/
static constexpr seekdir end = /*implementation defined*/
static constexpr seekdir cur = /*implementation defined*/
```

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    std::istringstream in("Hello, World!");
    std::string word1, word2, word3, word4, word5;
 
    in >> word1;
    in.seekg(0, std::ios_base::beg); // <- rewind
    in >> word2;
    in.seekg(1, std::ios_base::cur); // -> seek from cur pos toward the end
    in >> word3;
    in.seekg(-6, std::ios_base::cur); // <- seek from cur pos (end) toward begin
    in >> word4;
    in.seekg(-6, std::ios_base::end); // <- seek from end toward begin
    in >> word5;
 
    std::cout << "word1 = " << word1 << '\n'
              << "word2 = " << word2 << '\n'
              << "word3 = " << word3 << '\n'
              << "word4 = " << word4 << '\n'
              << "word5 = " << word5 << '\n';
}
```

## See also
- [seekg](/cpp/io/basic_istream/seekg/)
- [seekp](/cpp/io/basic_ostream/seekp/)
- [pubseekoff](/cpp/io/basic_streambuf/pubseekoff/)
