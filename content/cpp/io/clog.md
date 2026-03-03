---
title: "std::clog, std::wclog"
source_path: "cpp/io/clog"
header: "<iostream>"
category: "io"
---

The global objects std::clog and std::wclog control output to a stream buffer of implementation-defined type (derived from [std::streambuf](/cpp/io/basic_streambuf/)), associated with the standard C output stream [stderr](/cpp/io/c/std_streams/), but, unlike [std::cerr](/cpp/io/cerr/)/[std::wcerr](/cpp/io/cerr/), these streams are not automatically flushed and cout is not automatically tie()'d with these streams.

## Declarations
```cpp
extern std::ostream clog;
```

```cpp
extern std::wostream wclog;
```

## Notes
The 'c' in the name refers to "character" ([stroustrup.com FAQ](https://www.stroustrup.com/bs_faq2.html#cout)); clog means "character log" and wclog means "wide character log".

## Example
```cpp
#include <iostream>
 
struct Foo
{
    int n;
    Foo()
    {
        std::clog << "static constructor\n";
    }
    ~Foo()
    {
        std::clog << "static destructor\n";
    }
};
 
Foo f; // static object
 
int main()
{
    std::clog << "main function\n";
}
```

## See also
- [Init](/cpp/io/ios_base/init/)
- [cerrwcerr](/cpp/io/cerr/)
- [stderr](/cpp/io/c/std_streams/)
- [coutwcout](/cpp/io/cout/)
- [stdout](/cpp/io/c/std_streams/)
- [stdinstdoutstderr](/cpp/io/c/std_streams/)
