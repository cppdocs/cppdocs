---
title: "std::cin, std::wcin"
source_path: "cpp/io/cin"
header: "<iostream>"
category: "io"
---

The global objects std::cin and std::wcin control input from a stream buffer of implementation-defined type (derived from [std::streambuf](/cpp/io/basic_streambuf/)), associated with the standard C input stream [stdin](/cpp/io/c/std_streams/).

## Declarations
```cpp
extern std::istream cin;
```

```cpp
extern std::wistream wcin;
```

## Notes
The 'c' in the name refers to "character" ([stroustrup.com FAQ](https://www.stroustrup.com/bs_faq2.html#cout)); cin means "character input" and wcin means "wide character input".

## Example
```cpp
#include <iostream>
 
struct Foo
{
    int n;
    Foo()
    {
        std::cout << "Enter n: "; // no flush needed
        std::cin >> n;
    }
};
 
Foo f; // static object
 
int main()
{
    std::cout << "f.n is " << f.n << '\n';
}
```

## See also
- [Init](/cpp/io/ios_base/init/)
- [coutwcout](/cpp/io/cout/)
- [stdout](/cpp/io/c/std_streams/)
- [stdinstdoutstderr](/cpp/io/c/std_streams/)
