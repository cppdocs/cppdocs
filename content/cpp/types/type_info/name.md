---
title: "std::type_info::name"
source_path: "cpp/types/type_info/name"
category: "types"
---

Returns an implementation defined null-terminated character string containing the name of the type. No guarantees are given; in particular, the returned string can be identical for several types and change between invocations of the same program.

## Declarations
```cpp
const char* name() const;
```
_(noexcept since C++11)_

## Return value
[Null-terminated character string](/cpp/string/byte/) containing the name of the type.

## Notes
The lifetime of the array pointed to by the returned pointer is not specified, but in practice it persists as long as the RTTI data structure for the given type exists, which has application lifetime unless loaded from a dynamic library (that can be unloaded).

Some implementations (such as MSVC, IBM, Oracle) produce a human-readable type name. Others, most notably gcc and clang, return the mangled name, which is specified by the [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html#typeid). The mangled name can be converted to human-readable form using implementation-specific API such as [abi::__cxa_demangle](https://gcc.gnu.org/onlinedocs/libstdc++/manual/ext_demangling.html) directly or through [boost::core::demangle](https://www.boost.org/doc/libs/release/libs/core/doc/html/core/demangle.html). It can also be piped through the command-line utility c++filt -t.

## Example
```cpp
#include <boost/core/demangle.hpp>
#include <cstdlib>
#include <iostream>
#include <string>
#include <typeinfo>
 
struct Base { virtual ~Base() = default; };
struct Derived : Base {};
 
int main()
{
    Base b1;
    Derived d1;
 
    const Base* pb = &b1;
    std::cout << typeid(*pb).name() << '\n';
    pb = &d1;
    std::cout << typeid(*pb).name() << '\n';
 
    std::string real_name = boost::core::demangle(typeid(pb).name());
    std::cout << typeid(pb).name() << " => " << real_name << '\n';
 
    std::cout << "c++filt => " << std::flush;
    std::string s = typeid(pb).name();
    std::system(("c++filt -t " + s).data());
}
```

## See also
- [hash_code](/cpp/types/type_info/hash_code/)
