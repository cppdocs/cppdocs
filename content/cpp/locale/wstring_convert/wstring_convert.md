---
title: "std::wstring_convert<Codecvt,Elem,Wide_alloc,Byte_alloc>::wstring_convert"
source_path: "cpp/locale/wstring_convert/wstring_convert"
category: "locale"
since: "C++14"
---

2,3) If pcvt is a null pointer, the behavior is undefined.

## Declarations
```cpp
wstring_convert() : wstring_convert( new Codecvt ) {}
```

```cpp
explicit wstring_convert( Codecvt* pcvt );
```

```cpp
wstring_convert( Codecvt* pcvt, state_type state );
```

```cpp
explicit wstring_convert( const byte_string& byte_err,
const wide_string& wide_err = wide_string() );
```

```cpp
wstring_convert( const std::wstring_convert& ) = delete;
```
_(since C++14)_

## Parameters
- `pcvt`: pointer to the conversion facet
- `state`: initial value of the conversion shift state
- `byte_err`: narrow string to display on errors
- `wide_err`: wide string to display on errors

## Example
```cpp
#include <codecvt>
#include <locale>
#include <utility>
 
// utility wrapper to adapt locale-bound facets for wstring/wbuffer convert
template<class Facet>
struct deletable_facet : Facet
{
    using Facet::Facet; // inherit constructors
    ~deletable_facet() {}
};
 
int main()
{
    // UTF-16le / UCS4 conversion
    std::wstring_convert
        <std::codecvt_utf16<char32_t, 0x10ffff, std::little_endian>> u16to32;
 
    // UTF-8 / wide string conversion with custom messages
    std::wstring_convert<std::codecvt_utf8<wchar_t>> u8towide("Error!", L"Error!");
 
    // GB18030 / wide string conversion facet
    using F = deletable_facet<std::codecvt_byname<wchar_t, char, std::mbstate_t>>;
    std::wstring_convert<F> gbtowide(new F("zh_CN.gb18030"));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2175 | C++11 | pcvt could be a null pointer | the behavior is undefined in this case |
| LWG 2176 | C++11 | constructors accepting single argument were implicit | made explicit |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |
