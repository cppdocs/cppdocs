---
title: "std::cout, std::wcout"
source_path: "cpp/io/cout"
header: "<iostream>"
category: "io"
---

The global objects std::cout and std::wcout control output to a stream buffer of implementation-defined type (derived from [std::streambuf](/cpp/io/basic_streambuf/)), associated with the standard C output stream [stdout](/cpp/io/c/std_streams/).

## Declarations
```cpp
extern std::ostream cout;
```

```cpp
extern std::wostream wcout;
```

## Notes
The 'c' in the name refers to "character" ([stroustrup.com FAQ](https://www.stroustrup.com/bs_faq2.html#cout)); cout means "character output" and wcout means "wide character output".

Because [dynamic initialization](/cpp/language/initialization/#Dynamic_initialization) of [templated](/cpp/language/templates/#Templated_entity) variables are unordered, it is not guaranteed that std::cout has been initialized to a usable state before the initialization of such variables begins, unless an object of type [std::ios_base::Init](/cpp/io/ios_base/init/) has been constructed.

## Example
```cpp
#include <iostream>
 
struct Foo
{
    int n;
    Foo()
    {
        std::cout << "static constructor\n";
    }
    ~Foo()
    {
        std::cout << "static destructor\n";
    }
};
 
Foo f; // static object
 
int main()
{
    std::cout << "main function\n";
}
```

## See also
- [Init](/cpp/io/ios_base/init/)
- [cerrwcerr](/cpp/io/cerr/)
- [stderr](/cpp/io/c/std_streams/)
- [clogwclog](/cpp/io/clog/)
- [stderr](/cpp/io/c/std_streams/)
- [stdinstdoutstderr](/cpp/io/c/std_streams/)
