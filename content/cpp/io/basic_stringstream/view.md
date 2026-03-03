---
title: "std::basic_stringstream<CharT,Traits,Allocator>::view"
source_path: "cpp/io/basic_stringstream/view"
category: "io"
since: "C++20"
---

Obtains a [std::basic_string_view](/cpp/string/basic_string_view/) over the underlying string object. Equivalent to return rdbuf()->view();.

## Declarations
```cpp
std::basic_string_view<CharT, Traits> view() const noexcept;
```
_(since C++20)_

## Return value
A [std::basic_string_view](/cpp/string/basic_string_view/) over the underlying string object.

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    // input/output stream
    std::stringstream buf1;
    buf1 << 69;
    int n = 0;
    buf1 >> n;
    std::cout << "1) buf1 = [" << buf1.view() << "], n = " << n << '\n';
 
    // output stream in append mode
    std::ostringstream buf2("test", std::ios_base::ate);
    buf2 << '1';
    std::cout << "2) buf2 = [" << buf2.view() << "]\n";
 
    // input stream
    std::istringstream inbuf("-42");
    inbuf >> n;
    std::cout << "3) inbuf = [" << inbuf.view() << "], n = " << n << '\n';
}
```

## See also
- [view](/cpp/io/basic_stringbuf/view/)
