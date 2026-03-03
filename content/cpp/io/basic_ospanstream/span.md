---
title: "std::basic_ospanstream<CharT,Traits>::span"
source_path: "cpp/io/basic_ospanstream/span"
category: "io"
since: "C++23"
---

1) Gets a span referencing the written area if [std::ios_base::out](/cpp/io/ios_base/openmode/) is set in the open mode of the wrapped std::basic_spanbuf, or a span referencing the underlying buffer otherwise.

## Declarations
```cpp
std::span<CharT> span() const noexcept;
```
_(since C++23)_

```cpp
void span( std::span<CharT> s ) noexcept;
```
_(since C++23)_

## Parameters
- `s`: std::span referencing the storage to be use as the new underlying buffer of stream

## Example
```cpp
#include <cassert>
#include <iostream>
#include <span>
#include <spanstream>
 
int main()
{
    char out_buf[16];
    std::ospanstream ost{std::span<char>{out_buf}};
    ost << "C++" << ' ' << 23 << '\0'; // note explicit null-termination
    auto sp = ost.span();
    assert(
        sp[0] == 'C' && sp[1] == '+' && sp[2] == '+' &&
        sp[3] == ' ' && sp[4] == '2' && sp[5] == '3' &&
        sp[6] == '\0'
    );
    std::cout << "sp.data(): [" << sp.data() << "]\n";
    std::cout << "out_buf: [" << out_buf << "]\n";
    // spanstream uses out_buf as internal storage, no allocations
    assert(static_cast<char*>(out_buf) == sp.data());
 
    const char in_buf[] = "X Y 42";
    std::ispanstream ist{std::span<const char>{in_buf}};
    assert(static_cast<const char*>(in_buf) == ist.span().data());
    char c;
    ist >> c;
    assert(c == 'X');
    ist >> c;
    assert(c == 'Y');
    int i;
    ist >> i;
    assert(i == 42);
    ist >> i; // buffer is exhausted
    assert(!ist);
}
```

## See also
- [span](/cpp/io/basic_spanbuf/span/)
