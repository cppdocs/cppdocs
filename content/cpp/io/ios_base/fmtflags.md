---
title: "std::ios_base::fmtflags"
source_path: "cpp/io/ios_base/fmtflags"
category: "io"
---

Specifies available formatting flags. It is a [BitmaskType](/cpp/named_req/bitmasktype/). The following constants are defined:

## Declarations
```cpp
typedef /*implementation defined*/ fmtflags;
```

```cpp
static constexpr fmtflags dec = /*implementation defined*/
static constexpr fmtflags oct = /*implementation defined*/
static constexpr fmtflags hex = /*implementation defined*/
static constexpr fmtflags basefield = dec | oct | hex;
```

```cpp
static constexpr fmtflags left = /*implementation defined*/
static constexpr fmtflags right = /*implementation defined*/
static constexpr fmtflags internal = /*implementation defined*/
static constexpr fmtflags adjustfield = left | right | internal;
```

```cpp
static constexpr fmtflags scientific = /*implementation defined*/
static constexpr fmtflags fixed = /*implementation defined*/
static constexpr fmtflags floatfield = scientific | fixed;
```

```cpp
static constexpr fmtflags boolalpha = /*implementation defined*/
static constexpr fmtflags showbase = /*implementation defined*/
static constexpr fmtflags showpoint = /*implementation defined*/
static constexpr fmtflags showpos = /*implementation defined*/
static constexpr fmtflags skipws = /*implementation defined*/
static constexpr fmtflags unitbuf = /*implementation defined*/
static constexpr fmtflags uppercase = /*implementation defined*/
```

## Example
```cpp
#include <iostream>
 
int main()
{
    const int num = 150;
 
    // using fmtflags as class member constants:
    std::cout.setf(std::ios_base::hex, std::ios_base::basefield);
    std::cout.setf(std::ios_base::showbase);
    std::cout << num << '\n';
 
    // using fmtflags as inherited class member constants:
    std::cout.setf (std::ios::hex, std::ios::basefield);
    std::cout.setf (std::ios::showbase);
    std::cout << num << '\n';
 
    // using fmtflags as object member constants:
    std::cout.setf(std::cout.hex, std::cout.basefield);
    std::cout.setf(std::cout.showbase);
    std::cout << num << '\n';
 
    // using fmtflags as a type:
    std::ios_base::fmtflags ff;
    ff = std::cout.flags();
    ff &= ~std::cout.basefield;   // unset basefield bits
    ff |= std::cout.hex;          // set hex
    ff |= std::cout.showbase;     // set showbase
    std::cout.flags(ff);
    std::cout << num << '\n';
 
    // not using fmtflags, but using manipulators:
    std::cout << std::hex << std::showbase << num << '\n';
}
```

## See also
- [flags](/cpp/io/ios_base/flags/)
- [setf](/cpp/io/ios_base/setf/)
- [unsetf](/cpp/io/ios_base/unsetf/)
- [setbase](/cpp/io/manip/setbase/)
- [setfill](/cpp/io/manip/setfill/)
- [fixedscientifichexfloatdefaultfloat](/cpp/io/manip/fixed/)
- [showbasenoshowbase](/cpp/io/manip/showbase/)
- [boolalphanoboolalpha](/cpp/io/manip/boolalpha/)
- [showposnoshowpos](/cpp/io/manip/showpos/)
- [showpointnoshowpoint](/cpp/io/manip/showpoint/)
- [unitbufnounitbuf](/cpp/io/manip/unitbuf/)
- [skipwsnoskipws](/cpp/io/manip/skipws/)
- [uppercasenouppercase](/cpp/io/manip/uppercase/)
