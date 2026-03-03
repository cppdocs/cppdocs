---
title: "std::wbuffer_convert<Codecvt,Elem,Tr>::wbuffer_convert"
source_path: "cpp/locale/wbuffer_convert/wbuffer_convert"
category: "locale"
since: "C++14"
---

2) If pcvt is a null pointer, the behavior is undefined.

## Declarations
```cpp
wbuffer_convert() : wbuffer_convert(nullptr) {}
```

```cpp
explicit wbuffer_convert( std::streambuf* bytebuf,
Codecvt* pcvt = new Codecvt,
state_type state = state_type() );
```

```cpp
wbuffer_convert( const std::wbuffer_convert& ) = delete;
```
_(since C++14)_

## Parameters
- `bytebuf`: pointer to the underlying buffer
- `pcvt`: pointer to a standalone (not managed by a locale) facet
- `state`: the initial value of the character conversion state

## Example
```cpp
#include <codecvt>
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    // Wrap a UTF-8 string stream in a UCS4 wbuffer_convert
    std::stringbuf utf8buf("z\u00df\u6c34\U0001f34c");
                       // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9f\x8d\x8c"
                       // or u8"zß水🍌"
    std::wbuffer_convert<std::codecvt_utf8<wchar_t>> conv_in(&utf8buf);
    std::wistream ucsbuf(&conv_in);
    std::cout << "Reading from a UTF-8 stringbuf via wbuffer_convert: "
              << std::hex << std::showbase;
    for (wchar_t c; ucsbuf.get(c);)
        std::cout << static_cast<std::wint_t>(c) << ' ';
 
    // Wrap a UTF-8 aware std::cout in a UCS4 wbuffer_convert to output UCS4
    std::wbuffer_convert<std::codecvt_utf8<wchar_t>> conv_out(std::cout.rdbuf());
    std::wostream out(&conv_out);
    std::cout << "\nSending UCS4 data to std::cout via wbuffer_convert: ";
    out << L"z\u00df\u6c34\U0001f34c\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2175 | C++11 | pcvt could be a null pointer | the behavior is undefined in this case |
| LWG 2176 | C++11 | constructors accepting single argument were implicit | made explicit |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |
