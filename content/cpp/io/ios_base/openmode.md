---
title: "std::ios_base::openmode"
source_path: "cpp/io/ios_base/openmode"
category: "io"
since: "C++23"
---

Specifies available file open flags. It is a [BitmaskType](/cpp/named_req/bitmasktype/), the following constants are defined:

## Declarations
```cpp
typedef /* implementation defined */ openmode;
```

```cpp
static constexpr openmode app = /* implementation defined */;
static constexpr openmode binary = /* implementation defined */;
static constexpr openmode in = /* implementation defined */;
static constexpr openmode out = /* implementation defined */;
static constexpr openmode trunc = /* implementation defined */;
static constexpr openmode ate = /* implementation defined */;
```

```cpp
static constexpr openmode noreplace = /* implementation defined */;
```
_(since C++23)_

## Example
```cpp
#include <fstream>
#include <iostream>
#include <string>
 
int main()
{
    const char* fname = "unique_name.txt";
 
    // write to a temporary stream object
    std::fstream(fname, std::ios::out | std::ios::trunc) << "Hi";
 
    std::string s;
    std::fstream(fname, std::ios::in) >> s;
    std::cout << s << '\n';
}
```

## See also
- [open](/cpp/io/basic_filebuf/open/)
- [(constructor)](/cpp/io/basic_stringbuf/basic_stringbuf/)
